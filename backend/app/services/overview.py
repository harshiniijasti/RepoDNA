from app.services.github_client import github_get


def get_overview(owner, repo):

    repo_data = github_get(f"/repos/{owner}/{repo}")

    return {
        "name": repo_data["name"],
        "owner": repo_data["owner"]["login"],
        "description": repo_data["description"],
        "stars": repo_data["stargazers_count"],
        "forks": repo_data["forks_count"],
        "open_issues": repo_data["open_issues_count"],
        "license": repo_data["license"]["name"] if repo_data["license"] else "No License",
        "updated_at": repo_data["updated_at"]
    }