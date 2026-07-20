import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';

// Revalidate every 24 hours (86400 seconds) so scheduled posts surface automatically
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-600 ml-4">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-serif text-gray-900 mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-serif text-gray-900 mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        currentList.push(trimmedLine.replace('- ', ''));
      } else if (trimmedLine === '') {
        flushList();
      } else if (trimmedLine.length > 0) {
        flushList();
        elements.push(
          <p key={index} className="text-gray-600 mb-4 leading-relaxed">
            {trimmedLine}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

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
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">{post.title}</h1>
          <p className="text-gray-300 text-sm">
            by {post.author} | {post.date} | {post.category}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="bg-stone-100">
          <div className="max-w-4xl mx-auto px-4">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover -mt-8 shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4">
          <article>
            {formatContent(post.content)}
          </article>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <Link
              href="/blog"
              className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif text-white mb-4">Ready for Your Next Haircut?</h2>
          <Link
            href="/book-now"
            className="inline-block bg-white text-orange-600 px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Book an Appointment
          </Link>
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
