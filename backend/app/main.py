from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routes (uncomment when you create them)
# from app.routes import jobs, users, auth

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

# Include routers (uncomment when you create them)
# app.include_router(jobs.router, prefix="/api/v1")
# app.include_router(users.router, prefix="/api/v1")
# app.include_router(auth.router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Welcome to Job Match API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"} 