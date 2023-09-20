from celery import shared_task
from .repo_script import fetch_and_store_repos
from django.conf import settings
from django.contrib.staticfiles.finders import find
import os

@shared_task
def update_repos_json():

    file_path = find('repos.json')

    fetch_and_store_repos(file_path, settings.GITHUB_PORTFOLIO_USERNAME, settings.GITHUB_EXCLUDE_REPOS)
