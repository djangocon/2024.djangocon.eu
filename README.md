<img src="djangocon_2024/static/images/logo/logo_coloured.png" height=100 />

🌍 [2024.djangocon.eu](https://2024.djangocon.eu/) \
📍 Vigo, Spain 🇪🇸 \
📅 June 5-9

[![built-with](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-blue.svg)](https://github.com/pydanny/cookiecutter-django/)
[![code-style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)

## Running

First, make sure to have all requirements installed using:

```bash
> pip install -r requirements/[ local | production ].txt
```

And create a PostgreSQL database 'djangocon_2024'

- On Debian-based 10+:

```bash
sudo su - postgres -c "createdb djangocon_2024"
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
3. cd into Repo and create a virtual env (python -m venv env)
4. Install base dependencies (pip install -r requirement/base.txt)
5. Install production dependencies(pip install -r requirement/production.txt)
6. Create a Postgres DB, and then makemigrations
7. make changes and submit a PR( we will review)

## Built With

- [Python](https://docs.python.org/3/) - Programming language
- [Django](https://docs.djangoproject.com/) - Web framework
