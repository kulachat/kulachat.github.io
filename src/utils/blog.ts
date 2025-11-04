import { getCollection, type CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((post: BlogPost) => !post.data.draft)
    .sort((a: BlogPost, b: BlogPost) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime());
}

// Get featured posts
export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter(post => post.data.featured);
}

// Get posts by category
export async function getPostsByCategory(category: string) {
  const posts = await getAllPosts();
  return posts.filter(post => 
    post.data.category.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
  );
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post: BlogPost) => 
    post.data.tags.some((postTag: string) => 
      postTag.toLowerCase().replace(/\s+/g, '-') === tag.toLowerCase()
    )
  );
}

// Get all unique categories
export async function getAllCategories() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.data.category))];
  return categories.sort();
}

// Get all unique tags
export async function getAllTags() {
  const posts = await getAllPosts();
  const tags = [...new Set(posts.flatMap(post => post.data.tags))];
  return tags.sort();
}

// Get related posts based on tags and category
export async function getRelatedPosts(currentSlug: string, limit: number = 3) {
  const posts = await getAllPosts();
  const currentPost = posts.find(post => post.slug === currentSlug);
  
  if (!currentPost) return [];
  
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // Same category gets high score
      if (post.data.category === currentPost.data.category) {
        score += 3;
      }
      
      // Shared tags get points
      const sharedTags = post.data.tags.filter((tag: string) => 
        currentPost.data.tags.includes(tag)
      );
      score += sharedTags.length;
      
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
  
  return relatedPosts;
}

// Paginate posts
export function paginatePosts(posts: any[], currentPage: number, postsPerPage: number = 9) {
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: posts.slice(startIndex, endIndex),
    currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    totalPosts: posts.length
  };
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Format date
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Create slug from string
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Get category/tag counts
export async function getCategoryStats() {
  const posts = await getAllPosts();
  const categoryStats = posts.reduce((acc: Record<string, number>, post: BlogPost) => {
    const category = post.data.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(categoryStats)
    .map(([name, count]) => ({ name, count: count as number, slug: createSlug(name) }))
    .sort((a, b) => b.count - a.count);
}

export async function getTagStats() {
  const posts = await getAllPosts();
  const tagStats = posts.reduce((acc: Record<string, number>, post: BlogPost) => {
    post.data.tags.forEach((tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(tagStats)
    .map(([name, count]) => ({ name, count: count as number, slug: createSlug(name) }))
    .sort((a, b) => b.count - a.count);
}

// Search posts
export async function searchPosts(query: string) {
  const posts = await getAllPosts();
  const searchQuery = query.toLowerCase();
  
  return posts.filter(post => {
    const titleMatch = post.data.title.toLowerCase().includes(searchQuery);
    const descriptionMatch = post.data.description.toLowerCase().includes(searchQuery);
    const categoryMatch = post.data.category.toLowerCase().includes(searchQuery);
    const tagMatch = post.data.tags.some((tag: string) => 
      tag.toLowerCase().includes(searchQuery)
    );
    const authorMatch = post.data.author.toLowerCase().includes(searchQuery);
    
    return titleMatch || descriptionMatch || categoryMatch || tagMatch || authorMatch;
  });
}