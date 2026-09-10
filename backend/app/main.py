from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="SkillSync AI API",
    description="Backend API for SkillSync AI - AI Powered Placement Preparation Platform",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

# --------------------------------------------------------------------
# CORS Configuration
# --------------------------------------------------------------------

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------------------------
# Root Endpoint
# --------------------------------------------------------------------


@app.get("/", tags=["Root"])
async def root():
    return {
        "success": True,
        "message": "Welcome to SkillSync AI Backend API",
        "version": "1.0.0",
    }


# --------------------------------------------------------------------
# Health Check
# --------------------------------------------------------------------


@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "success": True,
        "status": "healthy",
    }