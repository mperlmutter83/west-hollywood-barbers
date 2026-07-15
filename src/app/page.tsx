import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Haircut', description: 'A men\'s haircut is an art, offering a diverse range of styles tailored to reflect your unique preferences and personality.' },
    { title: 'Clean Up / Seniors / Students', description: 'My services are tailored to your unique preferences and grooming needs.' },
    { title: 'Kids Cut / Buzz Cut / Afro Shaping', description: 'Enjoy exceptional grooming services, perfectly tailored to your unique style. Our skilled barbers provide personalized attention across a range of trendy cuts, from kids\' styles to expert Afro shaping.' },
    { title: 'Facial – Scrub & Black Mask', description: 'Elevate your look with personalized grooming services designed for your unique style and complete satisfaction.' },
    { title: 'Straight Razor Shave', description: 'Experience unparalleled grooming tailored to your individual needs, ensuring complete satisfaction.' },
    { title: 'Line Up / Beard Trim', description: 'Enjoy outstanding grooming with services thoughtfully customized to meet your unique needs and preferences.' },
    { title: 'Enhancements', description: 'Available in sleek black, classic brown and other colors upon request.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 pt-16">
          {/* Scissors icon */}
          <div className="mb-6">
            <svg className="w-12 h-12 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-[0.3em] mb-4">BARBER</h1>
          <p className="text-white text-lg italic font-serif tracking-widest mb-8">Fresh Since 2015</p>
          <Link
            href="/book-now"
            className="inline-block bg-orange-600 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors"
          >
            Book An Appointment
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">A Traditional Barber & Shop</h2>
              <p className="text-gray-600 mb-6">
                Welcome to West Hollywood Barbers, where classic grooming meets modern style. Located in the vibrant heart of WeHo, we are more than just a barbershop—we are a cornerstone of the community, a place where style, conversation, and confidence are crafted every day.
              </p>
              <h3 className="text-xl font-serif text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-8">
                West Hollywood Barbers was founded with a clear vision: to create a premier grooming experience that reflects the dynamic and sophisticated spirit of our neighborhood. We wanted to build a space where anyone could walk in, feel at home, and walk out looking and feeling their absolute best. Since opening our doors, we&apos;ve become a trusted destination for quality haircuts, sharp beard trims, and exceptional service.
              </p>
              <Link
                href="/about"
                className="inline-block bg-orange-600 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-orange-600 p-8 text-white">
              {/* Shop icon */}
              <div className="mb-4">
                <svg className="w-10 h-10 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif tracking-[0.2em] text-center mb-6">SHOP</h3>
              <div className="text-center text-sm">
                <p>369 N Fairfax Ave</p>
                <p className="my-2">Unit A</p>
                <p>Los Angeles, CA 90036</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Services</p>
            {/* Scissors icon */}
            <div className="mb-4">
              <svg className="w-10 h-10 text-gray-800 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {services.map((service) => (
              <div key={service.title}>
                <h3 className="text-lg font-serif text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Appointments</p>
              {/* Chair icon */}
              <div className="mb-4">
                <svg className="w-10 h-10 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v8h1.33l1 2h1.33l1-2h10.67l1 2h1.33l1-2H22v-8c0-1.1-.9-2-2-2zM6 6h12v2H6V6zm14 12H4v-4h16v4zm0-6H4v-2h16v2z"/>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Book A Chair</h2>
              <p className="text-gray-600 mb-8">Get that look you&apos;ve always wanted just right!</p>
              <Link
                href="/book-now"
                className="inline-block bg-orange-600 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors"
              >
                Make An Appointment
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop" 
                alt="Barbershop" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop" 
                alt="Haircut" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop" 
                alt="Barber tools" 
                className="w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop" 
                alt="Styling" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section 
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop" 
                alt="Barbershop products" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-orange-600 p-8 text-white">
              <p className="text-lg italic font-serif mb-4">
                Hands down the best cut I have ever had. Devin is very attentive to your vision with your hair and how
              </p>
              <p className="text-sm">– Greg Sefain –</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Contact</p>
            {/* Shop icon */}
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
