from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import BaseModel

class User(BaseModel):
    """User model with profile information"""
    __tablename__ = "users"
    
    # Supabase Auth ID (links to auth.users)
    auth_id = Column(String(255), unique=True, nullable=False, index=True)
    
    # Basic Profile Information
    email = Column(String(255), unique=True, nullable=False, index=True)
    full_name = Column(String(255), nullable=False)
    phone = Column(String(20), nullable=True)
    location = Column(String(255), nullable=True)
    bio = Column(Text, nullable=True)
    
    # Professional Information
    title = Column(String(255), nullable=True)  # e.g., "Software Engineer"
    company = Column(String(255), nullable=True)
    experience_years = Column(Integer, nullable=True)
    
    # Resume and Documents
    resume_url = Column(String(500), nullable=True)
    resume_filename = Column(String(255), nullable=True)
    cover_letter_url = Column(String(500), nullable=True)
    cover_letter_filename = Column(String(255), nullable=True)
    
    # Preferences
    is_active = Column(Boolean, default=True)
    email_notifications = Column(Boolean, default=True)
    
    # Relationships
    jobs = relationship("Job", back_populates="user")
    applications = relationship("JobApplication", back_populates="user")
    
    def __repr__(self):
        return f"<User(id={self.id}, email='{self.email}', full_name='{self.full_name}')>" 