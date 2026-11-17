import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { findPost, loadBody } from "./blog";
import { localPosts } from "./blog/localPosts";
import { loadLocale, localeInfo } from "./i18n";
import { hasOverrides } from "./i18n/overrides";
import "./index.css";
import { currentRoute } from "./router";

const root = document.getElementById("root");
if (!root) throw new Error("#root bulunamadı");

async function start(container: HTMLElement) {
  // İlk çizimden önce sayfanın dili ve (yazı sayfasındaysak) yazının gövdesi hazır olsun.
  const state = currentRoute();
  document.documentElement.lang = state.locale;
  document.documentElement.dir = localeInfo(state.locale).dir;
  await loadLocale(state.locale);
  if (state.route === "post" && state.slug) {
    const post = findPost(state.locale, state.slug);
    if (post) await loadBody(post);
  }

  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );
  // Sayfa sunucuda hazırlanmışsa mevcut HTML'in üzerine bağlan. Bu tarayıcıda admin değişikliği
  // varsa içerik hazır HTML'den farklı olacağı için baştan çiz.
  const prerendered = container.hasChildNodes();
  const customised = hasOverrides() || localPosts().length > 0;
  if (prerendered && !customised) hydrateRoot(container, app);
  else {
    container.replaceChildren();
    createRoot(container).render(app);
  }
}

void start(root);
