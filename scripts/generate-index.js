const fs = require("fs");
const path = require("path");

const postsDir = path.join(process.cwd(), "posts");
const indexPath = path.join(postsDir, "index.json");

if (!fs.existsSync(postsDir)) {
  console.error('Error: "posts" directory does not exist.');
  process.exit(1);
}

const files = fs.readdirSync(postsDir);

const slugs = files
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.replace(/\.mdx$/, ""))
  .sort();

fs.writeFileSync(indexPath, JSON.stringify(slugs, null, 2) + "\n");

console.log(
  `Successfully created posts/index.json with ${slugs.length} posts:`,
);
console.log(slugs);
