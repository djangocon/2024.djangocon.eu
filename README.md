<img src="djangocon_2024/static/images/logo/logo_coloured.png" height=100 />

🌍 [2024.djangocon.eu](https://2024.djangocon.eu/) \
📍 Vigo, Spain 🇪🇸 \
📅 June 5-9

[![built-with](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-blue.svg)](https://github.com/pydanny/cookiecutter-django/)
[![code-style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]()

## Local Development

### Using venv

_optional_ - Create a virtual environment

```bash
python -m venv env
```

install requirements:

```bash

> pip install -r requirements/[ local | production ].txt
```

### Using Docker

```bash
docker compose build
docker compose up
```

To access the running Django container, use `docker compose exec django /bin/bash`.
But please note that currently, `manage.py migrate` doesn't work, you need to use the provided `sqlite3.db`.

### Database seed (`sqlite3.db`)

After setting up the Django project,
point your local settings to the pre-populated SQLite database by appending the following to `config/settings/local.py`:

```
import os

# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}
```


## Code of Conduct

As a contributor, you can help us keep the Django community open and inclusive.
Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

Get started contributing by reading our [Contributing](CONTRIBUTING.md) guidelines.

## How to Contribute to DjangoConEu website

To contribute to this project, please follow these steps:

1. Fork the Repo
2. Clone the Repo to your local machine
3. Follow "Local Development"
4. make changes and submit a PR( we will review)

## Built With

- [Python](https://docs.python.org/3/) - Programming language
- [Django](https://docs.djangoproject.com/) - Web framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
