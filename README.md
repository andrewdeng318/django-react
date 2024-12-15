# Django Backend Project

A Django-based backend project with RESTful APIs, custom middleware, and React frontend integration.

## Project Structure

```
django/
├── bookstore/           # Bookstore app
├── frontend/           # React frontend
├── main/              # Main app
├── myproject/         # Project configuration
├── scripts/           # Utility scripts
├── venv/              # Virtual environment
├── manage.py          # Django management script
└── requirements.txt   # Python dependencies
```

## Features

- RESTful API endpoints
- Custom request timing middleware
- CORS support for frontend integration
- Swagger API documentation
- Request timing logging system

## Prerequisites

- Python 3.x
- Node.js and npm (for frontend)
- Virtual environment

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd django
```

2. Create and activate virtual environment:
```bash
bash scripts/create_venvs.sh
source venv/bin/activate
```

3. Install dependencies:
```bash
bash scripts/install_deps.sh
bash scripts/install_cors.sh
bash scripts/install_swagger.sh
```

4. Set up the database:
```bash
bash scripts/migrate.sh
```

5. Create admin user (optional):
```bash
bash scripts/create_admin.sh
```

## Running the Application

1. Start the Django backend:
```bash
bash scripts/run.sh
```

2. Stop the Django backend:
```bash
bash scripts/stop.sh
```

3. Start the React frontend:
```bash
cd frontend
npm start
```

## Available Scripts

- `run.sh`: Start Django development server
- `stop.sh`: Stop Django server
- `create_venvs.sh`: Create virtual environment
- `install_deps.sh`: Install Python dependencies
- `install_cors.sh`: Install CORS headers
- `install_swagger.sh`: Install Swagger documentation
- `migrate.sh`: Run database migrations
- `create_admin.sh`: Create admin user
- `create_books.sh`: Create sample book data
- `clean_cache.sh`: Clean Python cache files

## API Documentation

Access the API documentation at:
- Swagger UI: `http://localhost:8000/swagger/`
- ReDoc: `http://localhost:8000/redoc/`

## Middleware

The project includes a custom request timing middleware that:
- Measures request processing time
- Adds timing information to response headers
- Logs request paths and processing times

Logs can be viewed:
- In the console
- In `django.log` file
```bash
tail -f django.log
```

## Configuration

Key settings in `settings.py`:
- CORS configuration for frontend access
- Logging configuration
- Database settings
- Installed apps and middleware

## Frontend Integration

The React frontend is configured to communicate with the Django backend:
- Default backend URL: `http://localhost:8000`
- CORS settings enabled for frontend origin
- API endpoints accessible from frontend

## Development

1. Activate virtual environment:
```bash
source venv/bin/activate
```

2. Make migrations after model changes:
```bash
python manage.py makemigrations
python manage.py migrate
```

3. Create superuser:
```bash
python manage.py createsuperuser
```

## Troubleshooting

1. Port already in use:
```bash
bash scripts/stop.sh
bash scripts/run.sh
```

2. Clean Python cache:
```bash
bash scripts/clean_cache.sh
```

3. Check virtual environment:
```bash
bash scripts/check_venv.sh
```

## Contributing

1. Create a new branch
2. Make changes
3. Submit a pull request

## License

[Add your license information here]

## Contact

[Add your contact information here]
