from typing import Optional, List
from pydantic import BaseModel, EmailStr
from .base import BaseResponse

# User schemas - implement as needed
# class UserCreate(BaseModel):
#     email: EmailStr
#     password: str
#     first_name: str
#     last_name: str
#     skills: Optional[List[str]] = []

# class UserUpdate(BaseModel):
#     email: Optional[EmailStr] = None
#     first_name: Optional[str] = None
#     last_name: Optional[str] = None
#     skills: Optional[List[str]] = None

# class UserResponse(BaseResponse):
#     email: EmailStr
#     first_name: str
#     last_name: str
#     skills: List[str] = []
#     is_active: bool = True 