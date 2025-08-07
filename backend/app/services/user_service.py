from sqlalchemy.orm import Session
from typing import Optional, List
from fastapi import HTTPException, status
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate, UserResponse
import os
import uuid
from datetime import datetime

class UserService:
    """Service class for user operations"""
    
    def create_user(self, db: Session, user_data: UserCreate) -> User:
        """Create a new user profile"""
        # Check if user already exists
        existing_user = db.query(User).filter(
            (User.email == user_data.email) | (User.auth_id == user_data.auth_id)
        ).first()
        
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User already exists"
            )
        
        # Create new user
        db_user = User(**user_data.dict())
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    
    def get_user_by_id(self, db: Session, user_id: int) -> Optional[User]:
        """Get user by ID"""
        return db.query(User).filter(User.id == user_id).first()
    
    def get_user_by_auth_id(self, db: Session, auth_id: str) -> Optional[User]:
        """Get user by Supabase auth ID"""
        return db.query(User).filter(User.auth_id == auth_id).first()
    
    def get_user_by_email(self, db: Session, email: str) -> Optional[User]:
        """Get user by email"""
        return db.query(User).filter(User.email == email).first()
    
    def update_user(self, db: Session, user_id: int, user_data: UserUpdate) -> Optional[User]:
        """Update user profile"""
        db_user = self.get_user_by_id(db, user_id)
        if not db_user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        
        # Update only provided fields
        update_data = user_data.dict(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_user, field, value)
        
        db_user.updated_at = datetime.utcnow()
        db.commit()
        db.refresh(db_user)
        return db_user
    
    def delete_user(self, db: Session, user_id: int) -> bool:
        """Delete user (soft delete)"""
        db_user = self.get_user_by_id(db, user_id)
        if not db_user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        
        db_user.is_active = False
        db.commit()
        return True
    
    def upload_resume(self, db: Session, user_id: int, file_content: bytes, filename: str) -> str:
        """Upload resume file and return URL"""
        # Generate unique filename
        file_extension = filename.split('.')[-1]
        unique_filename = f"resume_{user_id}_{uuid.uuid4()}.{file_extension}"
        
        # Create uploads directory if it doesn't exist
        upload_dir = "uploads/resumes"
        os.makedirs(upload_dir, exist_ok=True)
        
        # Save file
        file_path = os.path.join(upload_dir, unique_filename)
        with open(file_path, "wb") as f:
            f.write(file_content)
        
        # Update user record
        db_user = self.get_user_by_id(db, user_id)
        if db_user:
            db_user.resume_url = f"/uploads/resumes/{unique_filename}"
            db_user.resume_filename = filename
            db.commit()
        
        return f"/uploads/resumes/{unique_filename}"
    
    def upload_cover_letter(self, db: Session, user_id: int, file_content: bytes, filename: str) -> str:
        """Upload cover letter file and return URL"""
        # Generate unique filename
        file_extension = filename.split('.')[-1]
        unique_filename = f"cover_letter_{user_id}_{uuid.uuid4()}.{file_extension}"
        
        # Create uploads directory if it doesn't exist
        upload_dir = "uploads/cover_letters"
        os.makedirs(upload_dir, exist_ok=True)
        
        # Save file
        file_path = os.path.join(upload_dir, unique_filename)
        with open(file_path, "wb") as f:
            f.write(file_content)
        
        # Update user record
        db_user = self.get_user_by_id(db, user_id)
        if db_user:
            db_user.cover_letter_url = f"/uploads/cover_letters/{unique_filename}"
            db_user.cover_letter_filename = filename
            db.commit()
        
        return f"/uploads/cover_letters/{unique_filename}" 