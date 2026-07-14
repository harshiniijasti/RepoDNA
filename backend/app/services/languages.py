from app.services.github_client import github_get


def get_languages(owner, repo):

    data = github_get(
        f"/repos/{owner}/{repo}/languages"
    )

    total = sum(data.values())

    if total == 0:
        return []

    return [
        {
            "name": language,
            "percentage": round((value / total) * 100, 2),
        }
        for language, value in data.items()
    ]