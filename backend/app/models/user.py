from sqlalchemy import Column, String, Boolean, Text
from sqlalchemy.dialects.postgresql import ARRAY
from .base import BaseModel

# User model - implement as needed
# class User(BaseModel):
#     __tablename__ = "users"
#     
#     email = Column(String, unique=True, index=True, nullable=False)
#     hashed_password = Column(String, nullable=False)
#     first_name = Column(String, nullable=False)
#     last_name = Column(String, nullable=False)
#     skills = Column(ARRAY(String), default=[])
#     is_active = Column(Boolean, default=True)
#     is_verified = Column(Boolean, default=False)
#     bio = Column(Text, nullable=True) 