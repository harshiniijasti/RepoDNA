from app.services.github_client import github_get


def get_commits(owner, repo):

    commits = github_get(
        f"/repos/{owner}/{repo}/commits?per_page=10"
    )

    result = []

    for commit in commits:

        result.append({
            "author": commit["commit"]["author"]["name"],
            "message": commit["commit"]["message"],
            "date": commit["commit"]["author"]["date"],
            "sha": commit["sha"][:7]
        })

    return result