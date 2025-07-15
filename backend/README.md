# Job Match Backend

A FastAPI backend for the Job Match application with clean architecture and proper separation of concerns.

## Project Structure

```
backend/
├── app/
│   ├── core/           # Core configuration
│   │   ├── config.py   # Settings management
│   │   └── database.py # Database setup
│   ├── models/         # SQLAlchemy models
│   │   ├── base.py     # Base model class
│   │   ├── user.py     # User model (commented)
│   │   └── job.py      # Job model (commented)
│   ├── schemas/        # Pydantic schemas
│   │   ├── base.py     # Base schema class
│   │   ├── user.py     # User schemas (commented)
│   │   ├── job.py      # Job schemas (commented)
│   │   └── auth.py     # Auth schemas (commented)
│   ├── routes/         # API routes
│   │   ├── users.py    # User endpoints (commented)
│   │   ├── jobs.py     # Job endpoints (commented)
│   │   └── auth.py     # Auth endpoints (commented)
│   ├── services/       # Business logic
│   │   ├── user_service.py    # User operations (commented)
│   │   ├── job_service.py     # Job operations (commented)
│   │   └── auth_service.py    # Auth operations (commented)
│   └── main.py         # FastAPI app setup
├── main.py             # Entry point
├── requirements.txt    # Dependencies
├── alembic.ini        # Database migrations
└── README.md          # This file
```

## Architecture

This backend follows a clean architecture pattern:

- **Models**: SQLAlchemy database models
- **Schemas**: Pydantic models for request/response validation
- **Routes**: FastAPI route handlers
- **Services**: Business logic layer
- **Core**: Configuration and database setup

## Setup

1. **Create a virtual environment:**
```bash
python3 -m venv venv
```

2. **Activate the virtual environment:**
```bash
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Set up environment variables:**
```bash
cp env.example .env
# Edit .env with your configuration
```

5. **Run the development server:**
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## Development Workflow

### 1. Database Setup
When ready to implement models:
```bash
# Initialize Alembic (first time only)
alembic init alembic

# Create a migration
alembic revision --autogenerate -m "Initial migration"

# Apply migrations
alembic upgrade head
```

### 2. Implementing Features
1. **Start with Schemas**: Define your data models in `app/schemas/`
2. **Create Models**: Implement SQLAlchemy models in `app/models/`
3. **Add Services**: Implement business logic in `app/services/`
4. **Create Routes**: Add API endpoints in `app/routes/`
5. **Update main.py**: Uncomment route imports and include routers

### 3. Example Implementation Order
```python
# 1. Uncomment and implement schemas
# app/schemas/user.py -> UserCreate, UserUpdate, UserResponse

# 2. Uncomment and implement models
# app/models/user.py -> User model

# 3. Uncomment and implement services
# app/services/user_service.py -> UserService class

# 4. Uncomment and implement routes
# app/routes/users.py -> User endpoints

# 5. Update main.py to include routes
# from app.routes import users
# app.include_router(users.router, prefix="/api/v1")
```

## API Documentation

Once the server is running, you can access:
- **Interactive API docs**: `http://localhost:8000/docs`
- **Alternative API docs**: `http://localhost:8000/redoc`

## Available Endpoints

Currently implemented:
- `GET /` - Welcome message
- `GET /health` - Health check

Ready to implement:
- `GET /api/v1/users` - Get all users
- `POST /api/v1/users` - Create user
- `GET /api/v1/jobs` - Get all jobs
- `POST /api/v1/jobs` - Create job
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration

## Dependencies

- **FastAPI**: Web framework
- **SQLAlchemy**: ORM for database operations
- **Pydantic**: Data validation and settings
- **Alembic**: Database migrations
- **Uvicorn**: ASGI server
- **Python-Jose**: JWT token handling
- **Passlib**: Password hashing
- **Email-Validator**: Email validation

## Environment Variables

Copy `env.example` to `.env` and configure:
- `DATABASE_URL`: Database connection string
- `SECRET_KEY`: JWT secret key
- `API_HOST`: Server host (default: 0.0.0.0)
- `API_PORT`: Server port (default: 8000)
- `DEBUG`: Debug mode (default: True) 