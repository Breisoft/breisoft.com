from django.core.management.base import BaseCommand
from ...repo_script import fetch_and_store_repos
from django.conf import settings
from django.contrib.staticfiles.finders import find
import os

class Command(BaseCommand):
    help = 'Check if repos.json exists and update if not'

    def handle(self, *args, **kwargs):

        file_path = find('repos.json')

        if not os.path.exists(file_path):

            fetch_and_store_repos(file_path, settings.GITHUB_PORTFOLIO_USERNAME, settings.GITHUB_EXCLUDE_REPOS)

            self.stdout.write(self.style.SUCCESS('Successfully initiated repos.json update'))