
def links(request):
    return {
        'home': '/home/',
        'site_menu': {
            'Talks': {
                'dropdown': 'true',
                'submenu': {
                    'Call for Participation': '/talks/cfp/',
                    'Selection Process': '/talks/selection_process/',
                    'Schedule': '/talks/schedule/',
                },
            },
            'Sponsors & Jobs': {
                'dropdown': 'true',
                'submenu': {
                    'Sponsors': '/sponsors/sponsors',
                    'Jobs': '/sponsors/jobs/',
                    'Sponsorship': '/sponsors/sponsorship/',
                },
            },
            'Conduct': {
                'dropdown': 'true',
                'submenu': {
                    'Code of Conduct': '/conduct/code_of_conduct/',
                    'Response Guide': '/conduct/response_guide/',
                    'Privacy Guide': '/conduct/privacy_guide/',
                },
            },
            'Tickets': {
                'dropdown': 'false',
                'href': '/tickets/',
            },
            'About': {
                'dropdown': 'true',
                'submenu': {
                    'Contact': '/about/contact/',
                    'Credits': '/about/credits/',
                },
            },
        },
        'social_media': {
            'twitter': 'https://twitter.com/DjangoConEurope/',
            'slack': 'https://join.slack.com/t/djangoconeurope/shared_invite/zt-1gjg5lqkz-qVQkNnhjztXVme7TQ7ziQA',
            'youtube': 'https://youtube.com/user/djangoconeurope/',
            'linkedin': 'https://linkedin.com/company/djangocon-europe/',
            'github': 'https://github.com/djangocon/2024.djangocon.eu/',
        }
    }