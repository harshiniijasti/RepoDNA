from fastapi import HTTPException


def extract_owner_repo(repo_url: str):
    parts = repo_url.rstrip("/").split("/")

    if len(parts) < 5:
        raise HTTPException(
            status_code=400,
            detail="Invalid GitHub Repository URL"
        )

    return parts[-2], parts[-1]