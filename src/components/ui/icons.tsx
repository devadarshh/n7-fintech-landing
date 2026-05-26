export function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1L9.8 5.8L15 6.2L11.2 9.4L12.4 14.5L8 12L3.6 14.5L4.8 9.4L1 6.2L6.2 5.8L8 1Z" />
    </svg>
  );
}

export function SolutionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="18" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="18" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PatternTile({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden>
      <rect width="120" height="120" fill="#0f172a" />
      {[0, 1].map((row) =>
        [0, 1].map((col) => (
          <path
            key={`${row}-${col}`}
            d="M30 30L50 10L70 30L50 50L30 30Z"
            stroke="#22d3ee"
            strokeWidth="2"
            transform={`translate(${col * 60} ${row * 60})`}
          />
        )),
      )}
    </svg>
  );
}
