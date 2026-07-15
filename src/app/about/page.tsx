import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about West Hollywood Barbers - Est. 2015. Where classic grooming meets modern style in the heart of WeHo.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 pt-16">
          <div className="mb-6">
            <svg className="w-12 h-12 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Us</h1>
          <p className="text-white text-xl font-serif">West Hollywood Barbers – Est. 2015</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop" alt="Barbershop interior" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=400&fit=crop" alt="Haircut in progress" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop" alt="Barber tools" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop" alt="Styling products" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop" alt="Barber at work" className="w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=400&h=400&fit=crop" alt="Classic barbershop" className="w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 mb-6">
            Welcome to West Hollywood Barbers, where classic grooming meets modern style. Located in the vibrant heart of WeHo, we are more than just a barbershop—we are a cornerstone of the community, a place where style, conversation, and confidence are crafted every day.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            West Hollywood Barbers was founded with a clear vision: to create a premier grooming experience that reflects the dynamic and sophisticated spirit of our neighborhood. We wanted to build a space where anyone could walk in, feel at home, and walk out looking and feeling their absolute best. Since opening our doors, we&apos;ve become a trusted destination for quality haircuts, sharp beard trims, and exceptional service.
          </p>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Our Mission and Values</h2>
          <p className="text-gray-600 mb-4">
            Our mission is simple: to provide the highest quality grooming services with an unwavering commitment to customer satisfaction. We operate on a foundation of three core values:
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li><strong>Craftsmanship:</strong> We believe barbering is an art form. Our passion for precision and detail is evident in every cut and shave.</li>
            <li><strong>Community:</strong> We are proud to be a local hub where clients become friends. Our shop is a welcoming space for connection and camaraderie.</li>
            <li><strong>Style:</strong> We stay at the forefront of men&apos;s fashion and grooming trends to ensure you always receive a look that is both timeless and contemporary.</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            Our barbers are the heart and soul of our shop. Each member of our team is a highly skilled and licensed professional with a deep passion for their craft. With diverse expertise in everything from classic scissor cuts to modern fades and intricate beard styling, they are dedicated to understanding your personal style and delivering results that exceed your expectations.
          </p>
        </div>
      </section>

      {/* Established Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Our Story</p>
            <div className="mb-4">
              <svg className="w-10 h-10 text-gray-800 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Established in Los Angeles in 2015</h2>
          </div>

          <h3 className="text-xl font-serif text-gray-900 mb-4">Experience the Difference</h3>
          <p className="text-gray-600 mb-6">
            Step into our shop and experience a modern yet inviting atmosphere designed for your comfort. We blend classic barbershop traditions with contemporary amenities to create a truly unique environment. From the moment you sit in our chair, you&apos;ll receive personalized attention and expert advice.
          </p>

          <h3 className="text-xl font-serif text-gray-900 mb-4">Book Your Appointment</h3>
          <p className="text-gray-600 mb-8">
            Discover the difference a great haircut can make. We invite you to become a part of the West Hollywood Barbers family. Book your appointment today and let us help you perfect your look.
          </p>

          <div className="text-center">
            <Link
              href="/book-now"
              className="inline-block bg-orange-600 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Contact</p>
            <div className="mb-4">
              <svg className="w-10 h-10 text-gray-800 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
              </svg>
            </div>
          </div>
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
