/* Documentação: comportamento e interações da página. */

document.getElementById("anoAtual").textContent = new Date().getFullYear();

// Eventos de clique nos links de WhatsApp para mensuração de intenção de contato.
document.addEventListener("click", function (event) {
  const link = event.target.closest('a[href*="wa.me/5518991938657"]');
  if (!link) return;
  const label = (
    link.innerText ||
    link.getAttribute("aria-label") ||
    "whatsapp_cta"
  )
    .trim()
    .slice(0, 100);
  if (typeof gtag === "function") {
    gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
  if (typeof fbq === "function") {
    fbq("trackCustom", "WhatsAppClick", { button_label: label });
  }
});
