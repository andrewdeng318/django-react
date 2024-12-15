# Django Project Scripts

This directory contains utility scripts for managing the Django project.

## Setup Scripts
- `setup.sh`: Initial project setup
- `install_deps.sh`: Install project dependencies
- `create_venvs.sh`: Create virtual environment
- `check_venv.sh`: Check virtual environment status

## Database Scripts
- `migrate.sh`: Run database migrations
- `create_books.sh`: Create sample book data
- `create_admin.sh`: Create admin superuser

## Development Scripts
- `run.sh`: Run development server
- `clean_cache.sh`: Clean Python cache files
- `install_swagger.sh`: Install and setup Swagger documentation

## Virtual Environment
- `venv_commands.sh`: Common virtual environment commands

## Usage
Make sure to give execute permission to scripts before running:
```bash
chmod +x scripts/*.sh
```

Then you can run any script from the project root:
```bash
./scripts/setup.sh
./scripts/run.sh
# etc...
```
