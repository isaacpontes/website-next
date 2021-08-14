import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

function getPostsDirectory(locale) {
  return join(process.cwd(), '_posts/', locale);
}

export function getPostSlugs(locale) {
  const postsDirectory = getPostsDirectory(locale);
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(locale, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const postsDirectory = getPostsDirectory(locale);
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(locale, fields = []) {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(locale, slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}