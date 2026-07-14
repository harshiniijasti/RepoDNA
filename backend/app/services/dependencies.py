from base64 import b64decode
import json

from app.services.github_client import github_get


def get_dependencies(owner, repo):

    technologies = []

    try:
        package = github_get(
            f"/repos/{owner}/{repo}/contents/package.json"
        )

        content = b64decode(
            package["content"]
        ).decode("utf-8")

        package_json = json.loads(content)

        deps = {}

        deps.update(package_json.get("dependencies", {}))
        deps.update(package_json.get("devDependencies", {}))

        mapping = {
            "react": "React",
            "next": "Next.js",
            "vue": "Vue.js",
            "angular": "Angular",
            "typescript": "TypeScript",
            "tailwindcss": "Tailwind CSS",
            "express": "Express",
            "fastapi": "FastAPI",
            "django": "Django",
            "flask": "Flask",
            "node": "Node.js",
            "mongoose": "MongoDB",
            "prisma": "Prisma",
            "postgres": "PostgreSQL",
            "mysql": "MySQL",
            "redis": "Redis"
        }

        for dep in deps.keys():
            key = dep.lower()

            if key in mapping:
                technologies.append(mapping[key])

        return sorted(list(set(technologies)))

    except:
        return []