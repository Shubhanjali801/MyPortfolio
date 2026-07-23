import { ChevronRight } from "lucide-react";

export function ArchDiagram({
  flow,
  note,
}: {
  flow: string[];
  note: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center gap-2">
        {flow.map((node, i) => (
          <div key={node} className="flex items-center gap-2">
            <span className="rounded-lg border border-border bg-background px-3 py-2 text-center font-mono text-xs sm:text-sm">
              {node}
            </span>
            {i < flow.length - 1 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-accent" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">{note}</p>
    </div>
  );
}
