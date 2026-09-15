'use client';

import { useEffect, useRef, useState } from 'react';

const EXPERIENCE_OPTIONS = [
  'No experience yet — willing to learn',
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
];

const PHONE_DISPLAY = '(323) 518-1007';
const PHONE_HREF = 'tel:+13235181007';

const inputClass =
  'w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-orange-500';

export default function WorkForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    company_website: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  // Spam-gate metadata — generated outside render (impure calls are
  // not allowed during render). Timestamp set on mount, UUID on submit.
  const submissionId = useRef<string | null>(null);
  const startedAt = useRef<number>(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    submissionId.current ??= crypto.randomUUID();

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'Looking for Work',
          message: `Experience: ${formData.experience || 'not specified'}. ${formData.message}`.trim(),
          company_website: formData.company_website,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });

      if (response.ok) {
        // GA4/GTM conversion event — picked up by the site's GTM container when present.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: 'generate_lead' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="text-3xl">🎉</p>
        <h3 className="mt-3 text-2xl font-serif text-gray-900">You&apos;re on the list!</h3>
        <p className="mt-3 text-gray-600">
          Thanks, {formData.name.split(' ')[0]}! Your details are in. Local barbershops that are
          hiring will reach out to you directly.
        </p>
        <p className="mt-4 text-gray-600">
          Want to move faster?{' '}
          <a href={PHONE_HREF} className="font-bold text-orange-600 underline">
            Call {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
      <input
        type="text"
        id="company_website"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={formData.company_website}
        onChange={(e) => updateField('company_website', e.target.value)}
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass}
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
          required
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm text-gray-600 mb-1">
          Experience
        </label>
        <select
          id="experience"
          value={formData.experience}
          onChange={(e) => updateField('experience', e.target.value)}
          className={inputClass}
        >
          <option value="">How much experience do you have?</option>
          {EXPERIENCE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
          Availability &amp; anything we should know
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="e.g. Available weekends, have my own clippers, looking for a chair…"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-600 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Find Work Near Me'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-center font-medium">
          Something went wrong. Please call us at{' '}
          <a href={PHONE_HREF} className="underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
    </form>
  );
}
