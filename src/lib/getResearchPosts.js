// src/lib/getResearchPosts.js

const modules = import.meta.glob("../content/research/*.mdx", {
  eager: true,
});

/* ---------- helpers ---------- */

function getOrderFromSlug(slug) {
  // "1.why-llms-dont-reason" → 1
  const match = slug.match(/^(\d+)[.-]/);
  return match ? Number(match[1]) : 999;
}

function cleanSlug(slug) {
  // "1.why-llms-dont-reason" → "why-llms-dont-reason"
  return slug.replace(/^\d+[.-]/, "");
}

/* ---------- main ---------- */

export function getResearchPosts() {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const rawSlug = path.split("/").pop().replace(".mdx", "");

      return {
        slug: rawSlug, // used in URL
        cleanSlug: cleanSlug(rawSlug), // optional (for display)
        title: mod.frontmatter?.title ?? cleanSlug(rawSlug),
        description: mod.frontmatter?.description ?? "",
        order: getOrderFromSlug(rawSlug),
      };
    })
    .sort((a, b) => a.order - b.order);
}
