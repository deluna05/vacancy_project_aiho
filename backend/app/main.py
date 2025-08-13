from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

# Import routes
from app.routes import users

from app import models
from app.database import Base, engine
Base.metadata.create_all(bind=engine)


from app.core.database import create_tables
create_tables()

app = FastAPI(
    title="Job Match API",
    description="A FastAPI backend for the Job Match application",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create uploads directory if it doesn't exist
os.makedirs("uploads", exist_ok=True)
os.makedirs("uploads/resumes", exist_ok=True)
os.makedirs("uploads/cover_letters", exist_ok=True)

# Mount static files for uploads
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Include routers
app.include_router(users.router, prefix="/api/v1/users", tags=["users"])

@app.get("/")
async def root():
    return {"message": "Welcome to Job Match API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"} 