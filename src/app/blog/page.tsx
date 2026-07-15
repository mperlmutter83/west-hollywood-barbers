import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, insights, and guides from West Hollywood Barbers. Learn about haircuts, grooming, and barbershop culture.',
};

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Blog</h1>
          <p className="text-white text-lg">Tips, insights, and grooming guides from West Hollywood Barbers</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white shadow-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.category}</span>
                    <span className="mx-2">|</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-serif text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600">369 N Fairfax Ave</p>
              <p className="text-gray-600">Unit A</p>
              <p className="text-gray-600">Los Angeles, CA 90036</p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-2">
                <a href="tel:+13235181007" className="hover:text-orange-600">
                  <strong>(323)</strong> <strong>518-1007</strong>
                </a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:info@westhollywoodbarbers.com" className="hover:text-orange-600">
                  info@westhollywoodbarbers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
