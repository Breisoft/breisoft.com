import os
import subprocess
import requests
from fastfs import read_file, write_json
from fastfs.utils import touch_directory, delete_directory

def clone_repo(repo_url, target_dir):
    """Clones a repository to the target directory."""
    subprocess.run(['git', 'clone', repo_url, target_dir])

def process_local_files(target_dir):
    """Process files from a cloned repo and return their content as a dictionary."""
    data = {}
    
    # List of file extensions we're interested in
    source_exts = ['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.scss', '.py', '.go', '.rs', '.java', '.c', '.cpp', '.md', '.txt']
    
    # Directories and files to ignore
    exclusions = ['node_modules', '.git', 'dist', 'build', '.gitignore']

    for root, _, files in os.walk(target_dir):
        # Check if we're in an excluded directory
        if any(exclusion in root for exclusion in exclusions):
            continue

        for file in files:
            if any(file.endswith(ext) for ext in source_exts):
                
                rel_path = os.path.relpath(os.path.join(root, file), target_dir)

                path = os.path.join(root, file)

                data[rel_path] = read_file(path)

    return data

def fetch_and_process_repo(repo_name, repo_url):
    """Fetches the repo and returns the content of the files as a JSON."""

    temp_dir = f"temp_repos/temp_{repo_name}"
    clone_repo(repo_url, temp_dir)
    data = process_local_files(temp_dir)
    return data

def fetch_repo_names(username):
    resp = requests.get(f'https://api.github.com/users/{username}/repos')

    data = resp.json()

    repo_ls = []

    for repo in data:
        repo_name = repo['name']
        repo_url = f'https://github.com/{username}/{repo_name}'

        if repo['private'] is True:
            continue

        if repo['owner']['login'] != username:
            continue

        repo_ls.append((repo_name, repo_url))

    return repo_ls

def fetch_and_store_repos(file_path, username, exclude_repos=[]):
    repos = fetch_repo_names(username)

    touch_directory('temp_repos')

    repos_data = []

    for repo_name, repo_url in repos:

        if repo_name in exclude_repos:
            continue

        repo_contents = fetch_and_process_repo(repo_name, f'{repo_url}.git')

        repo_dict = {'name': repo_name, 'url': repo_url, 'contents': repo_contents}

        repos_data.append(repo_dict)

    delete_directory('temp_repos')

    write_json(file_path, repos_data)