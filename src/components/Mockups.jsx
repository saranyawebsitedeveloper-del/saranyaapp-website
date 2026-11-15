// Code-drawn mockup visuals (no stock photos, no fake people).
// Real screenshots வந்ததும் src/data/site.js-ல் `screenshot` path கொடுத்தால் இவை மாறிவிடும்.

export function PhoneMockup({ className = '' }) {
  const rows = [
    { n: 'Order #1042', s: 'Stitching', c: 'bg-amber-300' },
    { n: 'Order #1041', s: 'Ready', c: 'bg-teal-mid' },
    { n: 'Order #1040', s: 'Delivered', c: 'bg-sky-400' },
  ]
  return (
    <div
      className={`relative mx-auto w-[190px] rounded-[2.2rem] border-[6px] border-navy-900 bg-navy-900 p-1 shadow-2xl ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-navy-950" />
      <div className="overflow-hidden rounded-[1.7rem] bg-slate-50 px-3 pb-4 pt-7">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">Dashboard</p>
        <p className="font-display text-sm font-bold text-navy-900">Today's Orders</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-navy-900 p-2 text-white">
            <p className="text-[8px] text-slate-300">Pending Balance</p>
            <p className="font-display text-sm font-bold">₹ 12,400</p>
          </div>
          <div className="rounded-xl bg-teal-soft/60 p-2 text-navy-900">
            <p className="text-[8px]">Open Orders</p>
            <p className="font-display text-sm font-bold">8</p>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {rows.map((r) => (
            <div key={r.n} className="flex items-center justify-between rounded-xl bg-white p-2 shadow-sm">
              <div>
                <p className="text-[10px] font-semibold text-navy-900">{r.n}</p>
                <p className="text-[8px] text-slate-400">Measurements saved</p>
              </div>
              <span className="flex items-center gap-1 text-[8px] font-medium text-slate-600">
                <i className={`inline-block h-1.5 w-1.5 rounded-full ${r.c}`} />
                {r.s}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid h-8 place-items-center rounded-xl bg-gradient-to-r from-teal-mid to-teal-soft text-[10px] font-bold text-navy-950">
          + New Order
        </div>
      </div>
    </div>
  )
}

export function DashboardMockup({ className = '' }) {
  const bars = [40, 62, 48, 80, 66, 92]
  return (
    <div
      className={`mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <i className="h-2 w-2 rounded-full bg-rose-300" />
        <i className="h-2 w-2 rounded-full bg-amber-300" />
        <i className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ml-2 text-[9px] text-slate-400">Business Dashboard (concept)</span>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            ['Income', 'bg-teal-soft/60'],
            ['Expenses', 'bg-amber-200/70'],
            ['Customers', 'bg-sky-200/70'],
          ].map(([l, c]) => (
            <div key={l} className={`rounded-xl p-2 ${c}`}>
              <p className="text-[8px] text-navy-800">{l}</p>
              <div className="mt-1 h-2 w-10 rounded bg-navy-900/70" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-24 items-end gap-2 rounded-xl bg-slate-50 p-3">
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-navy-800 to-teal-mid"
            />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {[70, 55, 40].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <i className="h-4 w-4 rounded-full bg-slate-200" />
              <div className="h-2 rounded bg-slate-200" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BrowserMockup({ className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <i className="h-2 w-2 rounded-full bg-rose-300" />
        <i className="h-2 w-2 rounded-full bg-amber-300" />
        <i className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ml-2 flex-1 rounded-full bg-white px-2 py-0.5 text-[8px] text-slate-400">
          yourbusiness.com
        </span>
      </div>
      <div className="bg-gradient-to-br from-navy-900 to-navy-700 p-4">
        <div className="h-2 w-16 rounded bg-white/50" />
        <div className="mt-3 h-3 w-40 rounded bg-white" />
        <div className="mt-1.5 h-3 w-28 rounded bg-white" />
        <div className="mt-3 h-6 w-20 rounded-full bg-teal-mid" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-slate-50 p-2">
            <i className="block h-4 w-4 rounded bg-teal-soft" />
            <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
            <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  )
}
