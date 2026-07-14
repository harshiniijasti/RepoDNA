from app.services.github_client import github_get


def get_statistics(owner, repo):

    repo_data = github_get(f"/repos/{owner}/{repo}")

    return {
        "stars": repo_data["stargazers_count"],
        "forks": repo_data["forks_count"],
        "watchers": repo_data["watchers_count"],
        "issues": repo_data["open_issues_count"],
        "size": repo_data["size"]
    }