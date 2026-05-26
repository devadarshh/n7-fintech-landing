import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-card rounded-2xl p-4 shadow-xl md:p-5", className)}>{children}</div>
  );
}

export function BalanceCard({ className }: { className?: string }) {
  return (
    <GlassCard className={cn("w-[220px] md:w-[260px]", className)}>
      <div className="mb-3 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
        <div>
          <p className="text-xs font-medium text-white">Toni Kross</p>
          <p className="text-[10px] text-text-muted">Premium Account</p>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-wider text-text-muted">Total Balance</p>
      <p className="text-xl font-bold text-white md:text-2xl">$42,295.00</p>
      <p className="mb-4 text-[10px] text-text-muted">USD</p>
      <div className="flex gap-2">
        {["Fund Transfer", "Add Money", "More"].map((action) => (
          <button
            key={action}
            type="button"
            className="flex-1 rounded-lg bg-white/10 px-1 py-2 text-[9px] font-medium text-white"
          >
            {action}
          </button>
        ))}
      </div>
    </GlassCard>
  );
}

export function ActivityCard({ className }: { className?: string }) {
  const activities = [
    { label: "To Jin - Work", amount: "-$59", time: "2h ago" },
    { label: "From Google - Salary", amount: "+$2,400", time: "1d ago" },
  ];

  return (
    <GlassCard className={cn("w-[200px] md:w-[240px]", className)}>
      <p className="mb-3 text-xs font-semibold text-white">Recent activity</p>
      <div className="mb-3 flex gap-1">
        {["This Day", "This Week", "This Month"].map((tab, i) => (
          <span
            key={tab}
            className={`rounded px-2 py-0.5 text-[9px] ${i === 0 ? "bg-white/15 text-white" : "text-text-muted"}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <ul className="space-y-2">
        {activities.map((item) => (
          <li key={item.label} className="flex items-center justify-between text-[10px]">
            <div>
              <p className="text-white">{item.label}</p>
              <p className="text-text-muted">{item.time}</p>
            </div>
            <span className={item.amount.startsWith("+") ? "text-green-400" : "text-white"}>
              {item.amount}
            </span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
