from sqlalchemy.orm import Session
from typing import Optional
from datetime import datetime, timedelta
from fastapi import HTTPException, status, Depends, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
from app.core.config import settings
from app.models.user import User
from app.services.user_service import UserService

security = HTTPBearer()
user_service = UserService()

class AuthService:
    """Service class for authentication operations"""
    
    def verify_supabase_token(self, token: str) -> dict:
        """Verify Supabase JWT token"""
        try:
            # Decode token using Supabase JWT secret
            payload = jwt.decode(
                token,
                settings.SUPABASE_JWT_SECRET,
                algorithms=["HS256"],
                audience="authenticated"
            )
            return payload
        except jwt.ExpiredSignatureError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token has expired"
            )
        except jwt.JWTError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token"
            )
    
    def get_current_user_id(self, credentials: HTTPAuthorizationCredentials = Depends(security)) -> int:
        """Get current user ID from JWT token"""
        token = credentials.credentials
        payload = self.verify_supabase_token(token)
        
        # Extract user ID from token
        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token payload"
            )
        
        return user_id
    
    def get_current_user(self, db: Session, credentials: HTTPAuthorizationCredentials = Depends(security)) -> Optional[User]:
        """Get current user from JWT token"""
        token = credentials.credentials
        payload = self.verify_supabase_token(token)
        
        # Extract user ID from token
        auth_id = payload.get("sub")
        if not auth_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid token payload"
            )
        
        # Get user from database
        user = user_service.get_user_by_auth_id(db, auth_id)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        
        return user
    
    def create_user_profile_from_supabase(self, db: Session, auth_id: str, email: str, full_name: str) -> User:
        """Create user profile when user registers through Supabase"""
        user_data = {
            "auth_id": auth_id,
            "email": email,
            "full_name": full_name
        }
        return user_service.create_user(db, user_data)
    
    def sync_user_with_supabase(self, db: Session, auth_id: str, email: str, full_name: str) -> User:
        """Sync user profile with Supabase auth data"""
        # Check if user exists
        user = user_service.get_user_by_auth_id(db, auth_id)
        
        if user:
            # Update existing user
            update_data = {
                "email": email,
                "full_name": full_name
            }
            return user_service.update_user(db, user.id, update_data)
        else:
            # Create new user
            return self.create_user_profile_from_supabase(db, auth_id, email, full_name) 