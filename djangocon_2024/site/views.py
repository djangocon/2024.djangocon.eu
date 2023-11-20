from django.shortcuts import render
from os import walk

from config.settings.base import APPS_DIR


def default_view(request, menu='home', submenu=None):
    path = APPS_DIR.__str__() + '/content/' + menu + ('/' + submenu if submenu else '')
    page = ''
    ctx = dict(menu=(menu if not submenu else submenu).capitalize().replace('_', ' '))
    files = []

    for dirpath, dirname, filenames in walk(path):
        files.extend(filenames)
        break

    ctx['files'] = []
    for f in sorted(files):
        content = '%s/%s' % (path, f)
        ctx['files'].append(content)

    if menu == 'home':
        page += 'pages/' + menu
        ctx['files'].append(f'{APPS_DIR.__str__()}/content/sponsors/sponsors/sponsors.md')
    elif len(files) == 0:
        page += '404'
    else:
        page += 'pages/' + 'default'

    return render(request, page + '.html', ctx)
