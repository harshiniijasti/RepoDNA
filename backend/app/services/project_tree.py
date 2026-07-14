from app.services.github_client import github_get


def get_project_tree(owner, repo):

    repo_data = github_get(
        f"/repos/{owner}/{repo}"
    )

    branch = github_get(
        f"/repos/{owner}/{repo}/branches/{repo_data['default_branch']}"
    )

    sha = branch["commit"]["commit"]["tree"]["sha"]

    tree = github_get(
        f"/repos/{owner}/{repo}/git/trees/{sha}?recursive=1"
    )

    return [
        {
            "path": item["path"],
            "type": item["type"]
        }
        for item in tree["tree"][:300]
    ]