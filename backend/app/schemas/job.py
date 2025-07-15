from typing import Optional, List
from pydantic import BaseModel
from .base import BaseResponse

# Job schemas - implement as needed
# class JobCreate(BaseModel):
#     title: str
#     company: str
#     location: str
#     description: str
#     salary_min: Optional[int] = None
#     salary_max: Optional[int] = None
#     requirements: Optional[List[str]] = []
#     job_type: Optional[str] = None  # full-time, part-time, contract, etc.

# class JobUpdate(BaseModel):
#     title: Optional[str] = None
#     company: Optional[str] = None
#     location: Optional[str] = None
#     description: Optional[str] = None
#     salary_min: Optional[int] = None
#     salary_max: Optional[int] = None
#     requirements: Optional[List[str]] = None
#     job_type: Optional[str] = None

# class JobResponse(BaseResponse):
#     title: str
#     company: str
#     location: str
#     description: str
#     salary_min: Optional[int] = None
#     salary_max: Optional[int] = None
#     requirements: List[str] = []
#     job_type: Optional[str] = None
#     is_active: bool = True 