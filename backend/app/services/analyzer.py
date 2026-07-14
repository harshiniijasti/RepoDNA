from app.utils.github_parser import extract_owner_repo

from app.services.overview import get_overview
from app.services.languages import get_languages
from app.services.dependencies import get_dependencies
from app.services.project_tree import get_project_tree
from app.services.statistics import get_statistics
from app.services.readme import get_readme
from app.services.commits import get_commits


def analyze_repository(repo_url):

    owner, repo = extract_owner_repo(repo_url)

    return {
        "overview": get_overview(owner, repo),
        "languages": get_languages(owner, repo),
        "dependencies": get_dependencies(owner, repo),
        "statistics": get_statistics(owner, repo),
        "project_tree": get_project_tree(owner, repo),
        "readme": get_readme(owner, repo),
        "commits": get_commits(owner, repo)
    }