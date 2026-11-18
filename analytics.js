// Plausible (self-hosted), skipped for bots and headless browsers. Counts page
// views, 404s from the not-found page (<html data-page="not-found">) and the
// first uncaught error on a page, so breakage on the live site shows up.
// Nothing about how anyone reads is sent.
(function () {
  // Queues events sent before the Plausible script has loaded. Defined even for
  // bots, so nothing that calls window.plausible can throw; their queue is never sent.
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
  if (
    navigator.webdriver ||
    /bot|crawl|spider|scrape|headless/i.test(navigator.userAgent) ||
    !navigator.languages ||
    navigator.languages.length === 0
  ) {
    return;
  }
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = "linger.joekarlsson.com";
  script.src = "https://plausible.joekarlsson.io/js/script.tagged-events.outbound-links.js";
  document.head.appendChild(script);

  if (document.documentElement.dataset.page === "not-found") {
    window.plausible("404", { props: { path: location.pathname } });
  }

  // Browser extensions throw into the page too; those aren't the site's errors.
  // The site creates no Trusted Types policies, so any policy error is an extension's.
  const isFromExtension = (message, source) =>
    /^(chrome|moz|safari-web)-extension:\/\//.test(source) || /trusted-types|TrustedTypePolicy/i.test(message);

  let reported = false;
  const report = (message, source) => {
    message = String(message);
    if (reported || isFromExtension(message, source)) return;
    reported = true;
    window.plausible("JS Error", {
      props: { message: message.slice(0, 200), source, path: location.pathname },
    });
  };
  addEventListener("error", (e) => report(e.message, `${e.filename}:${e.lineno}`));
  addEventListener("unhandledrejection", (e) => report(e.reason, "promise"));
})();
