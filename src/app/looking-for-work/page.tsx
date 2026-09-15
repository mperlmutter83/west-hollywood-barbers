import type { Metadata } from 'next';
import WorkForm from '@/components/WorkForm';

const PHONE_DISPLAY = '(323) 518-1007';
const PHONE_HREF = 'tel:+13235181007';

export const metadata: Metadata = {
  title: 'Looking for Work',
  description:
    "Looking for barber work in West Hollywood? Local barbershops are hiring. Fill out the quick form and we'll connect you — or call (323) 518-1007.",
  alternates: { canonical: 'https://westhollywoodbarbers.com/looking-for-work' },
};

const STEPS = [
  {
    n: '1',
    title: 'Tell us about yourself',
    body: 'A quick 60-second form — no resume, no cover letter, no endless applications.',
  },
  {
    n: '2',
    title: 'We connect you',
    body: 'We share your details with local barbershops that are actively hiring barbers.',
  },
  {
    n: '3',
    title: 'You hear back directly',
    body: 'Interested shops contact you by phone, usually within a few days.',
  },
];

const WORK_TYPES = [
  'Haircuts',
  'Fades',
  'Beard Trims',
  'Line-Ups',
  'Hot Towel Shaves',
  'Kids Cuts',
];

export default function LookingForWorkPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[300px] flex items-center text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-400">
            Looking for Work?
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-serif text-white">
            Barber Work in West Hollywood
          </h1>
          <p className="mt-5 text-lg text-gray-200">
            Local barbershops are growing and looking for dependable barbers. Tell us about
            yourself and we&apos;ll connect you with shops that are hiring — free, fast, and no
            obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#work-form"
              className="inline-block bg-orange-600 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors"
            >
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block border-2 border-orange-400 px-8 py-4 text-sm font-medium uppercase tracking-wider text-orange-400 hover:bg-orange-400/10 transition-colors"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-gray-900 text-center">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white p-8 shadow-lg text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-serif text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Kind of Work Available */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-gray-900 text-center">
            The Kind of Work Available
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Barbershops in West Hollywood and the Fairfax District hire for a range of barber
            work, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((w) => (
              <li
                key={w}
                className="border border-gray-300 bg-stone-100 px-5 py-4 text-gray-700 font-medium"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section id="work-form" className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-serif text-gray-900 text-center">
              Apply in 60 Seconds
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Free and confidential — we&apos;ll only share your details with shops that are
              hiring.
            </p>
            <div className="mt-8">
              <WorkForm />
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Own a barbershop and need reliable barbers?{' '}
            <a href={PHONE_HREF} className="font-bold text-orange-600 underline">
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
