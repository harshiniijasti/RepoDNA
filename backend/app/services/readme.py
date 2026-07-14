import base64

from app.services.github_client import github_get


def get_readme(owner, repo):

    try:

        data = github_get(
            f"/repos/{owner}/{repo}/readme"
        )

        return base64.b64decode(
            data["content"]
        ).decode("utf-8")

    except:

        return "README not available."