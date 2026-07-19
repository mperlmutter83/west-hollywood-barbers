import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book your appointment at West Hollywood Barbers. Call (323) 518-1007 or book online.',
};

export default function BookNowPage() {
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
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Book Your Appointment Online Or Call Us (323) 518-1007
          </h1>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-8 shadow-lg">
            <iframe
              src="https://yescrew-dashboard.vercel.app/book/9f191d75-2ca9-4214-95b3-060e8c8ac1f1"
              style={{ width: '100%', border: 'none', minHeight: '600px' }}
              title="Book with West Hollywood Barbers"
            />
            {/* Auto-resize script for iframe */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.addEventListener('message', function(e) {
                    if (e.data && e.data.type === 'yescrew:embed:height') {
                      var iframe = document.querySelector('iframe[src*="yescrew-dashboard"]');
                      if (iframe) iframe.style.height = e.data.height + 'px';
                    }
                  });
                `,
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Info */}
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
                  <strong>(323) 518-1007</strong>
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
