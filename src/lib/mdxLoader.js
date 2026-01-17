// src/lib/mdxLoader.js

// Load all MDX files eagerly (Vite-safe)
const mdxModules = import.meta.glob("../content/**/*.mdx", {
  eager: true,
});

/* ===================== HELPERS ===================== */

function getOrderFromSlug(slug) {
  // "1.intro" → 1
  const match = slug.match(/^(\d+)[.-]/);
  return match ? Number(match[1]) : 999;
}

function cleanSlug(slug) {
  // "1.intro-to-dl" → "intro-to-dl"
  return slug.replace(/^\d+[.-]/, "");
}

/* ===================== MATERIALS ===================== */
/*
  path: /content/materials/{SUBJECT}/{slug}.mdx
*/

export function getMaterialsIndex() {
  const materials = {};

  for (const path in mdxModules) {
    const mod = mdxModules[path];
    const match = path.match(/content\/materials\/([^/]+)\/(.+)\.mdx$/);
    if (!match) continue;

    const [, subject, slug] = match;

    if (!materials[subject]) materials[subject] = [];

    materials[subject].push({
      slug,
      cleanSlug: cleanSlug(slug),
      title: mod.frontmatter?.title ?? cleanSlug(slug),
      order: getOrderFromSlug(slug),
    });
  }

  // Sort by filename number
  for (const subject in materials) {
    materials[subject].sort((a, b) => a.order - b.order);
  }

  return materials;
}

export function getSubjectMaterials(subject) {
  return getMaterialsIndex()[subject] ?? [];
}

export function getMaterial(subject, slug) {
  for (const path in mdxModules) {
    const match = path.match(
      new RegExp(`content/materials/${subject}/(.+)\\.mdx$`),
    );
    if (match && match[1] === slug) {
      return mdxModules[path];
    }
  }
  return null;
}

/* ===================== RESEARCH ===================== */
/*
  path: /content/research/{slug}.mdx
*/

export function getResearchIndex() {
  return Object.entries(mdxModules)
    .filter(([p]) => p.includes("/content/research/"))
    .map(([path, mod]) => {
      const slug = path.split("/").pop().replace(".mdx", "");
      return {
        slug,
        title: mod.frontmatter?.title ?? cleanSlug(slug),
      };
    });
}

export function getResearchPost(slug) {
  for (const path in mdxModules) {
    if (path.endsWith(`/research/${slug}.mdx`)) {
      return mdxModules[path];
    }
  }
  return null;
}
