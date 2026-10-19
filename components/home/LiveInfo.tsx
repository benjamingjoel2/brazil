"use client";

import { useEffect, useState } from "react";
import { formatTime, seixasSunrise } from "@/lib/solar";
import { waterStatus } from "@/lib/seasons";
import { getWaterRegion } from "@/data/water-seasons";
import type { Month } from "@/lib/types";
import { SpecTable } from "@/components/ui/SpecTable";
import { Verify } from "@/components/ui/Badges";

/** Rio time with a blinking colon. Renders a stable placeholder until mounted. */
function RioClock({ now }: { now: Date | null }) {
  if (!now) return <span aria-hidden>--:--</span>;
  const [h, m] = formatTime(now, "America/Sao_Paulo").split(":");
  return (
    <span>
      <time dateTime={now.toISOString()} className="tabular-nums">
        {h}
        <span className="animate-blink" aria-hidden>
          :
        </span>
        <span className="sr-only">:</span>
        {m}
      </time>{" "}
      <span className="text-forest/75">(GMT−3)</span>
    </span>
  );
}

export function LiveInfo() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  const month = ((now ?? new Date()).getUTCMonth() + 1) as Month;
  const amazon = waterStatus(getWaterRegion("amazon"), month);
  const pantanal = waterStatus(getWaterRegion("pantanal"), month);
  const sunrise = now ? formatTime(seixasSunrise(now), "America/Fortaleza") : "--:--";

  return (
    <SpecTable
      rows={[
        { label: "Country", value: "Brazil" },
        {
          label: "First light today",
          value: (
            <span>
              <span className="tabular-nums">{sunrise}</span> <span className="text-forest/75">at Ponta do Seixas</span>
            </span>
          ),
        },
        { label: "Time in Rio", value: <RioClock now={now} /> },
        {
          label: "Amazon",
          value: (
            <span>
              {now ? amazon.label : "…"} <Verify className="ml-1" note="Typical water season; levels vary each year." />
            </span>
          ),
        },
        {
          label: "Pantanal",
          value: (
            <span>
              {now ? pantanal.label : "…"} <Verify className="ml-1" note="Typical season; rains vary each year." />
            </span>
          ),
        },
      ]}
    />
  );
}
