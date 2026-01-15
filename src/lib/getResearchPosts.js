export function getResearchPosts() {
  const modules = import.meta.glob("../content/research/*.mdx", {
    eager: true,
  });

  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split("/").pop().replace(".mdx", "");

      return {
        slug,
        title: mod.frontmatter?.title ?? slug,
        description: mod.frontmatter?.description ?? "",
        date: mod.frontmatter?.date ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
