import { cn } from "@/lib/utils";

export function DashboardMockup({
  variant = "aml",
  embedded = false,
  className,
}: {
  variant?: "aml" | "kyc";
  embedded?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-[#f8fafc]",
          embedded
            ? "rounded-t-[8px]"
            : "rounded-[12px] border border-[#0066ff]/45 bg-[#0a1422] p-[5px] shadow-[0_24px_80px_rgba(0,102,255,0.22)]",
        )}
      >
        <div className={cn(!embedded && "overflow-hidden rounded-[8px] bg-[#f8fafc]")}>
          <div className="flex min-h-[280px] md:min-h-[320px]">
            {variant === "kyc" ? (
              <KycDashboard />
            ) : (
              <AmlDashboard />
            )}
          </div>
        </div>
      </div>
      {!embedded && (
        <div
          className="mx-auto mt-3 h-[2px] w-[78%] rounded-full bg-gradient-to-r from-transparent via-[#0066ff]/70 to-transparent"
          aria-hidden
        />
      )}
    </div>
  );
}

function AmlDashboard() {
  return (
    <>
      <aside className="hidden w-10 shrink-0 border-r border-slate-200 bg-slate-50 sm:block">
        <div className="flex flex-col items-center gap-3 py-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-5 w-5 rounded bg-slate-300" />
          ))}
        </div>
      </aside>
      <div className="flex-1 p-3 md:p-4">
        <h4 className="mb-3 text-sm font-bold text-slate-800">AML Dashboard</h4>
        <div className="mb-3 grid grid-cols-2 gap-2">
          <div className="rounded border border-slate-200 bg-white p-2">
            <p className="text-2xl font-bold text-red-500">450</p>
            <p className="text-[8px] leading-tight text-slate-500">
              Total STR (Suspicious Transaction Report)
            </p>
          </div>
          <div className="rounded border border-slate-200 bg-white p-2">
            <p className="text-2xl font-bold text-amber-500">3</p>
            <p className="text-[8px] leading-tight text-slate-500">Days Pending for AML Process</p>
          </div>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2">
          <div className="rounded border border-slate-200 bg-white p-2">
            <p className="mb-1 text-[8px] font-medium text-slate-600">
              Suspicious Transactions as on 10-01-2022
            </p>
            <div className="relative mx-auto h-16 w-16">
              <div className="absolute inset-0 rounded-full border-[6px] border-cyan-400 border-r-red-400 border-b-amber-400 border-l-emerald-400" />
            </div>
          </div>
          <div className="rounded border border-slate-200 bg-white p-2">
            <p className="mb-1 text-[8px] font-medium text-slate-600">STR Summary</p>
            <div className="flex h-16 items-end gap-0.5">
              {[40, 65, 30, 80, 55, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-blue-500" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded border border-slate-200 bg-white p-2">
          <p className="mb-1 text-[9px] font-semibold text-blue-600">AML Report</p>
          <div className="grid grid-cols-4 gap-1 text-[7px] text-slate-500">
            <span>AML Case ID</span>
            <span>Branch ID</span>
            <span>Identified Date</span>
            <span>Transaction</span>
          </div>
        </div>
      </div>
    </>
  );
}

function KycDashboard() {
  return (
    <>
      <div className="relative flex-1 p-3 md:p-4">
        <h4 className="mb-3 text-sm font-bold text-slate-800">KYC Dashboard</h4>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { val: "2115", label: "Total Customers", color: "text-blue-600" },
            { val: "940", label: "In-Progress", color: "text-amber-500" },
            { val: "1050", label: "KYC Completed", color: "text-emerald-600" },
          ].map(({ val, label, color }) => (
            <div key={label} className="rounded border border-slate-200 bg-white p-2 text-center">
              <p className={`text-sm font-bold md:text-lg ${color}`}>{val}</p>
              <p className="mt-0.5 text-[6px] leading-tight text-slate-500 md:text-[7px]">{label}</p>
            </div>
          ))}
        </div>
        <div className="mb-2 rounded border border-slate-200 bg-white">
          <div className="grid grid-cols-5 gap-1 border-b border-slate-100 bg-blue-600/10 p-1 text-[7px] font-medium text-blue-800">
            <span>Branch</span>
            <span>Customers</span>
            <span>In Prog.</span>
            <span>Done</span>
            <span>Pending</span>
          </div>
          {["Main", "North", "South"].map((b) => (
            <div key={b} className="grid grid-cols-5 gap-1 border-b border-slate-50 p-1 text-[7px] text-slate-600">
              <span>{b}</span>
              <span>42</span>
              <span>12</span>
              <span>28</span>
              <span>2</span>
            </div>
          ))}
        </div>
        <div className="flex h-14 items-end gap-1">
          {[35, 55, 40, 70, 45].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${i % 2 ? "bg-red-400" : "bg-emerald-500"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="absolute right-2 top-10 z-10 hidden w-[42%] rounded border border-slate-200 bg-white p-2 shadow-lg sm:block">
          <p className="mb-2 text-[8px] font-semibold text-slate-800">Failed Records</p>
          {[
            { name: "Ajaya Krishna", id: "CUST-1042" },
            { name: "Raghu Nandan", id: "CUST-2087" },
            { name: "Chandra Ghosh", id: "CUST-3310" },
          ].map(({ name, id }) => (
            <div
              key={id}
              className="mb-1.5 flex items-center justify-between gap-1 border-b border-slate-100 pb-1 last:mb-0 last:border-0"
            >
              <div>
                <p className="text-[7px] font-medium text-slate-700">{name}</p>
                <p className="text-[6px] text-slate-400">{id}</p>
              </div>
              <span className="rounded bg-[#0066ff] px-1.5 py-0.5 text-[6px] font-medium text-white">
                Update
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
