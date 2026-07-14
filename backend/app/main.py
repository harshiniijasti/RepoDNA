from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.github import router as github_router

app = FastAPI(
    title="RepoDNA API",
    version="1.0.0",
    description="Backend API for RepoDNA"
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(github_router)

@app.get("/")
def root():
    return {
        "message": "RepoDNA Backend Running 🚀"
    }