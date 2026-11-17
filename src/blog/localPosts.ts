/**
 * Admin panelinde yazılan blog yazıları.
 * PROTOTİP: yalnızca bu tarayıcıda (localStorage) tutulur. Kalıcı olması için yazı Markdown olarak
 * indirilip content/blog/<dil>/ klasörüne konur ya da bir arka uç bağlanır.
 */
export type LocalPost = {
  locale: string;
  slug: string;
  key: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  body: string;
  status: "draft" | "published";
  author: string;
  updatedAt: string;
};

const KEY = "gg.posts.v1";
const listeners = new Set<() => void>();
let memory: LocalPost[] | null = null;

export function localPosts(): LocalPost[] {
  if (memory) return memory;
  memory = [];
  if (typeof window === "undefined") return memory;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) memory = JSON.parse(raw) as LocalPost[];
  } catch {
    // Depolama kapalıysa yerel yazı yokmuş gibi devam et.
  }
  return memory;
}

export function saveLocalPosts(next: LocalPost[]) {
  memory = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Kaydedilemedi; bu oturumda bellekte kalır.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeLocalPosts(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Başlıktan adres üretir: "Ödeme Altyapısı Nasıl Seçilir?" → "odeme-altyapisi-nasil-secilir" */
export function slugify(text: string) {
  const map: Record<string, string> = {
    ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", ä: "a", ß: "ss", ñ: "n", é: "e", è: "e", ê: "e",
    á: "a", à: "a", â: "a", ã: "a", í: "i", ó: "o", ô: "o", õ: "o", ú: "u",
  };
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, (char) => map[char] ?? "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .slice(0, 80);
}

/** Yazıyı content/blog/<dil>/ klasörüne konacak Markdown dosyasına çevirir. */
export function toMarkdown(post: LocalPost) {
  return `---
title: ${post.title}
description: ${post.description}
date: ${post.date}
slug: ${post.slug}
key: ${post.key}
tags: ${post.tags.join(", ")}
---

${post.body.trim()}
`;
}
