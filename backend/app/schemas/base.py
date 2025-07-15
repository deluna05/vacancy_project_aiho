from pydantic import BaseModel, ConfigDict
from typing import Optional
from datetime import datetime

class BaseSchema(BaseModel):
    """Base schema with common configuration"""
    model_config = ConfigDict(
        from_attributes=True,
        json_encoders={
            datetime: lambda v: v.isoformat()
        }
    )

class BaseResponse(BaseSchema):
    """Base response schema"""
    id: Optional[int] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None 