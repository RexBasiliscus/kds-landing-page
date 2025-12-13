export function scrollToTop({ behavior = "smooth", duration = 400 } = {}) {
  if (typeof window === "undefined") return;

  const doInstant = () => window.scrollTo(0, 0);

  // Try native API with options (modern browsers)
  if (typeof window.scrollTo === "function") {
    try {
      if (behavior === "smooth") {
        // native smooth scroll when supported
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        doInstant();
      }
      return;
    } catch (e) {
      // Some environments (or older browsers) may throw when passed an options object.
      // fall through to a JS-based animation below.
    }
  }

  // Fallback: perform a JS-based eased scroll animation to top
  if (behavior === "smooth") {
    const start =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const current = Math.round(start * (1 - eased));
      window.scrollTo(0, current);
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  } else {
    doInstant();
  }
}
