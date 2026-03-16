import { getCollection } from 'astro:content';

const toSlug = (value: string) => value.replace(/\.(md|mdx)$/, '').replace(/\/index$/, '');

export const GET = async () => {
  const pages = await getCollection('pages');
  const posts = await getCollection('posts');

  const pageItems = pages.map((entry) => {
    const slug = toSlug(entry.id);

    return {
      title: entry.data.title?.trim() || slug.split('/').pop() || 'Page',
      description: entry.data.description?.trim() || '',
      section: entry.data.section?.trim() || 'Page',
      url: `/pages/${slug}/`,
      type: 'page',
    };
  });

  const postItems = posts.map((entry) => {
    const slug = toSlug(entry.id);

    return {
      title: entry.data.title?.trim() || slug.split('/').pop() || 'Post',
      description: entry.data.description?.trim() || '',
      section: entry.data.section?.trim() || 'Post',
      url: `/posts/${slug}/`,
      type: 'post',
    };
  });

  const items = [...pageItems, ...postItems];

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
