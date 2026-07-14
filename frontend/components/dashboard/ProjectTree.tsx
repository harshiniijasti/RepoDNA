'use client'

import { Folder, File } from 'lucide-react'

interface TreeItem {
  path: string
  type: string
}

interface Props {
  tree: TreeItem[]
}

export default function ProjectTree({ tree }: Props) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">
        Project Structure
      </h3>

      <div className="max-h-[500px] overflow-y-auto space-y-1">
        {tree.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm"
          >
            {item.type === "tree" ? (
              <Folder size={16} />
            ) : (
              <File size={16} />
            )}

            <span>{item.path}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
