import os
from django.conf import settings

def get_target_static_path(filename):
    """
    Returns the target absolute path for a static file.
    This does not ensure the file exists, just provides the path.
    """
    if settings.DEBUG:
        target_dir = settings.STATICFILES_DIRS[0] if settings.STATICFILES_DIRS else ''
    else:
        # In production, assume it's in STATIC_ROOT
        target_dir = settings.STATIC_ROOT

    return os.path.join(target_dir, filename)
