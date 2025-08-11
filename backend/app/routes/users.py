from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.services.user_service import UserService
from app.schemas.user import UserCreate, UserUpdate, UserResponse
from app.services.auth_service import AuthService

router = APIRouter()
user_service = UserService()
auth_service = AuthService()

@router.post("/", response_model=UserResponse)
async def create_user(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):
    """Create a new user profile"""
    return user_service.create_user(db, user_data)

@router.get("/me", response_model=UserResponse)
async def get_current_user(
    db: Session = Depends(get_db),
    current_auth_id: str = Depends(auth_service.get_current_user_id)
):
    """Get current user profile using Supabase auth_id from JWT"""
    user = user_service.get_user_by_auth_id(db, current_auth_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    return user

@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    db: Session = Depends(get_db)
):
    """Get user by ID"""
    user = user_service.get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    return user

@router.put("/me", response_model=UserResponse)
async def update_current_user(
    user_data: UserUpdate,
    db: Session = Depends(get_db),
    current_auth_id: str = Depends(auth_service.get_current_user_id)
):
    """Update current user profile using Supabase auth_id from JWT"""
    user = user_service.get_user_by_auth_id(db, current_auth_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    return user_service.update_user(db, user.id, user_data)

@router.post("/me/resume")
async def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_auth_id: str = Depends(auth_service.get_current_user_id)
):
    """Upload resume file"""
    # Validate file type
    allowed_types = ["pdf", "doc", "docx"]
    file_extension = file.filename.split('.')[-1].lower()
    
    if file_extension not in allowed_types:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF, DOC, and DOCX files are allowed"
        )
    
    # Validate file size (max 5MB)
    if file.size > 5 * 1024 * 1024:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File size must be less than 5MB"
        )
    
    # Read file content
    file_content = await file.read()
    
    # Resolve DB user and upload file
    user = user_service.get_user_by_auth_id(db, current_auth_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    file_url = user_service.upload_resume(db, user.id, file_content, file.filename)
    
    return {
        "message": "Resume uploaded successfully",
        "file_url": file_url,
        "filename": file.filename
    }

@router.post("/me/cover-letter")
async def upload_cover_letter(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_auth_id: str = Depends(auth_service.get_current_user_id)
):
    """Upload cover letter file"""
    # Validate file type
    allowed_types = ["pdf", "doc", "docx"]
    file_extension = file.filename.split('.')[-1].lower()
    
    if file_extension not in allowed_types:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF, DOC, and DOCX files are allowed"
        )
    
    # Validate file size (max 5MB)
    if file.size > 5 * 1024 * 1024:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File size must be less than 5MB"
        )
    
    # Read file content
    file_content = await file.read()
    
    # Resolve DB user and upload file
    user = user_service.get_user_by_auth_id(db, current_auth_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    file_url = user_service.upload_cover_letter(db, user.id, file_content, file.filename)
    
    return {
        "message": "Cover letter uploaded successfully",
        "file_url": file_url,
        "filename": file.filename
    }

@router.delete("/me")
async def delete_current_user(
    db: Session = Depends(get_db),
    current_auth_id: str = Depends(auth_service.get_current_user_id)
):
    """Delete current user (soft delete)"""
    user = user_service.get_user_by_auth_id(db, current_auth_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    user_service.delete_user(db, user.id)
    return {"message": "User deleted successfully"}