# Job Match

A full-stack job matching application built with Next.js frontend and FastAPI backend.

## Project Structure

```
Job-Match/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/      # Next.js App Router
│   │   ├── components/ # Reusable components
│   │   ├── lib/      # Utility functions
│   │   └── types/    # TypeScript definitions
│   └── README.md     # Frontend documentation
├── backend/           # FastAPI application
│   ├── app/
│   │   ├── core/     # Configuration & database
│   │   ├── models/   # SQLAlchemy models
│   │   ├── schemas/  # Pydantic schemas
│   │   ├── routes/   # API endpoints
│   │   └── services/ # Business logic
│   └── README.md     # Backend documentation
└── README.md         # This file
```

## Quick Start

### Prerequisites

- **Node.js 18+** for frontend
- **Python 3.8+** for backend
- **Git** for version control

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Create and activate virtual environment:**
```bash
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Set up environment:**
```bash
cp env.example .env
# Edit .env with your configuration
```

5. **Run the FastAPI server:**
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:3000`

## Development

### Backend Architecture

The backend follows a clean architecture pattern:

- **Models**: SQLAlchemy database models (currently commented)
- **Schemas**: Pydantic models for validation (currently commented)
- **Routes**: FastAPI route handlers (currently commented)
- **Services**: Business logic layer (currently commented)
- **Core**: Configuration and database setup

### Frontend Features

- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency
- **Responsive Design**: Mobile-first approach

### Implementation Workflow

1. **Start with Backend**:
   - Uncomment and implement schemas in `backend/app/schemas/`
   - Create database models in `backend/app/models/`
   - Add business logic in `backend/app/services/`
   - Implement API routes in `backend/app/routes/`

2. **Then Frontend**:
   - Create components in `frontend/src/components/`
   - Add pages in `frontend/src/app/`
   - Implement API integration
   - Add styling with Tailwind CSS

## API Documentation

When the backend is running, visit:
- **Interactive API docs**: `http://localhost:8000/docs`
- **Alternative API docs**: `http://localhost:8000/redoc`

## Available Scripts

### Backend
- `python main.py` - Run the development server
- `alembic upgrade head` - Apply database migrations
- `alembic revision --autogenerate -m "message"` - Create migration

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

### Backend (.env)
```env
DATABASE_URL=sqlite:///./job_match.db
SECRET_KEY=your-secret-key-here
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=Job Match
```

## Database Setup

When ready to implement models:

```bash
cd backend
source venv/bin/activate

# Initialize Alembic (first time only)
alembic init alembic

# Create initial migration
alembic revision --autogenerate -m "Initial migration"

# Apply migrations
alembic upgrade head
```

## Deployment

### Backend
- **Railway**: Connect GitHub repository
- **Heroku**: Use Procfile and requirements.txt
- **Docker**: Create Dockerfile

### Frontend
- **Vercel**: Connect GitHub repository (recommended)
- **Netlify**: Deploy from build output
- **Railway**: Connect GitHub repository

## Contributing

1. Follow the existing code structure
2. Use TypeScript for frontend code
3. Follow PEP 8 for Python code
4. Write meaningful commit messages
5. Test your changes before submitting

## Tech Stack

### Backend
- **FastAPI**: Modern web framework
- **SQLAlchemy**: ORM for database operations
- **Pydantic**: Data validation and settings
- **Alembic**: Database migrations
- **Uvicorn**: ASGI server

### Frontend
- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **ESLint**: Code quality 