import { cn } from "@/lib/utils";

export function DashboardMockup({
  variant = "aml",
  className,
}: {
  variant?: "aml" | "vc";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-800 to-slate-900 p-1 shadow-2xl shadow-blue-500/10",
        className,
      )}
    >
      <div className="rounded-xl bg-slate-100 p-4 md:p-6">
        <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-3">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-semibold text-slate-600">
            {variant === "aml" ? "AML Dashboard" : "VC Dashboard"}
          </span>
        </div>

        {variant === "aml" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {["115", "940", "105"].map((val, i) => (
                <div key={val} className="rounded-lg bg-white p-2 shadow-sm">
                  <p className="text-lg font-bold text-slate-800">{val}</p>
                  <p className="text-[10px] text-slate-500">Metric {i + 1}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="h-24 w-24 shrink-0 rounded-full border-8 border-blue-500 border-r-cyan-400 border-b-purple-400 border-l-green-400" />
              <div className="flex-1 space-y-1">
                {[70, 45, 85, 55].map((h, i) => (
                  <div key={i} className="flex items-end gap-1">
                    <div className="h-3 w-3 rounded bg-blue-500" style={{ height: `${h * 0.2}px` }} />
                    <div className="flex-1 rounded bg-slate-200" style={{ height: `${h * 0.25}px` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {["115", "940", "105"].map((val) => (
                <div key={val} className="rounded bg-blue-50 p-2 text-center">
                  <p className="text-sm font-bold text-blue-700">{val}</p>
                </div>
              ))}
            </div>
            <div className="rounded bg-white p-2">
              <div className="mb-1 h-2 bg-blue-600 rounded w-1/3" />
              {["Chandra Ghosh", "Priya Sharma", "Alex Kim"].map((name) => (
                <p key={name} className="border-b border-slate-100 py-1 text-[10px] text-slate-600">
                  {name}
                </p>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1">
              {[40, 65, 30, 80, 50].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i % 2 ? "bg-red-400" : "bg-blue-500"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
