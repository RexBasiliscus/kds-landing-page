export function scrollToHash(hash, { smooth = true, timeout = 50 } = {}) {
  if (!hash) return;
  const id = hash.replace('#', '');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
      const input = el.querySelector('input, textarea, button');
      if (input) input.focus({ preventScroll: true });
    }
  }, timeout);
}
