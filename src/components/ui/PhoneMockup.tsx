import { cn } from "@/lib/utils";

export function PhoneMockup({
  variant = "dashboard",
  className,
}: {
  variant?: "dashboard" | "chart";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[240px] rounded-[2rem] border-4 border-slate-800 bg-slate-900 p-2 shadow-2xl md:w-[280px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-slate-800" />
      <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-100 to-slate-200 p-4 pt-8">
        {variant === "dashboard" ? (
          <>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              <div>
                <p className="text-xs font-semibold text-slate-800">Teni Kross</p>
                <p className="text-[10px] text-slate-500">Premium</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-500">Total Balance</p>
            <p className="mb-4 text-xl font-bold text-slate-900">$42,295.00</p>
            <p className="mb-3 text-[10px] text-slate-500">USD</p>
            <div className="mb-4 flex gap-1">
              {["Transfer", "Add", "More"].map((a) => (
                <div key={a} className="flex-1 rounded-lg bg-blue-600/10 py-2 text-center text-[8px] font-medium text-blue-700">
                  {a}
                </div>
              ))}
            </div>
            <p className="mb-2 text-xs font-semibold text-slate-800">Recent activity</p>
            {[
              { l: "To Jin - Work", a: "-$59" },
              { l: "From Google", a: "+$2.4k" },
            ].map((t) => (
              <div key={t.l} className="flex justify-between border-b border-slate-200 py-2 text-[10px]">
                <span className="text-slate-700">{t.l}</span>
                <span className="font-medium text-slate-900">{t.a}</span>
              </div>
            ))}
          </>
        ) : (
          <>
            <p className="mb-3 text-xs font-semibold text-slate-800">Monthly Overview</p>
            <div className="mb-3 flex h-24 items-end gap-1">
              {[30, 50, 40, 70, 55, 80, 45].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-blue-500"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white p-2">
                <p className="text-[10px] text-slate-500">Income</p>
                <p className="text-sm font-bold text-green-600">$453.00</p>
              </div>
              <div className="rounded-lg bg-white p-2">
                <p className="text-[10px] text-slate-500">Spend</p>
                <p className="text-sm font-bold text-red-500">$453.00</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
