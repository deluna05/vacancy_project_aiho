from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import BaseModel

class Job(BaseModel):
    """Job posting model"""
    __tablename__ = "jobs"
    
    # Job Information
    title = Column(String(255), nullable=False)
    company = Column(String(255), nullable=False)
    location = Column(String(255), nullable=True)
    description = Column(Text, nullable=False)
    requirements = Column(Text, nullable=True)
    
    # Job Details
    salary_min = Column(Integer, nullable=True)
    salary_max = Column(Integer, nullable=True)
    job_type = Column(String(50), nullable=True)  # Full-time, Part-time, Contract, etc.
    experience_level = Column(String(50), nullable=True)  # Entry, Mid, Senior, etc.
    
    # Status
    is_active = Column(Boolean, default=True)
    is_featured = Column(Boolean, default=False)
    
    # Relationships
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)  # Job poster
    user = relationship("User", back_populates="jobs")
    applications = relationship("JobApplication", back_populates="job")
    
    def __repr__(self):
        return f"<Job(id={self.id}, title='{self.title}', company='{self.company}')>"

class JobApplication(BaseModel):
    """Job application model"""
    __tablename__ = "job_applications"
    
    # Application Information
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    job_id = Column(Integer, ForeignKey("jobs.id"), nullable=False)
    
    # Application Details
    status = Column(String(50), default="pending")  # pending, reviewed, accepted, rejected
    cover_letter = Column(Text, nullable=True)
    resume_url = Column(String(500), nullable=True)
    
    # Relationships
    user = relationship("User", back_populates="applications")
    job = relationship("Job", back_populates="applications")
    
    def __repr__(self):
        return f"<JobApplication(id={self.id}, user_id={self.user_id}, job_id={self.job_id}, status='{self.status}')>" 