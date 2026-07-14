import os
import requests
from dotenv import load_dotenv
from fastapi import HTTPException

load_dotenv()

TOKEN = os.getenv("GITHUB_TOKEN")

HEADERS = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
}

if TOKEN:
    HEADERS["Authorization"] = f"Bearer {TOKEN}"


def github_get(endpoint: str):
    url = f"https://api.github.com{endpoint}"

    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        raise HTTPException(
            status_code=response.status_code,
            detail=response.json().get("message", "GitHub API Error")
        )

    return response.json()