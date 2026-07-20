import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, formatDate, BlogPost as APIPost } from '@/lib/api';
import { blogPosts as localPosts } from '@/lib/blog-data';

// Site domain for API calls
const SITE_DOMAIN = 'westhollywoodbarbers.com';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Expert barbering tips, style guides, and grooming advice from West Hollywood Barbers.',
};

// Merge API posts with local posts, preferring API
async function getAllPosts() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  
  // If we have API posts, use them
  if (apiPosts.length > 0) {
    return apiPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || '',
      image: post.image_url,
      category: post.category || 'Barbers',
      date: formatDate(post.publish_at || post.created_at),
    }));
  }
  
  // Fallback to local posts
  return localPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    category: post.category,
    date: post.date,
  }));
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[300px] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 pt-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-stone-300">
            Expert barbering tips, style guides, and grooming advice
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-orange-600 uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
