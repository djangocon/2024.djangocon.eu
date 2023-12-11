
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
            'Information': {
                'dropdown': 'true',
                'submenu': {
                    'Vigo': '/information/vigo/',
                    'Venue': '/information/venue/',
                    'Grants': '/information/grants/',
                    'Sprints': '/information/sprints/',
                    'Hospitality': '/information/hospitality/',
                    'Social Events': '/information/social_events/',
                    'T-Shirts': '/information/tshirts/',
                    'Announcements': '/information/announcements/',
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
                'href': 'https://pretix.evolutio.pt/evolutio/djceu2024/',
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
