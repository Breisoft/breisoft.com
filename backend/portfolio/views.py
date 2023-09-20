from django.http import JsonResponse
from django.views import View
from django.core.cache import cache
from django.templatetags.static import static

from fastfs import read_json

class RetrievePortfolioJSONView(View):

    cache_key = 'portfolio_json_data'

    # 24 hours cache timeout
    cache_timeout = 86400

    def _load_and_cache_file(self):

        data = read_json(static('repos.json'))

        # Store data in cache
        cache.set(self.cache_key, data, self.cache_timeout)

        return data

    def get(self, request, *args, **kwargs):

        # Try to fetch the data from cache
        data = cache.get(self.cache_key)

        # If not cached, read from the file and store in cache
        if data is None:
           data = self._load_and_cache_file()

        return JsonResponse(data)
