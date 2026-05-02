"use client"

import React, { useEffect } from "react"

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalBooking() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const sn = ar[1];
            const q = ar[2];
            if (typeof sn === "string") {
              cal.ns[sn] = cal.ns[sn] || function () {
                p(cal.ns[sn], arguments);
              };
              cal.ns[sn].q = cal.ns[sn].q || [];
              p(cal.ns[sn], q);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize with the 'secret' namespace as requested
    window.Cal("init", "secret", { origin: "https://app.cal.com" });

    window.Cal.ns.secret("inline", {
      elementOrSelector: "#cal-booking-embed",
      calLink: "prashant-indurkar/secret",
      config: { 
        layout: "month_view",
        theme: "dark",
        hideEventTypeDetails: true,
        useSlotsViewOnSmallScreen: true,
      },
    });

    window.Cal.ns.secret("ui", {
      theme: "dark",
      styles: {
        branding: { brandColor: "#ffffff" },
      },
      hideEventTypeDetails: true,
      layout: "month_view",
    });
  }, [])

  return (
    <div className="w-full h-[450px] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl relative">
      <div id="cal-booking-embed" className="w-full h-full scale-[0.85] origin-top" />
    </div>
  )
}
