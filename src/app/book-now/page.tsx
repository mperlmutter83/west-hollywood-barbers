import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book your appointment at West Hollywood Barbers. Call (323) 518-1007 or fill out our form.',
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
            Fill Out the Form Below to Book Now Or Call Us (323) 518-1007
          </h1>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center">West Hollywood Barbers</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-gray-600 mb-1">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select a service...</option>
                  <option value="haircut">Haircut</option>
                  <option value="cleanup">Clean Up / Seniors / Students</option>
                  <option value="kids">Kids Cut / Buzz Cut / Afro Shaping</option>
                  <option value="facial">Facial – Scrub & Black Mask</option>
                  <option value="shave">Straight Razor Shave</option>
                  <option value="beard">Line Up / Beard Trim</option>
                  <option value="enhancements">Enhancements</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500"
                  placeholder="Any special requests or preferred appointment time?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors"
              >
                Submit
              </button>
            </form>
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
