from sqlalchemy import Column, String, Integer, Boolean, Text, ForeignKey
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship
from .base import BaseModel

# Job model - implement as needed
# class Job(BaseModel):
#     __tablename__ = "jobs"
#     
#     title = Column(String, nullable=False)
#     company = Column(String, nullable=False)
#     location = Column(String, nullable=False)
#     description = Column(Text, nullable=False)
#     salary_min = Column(Integer, nullable=True)
#     salary_max = Column(Integer, nullable=True)
#     requirements = Column(ARRAY(String), default=[])
#     job_type = Column(String, nullable=True)  # full-time, part-time, contract, etc.
#     is_active = Column(Boolean, default=True)
#     posted_by = Column(Integer, ForeignKey("users.id"), nullable=False)
#     
#     # Relationships
#     poster = relationship("User", back_populates="jobs") 