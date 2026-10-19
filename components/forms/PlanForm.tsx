"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import clsx from "clsx";
import {
  biomeOptions,
  budgetOptions,
  contactOptions,
  interestOptions,
  paceOptions,
  stayOptions,
} from "@/lib/enquiry";
import { getWaterRegion } from "@/data/water-seasons";
import { formatCarnivalDate } from "@/data/carnival";
import { carnival, festivals } from "@/config/carnival";
import { inRange, monthNames, waterStatus } from "@/lib/seasons";
import type { Month } from "@/lib/types";
import { Verify } from "@/components/ui/Badges";
import { SunMark } from "@/components/ui/SunMark";
import { buttonClass } from "@/components/ui/Button";

const field = "w-full rounded-2xl border-2 border-forest/20 bg-off px-4 py-3 text-ink outline-none transition focus:border-forest";
const labelCls = "mb-2 block font-semibold text-forest";

function Group({ legend, children, hint }: { legend: string; children: ReactNode; hint?: string }) {
  return (
    <fieldset className="min-w-0">
      <legend className={labelCls}>{legend}</legend>
      {hint && <p className="-mt-1 mb-3 text-sm text-ink/65">{hint}</p>}
      {children}
    </fieldset>
  );
}

function Chip({ name, value, type = "checkbox", defaultChecked }: { name: string; value: string; type?: "checkbox" | "radio"; defaultChecked?: boolean }) {
  return (
    <label className="cursor-pointer">
      <input type={type} name={name} value={value} defaultChecked={defaultChecked} className="peer sr-only" required={type === "radio" ? true : undefined} />
      <span className="inline-flex rounded-pill border-2 border-forest/20 px-4 py-2 text-sm font-medium text-forest transition peer-checked:border-forest peer-checked:bg-forest peer-checked:text-off peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-coral hover:border-forest">
        {value}
      </span>
    </label>
  );
}

/** What's happening in Brazil in the chosen month: water seasons, Carnival, festivals. */
function MonthNotes({ month }: { month: number | null }) {
  if (!month) return null;
  const m = month as Month;
  const amazon = waterStatus(getWaterRegion("amazon"), m);
  const pantanal = waterStatus(getWaterRegion("pantanal"), m);
  const carnivalMonth = Number(carnival.friday.slice(5, 7));
  const notes: ReactNode[] = [
    <>Amazon: <strong>{amazon.label}</strong></>,
    <>Pantanal: <strong>{pantanal.label}</strong></>,
  ];
  if (m === carnivalMonth)
    notes.push(
      <>
        Carnival {carnival.year}: <strong>{formatCarnivalDate(carnival.friday)} – {formatCarnivalDate(carnival.ashWednesday)}</strong>
      </>,
    );
  if (m === 6) notes.push(<>{festivals.festaJunina.label} and {festivals.parintins.label}</>);
  if (inRange(m, { from: 6, to: 9 })) notes.push(<>Lençóis Maranhenses lagoons usually at their fullest</>);
  return (
    <div className="mt-3 rounded-2xl bg-sand/70 p-4 text-sm" aria-live="polite">
      <p className="t-label mb-2 flex items-center gap-2 text-forest/70">
        In {monthNames[m - 1]} <Verify />
      </p>
      <ul className="grid gap-1 sm:grid-cols-2">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            <span>{n}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlanForm() {
  const params = useSearchParams();
  const context = useMemo(() => {
    const keys = ["journey", "destination", "stay"] as const;
    for (const k of keys) {
      const v = params.get(k);
      if (v) return `${k}: ${v}`;
    }
    return "";
  }, [params]);

  const [month, setMonth] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const doneRef = useRef<HTMLDivElement>(null);
  const years = useMemo(() => {
    const y = new Date().getFullYear();
    return [y, y + 1, y + 2];
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      month: fd.get("month"),
      year: fd.get("year") || undefined,
      days: fd.get("days"),
      firstTime: fd.get("firstTime"),
      interests: fd.getAll("interests"),
      biomes: fd.getAll("biomes"),
      pace: fd.get("pace"),
      stayStyle: fd.getAll("stayStyle"),
      adults: fd.get("adults"),
      children: fd.get("children") || 0,
      childAges: fd.get("childAges") || undefined,
      budget: fd.get("budget"),
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      contact: fd.get("contact"),
      notes: fd.get("notes") || undefined,
      context: context || undefined,
      website: fd.get("website") || undefined,
    };
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrors(json.fieldErrors ?? { form: "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }
      setStatus("done");
      requestAnimationFrame(() => doneRef.current?.focus());
    } catch {
      setErrors({ form: "We couldn't send that. Please check your connection and try again." });
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div ref={doneRef} tabIndex={-1} className="bg-waves rounded-[2.5rem] bg-forest p-10 text-center text-off outline-none md:p-16" role="status">
        <SunMark className="mx-auto h-12 w-auto text-off" />
        <p className="t-h1 mt-6">Obrigado.</p>
        <p className="t-lead mt-4">We&apos;ll be in touch soon.</p>
        <p className="mx-auto mt-4 max-w-md text-off/80">A Brazil specialist will read your notes and reply within two working days, by your preferred contact method.</p>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-sm font-semibold text-coral-deep">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-10" aria-describedby={errors.form ? "form-error" : undefined}>
      {context && (
        <p className="rounded-2xl bg-sand/70 px-4 py-3 text-sm">
          You&apos;re asking about <strong>{context.split(": ")[1].replace(/-/g, " ")}</strong>. We&apos;ll include it in your plan.
        </p>
      )}

      <section aria-labelledby="when-h" className="grid gap-6">
        <h2 id="when-h" className="t-h3 text-forest">When and how long</h2>
        <div className="grid gap-4 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <label htmlFor="month" className={labelCls}>When would you like to travel?</label>
            <select
              id="month"
              name="month"
              required
              className={field}
              defaultValue=""
              onChange={(e) => {
                const i = monthNames.indexOf(e.target.value as (typeof monthNames)[number]);
                setMonth(i >= 0 ? i + 1 : null);
              }}
              aria-invalid={!!errors.month}
              aria-describedby={errors.month ? "month-error" : undefined}
            >
              <option value="" disabled>
                Choose a month
              </option>
              {monthNames.map((m) => (
                <option key={m}>{m}</option>
              ))}
              <option>Flexible</option>
            </select>
            {err("month")}
          </div>
          <div>
            <label htmlFor="year" className={labelCls}>Year</label>
            <select id="year" name="year" className={field} defaultValue={String(years[1])}>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="days" className={labelCls}>Days</label>
            <input id="days" name="days" type="number" min={3} max={60} defaultValue={14} required className={field} aria-invalid={!!errors.days} />
            {err("days")}
          </div>
        </div>
        <MonthNotes month={month} />
        <Group legend="Have you been to Brazil before?">
          <div className="flex flex-wrap gap-2">
            <Chip type="radio" name="firstTime" value="First time in Brazil" defaultChecked />
            <Chip type="radio" name="firstTime" value="Returning" />
          </div>
        </Group>
      </section>

      <section aria-labelledby="what-h" className="grid gap-6">
        <h2 id="what-h" className="t-h3 text-forest">What you love</h2>
        <Group legend="Interests" hint="Choose as many as you like.">
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((o) => (
              <Chip key={o} name="interests" value={o} />
            ))}
          </div>
        </Group>
        <Group legend="Biomes you're curious about" hint="Not sure? Leave these blank and we'll suggest.">
          <div className="flex flex-wrap gap-2">
            {biomeOptions.map((o) => (
              <Chip key={o} name="biomes" value={o} />
            ))}
          </div>
        </Group>
        <Group legend="Pace">
          <div className="flex flex-wrap gap-2">
            {paceOptions.map((o, i) => (
              <Chip key={o} type="radio" name="pace" value={o} defaultChecked={i === 1} />
            ))}
          </div>
        </Group>
        <Group legend="Stay style">
          <div className="flex flex-wrap gap-2">
            {stayOptions.map((o) => (
              <Chip key={o} name="stayStyle" value={o} />
            ))}
          </div>
        </Group>
      </section>

      <section aria-labelledby="who-h" className="grid gap-6">
        <h2 id="who-h" className="t-h3 text-forest">Who&apos;s travelling</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="adults" className={labelCls}>Adults</label>
            <input id="adults" name="adults" type="number" min={1} max={20} defaultValue={2} required className={field} />
          </div>
          <div>
            <label htmlFor="children" className={labelCls}>Children</label>
            <input id="children" name="children" type="number" min={0} max={20} defaultValue={0} className={field} />
          </div>
          <div>
            <label htmlFor="childAges" className={labelCls}>Children&apos;s ages</label>
            <input id="childAges" name="childAges" placeholder="e.g. 7 and 10" className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="budget" className={labelCls}>Budget, excluding international flights</label>
          <select id="budget" name="budget" required className={field} defaultValue="">
            <option value="" disabled>
              Choose a range
            </option>
            {budgetOptions.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          {err("budget")}
        </div>
      </section>

      <section aria-labelledby="you-h" className="grid gap-6">
        <h2 id="you-h" className="t-h3 text-forest">How to reach you</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelCls}>Name</label>
            <input id="name" name="name" autoComplete="name" required className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
            {err("name")}
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
            {err("email")}
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Phone (optional)</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
          </div>
          <Group legend="Preferred contact">
            <div className="flex flex-wrap gap-2">
              {contactOptions.map((o, i) => (
                <Chip key={o} type="radio" name="contact" value={o} defaultChecked={i === 0} />
              ))}
            </div>
          </Group>
        </div>
        <div>
          <label htmlFor="notes" className={labelCls}>Anything else?</label>
          <textarea id="notes" name="notes" rows={5} className={field} placeholder="Special occasions, dream moments, things you'd rather avoid…" />
        </div>
        <div aria-hidden className="absolute -left-[9999px]">
          <label>
            Leave this empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </section>

      {errors.form && (
        <p id="form-error" role="alert" className="font-semibold text-coral-deep">
          {errors.form}
        </p>
      )}
      {status === "error" && !errors.form && (
        <p role="alert" className="font-semibold text-coral-deep">
          Please check the highlighted fields.
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className={clsx(buttonClass("sun"), "px-8 py-4 text-base disabled:opacity-60")}>
          {status === "sending" ? "Sending…" : "Send to a specialist"} <span aria-hidden>→</span>
        </button>
        <p className="text-sm text-ink/65">No payment, no obligation. We reply within two working days.</p>
      </div>
    </form>
  );
}
