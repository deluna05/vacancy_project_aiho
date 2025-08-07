from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    """Base user schema"""
    email: EmailStr
    full_name: str
    phone: Optional[str] = None
    location: Optional[str] = None
    bio: Optional[str] = None
    title: Optional[str] = None
    company: Optional[str] = None
    experience_years: Optional[int] = None

class UserCreate(UserBase):
    """Schema for creating a user"""
    auth_id: str

class UserUpdate(BaseModel):
    """Schema for updating a user"""
    full_name: Optional[str] = None
    phone: Optional[str] = None
    location: Optional[str] = None
    bio: Optional[str] = None
    title: Optional[str] = None
    company: Optional[str] = None
    experience_years: Optional[int] = None
    resume_url: Optional[str] = None
    resume_filename: Optional[str] = None
    cover_letter_url: Optional[str] = None
    cover_letter_filename: Optional[str] = None
    email_notifications: Optional[bool] = None

class UserResponse(UserBase):
    """Schema for user response"""
    id: int
    auth_id: str
    resume_url: Optional[str] = None
    resume_filename: Optional[str] = None
    cover_letter_url: Optional[str] = None
    cover_letter_filename: Optional[str] = None
    is_active: bool
    email_notifications: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True 