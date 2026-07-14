from fastapi import APIRouter

from app.services.analyzer import analyze_repository

router = APIRouter(
    prefix="/github",
    tags=["GitHub"]
)


@router.get("/analyze")
def analyze(repo_url: str):
    return analyze_repository(repo_url)