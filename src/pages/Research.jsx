import { Link } from "react-router-dom";
import { getResearchPosts } from "../lib/getResearchPosts";

export default function Research() {
  const posts = getResearchPosts();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Research Notes</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/research/${post.slug}`}
              className="text-lg font-medium underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-600">
            An analysis of reasoning failures, benchmark illusions, and             
            evaluation gaps in modern LLMs.      
            </p>

            {post.description && (
              <p className="text-sm text-gray-600 mt-1">
                {post.description}
              </p>
            )}

            {post.date && (
              <p className="text-xs text-gray-400 mt-1">
                {post.date}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
