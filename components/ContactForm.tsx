'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  rating: number;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  rating?: string;
  message?: string;
}

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.rating) errors.rating = 'Please select a rating.';
  if (!data.message.trim()) errors.message = 'Please enter a message.';
  else if (data.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
}

function StarRating({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (v: number) => void;
  error?: string;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-gray-mid mb-3">
        Your Experience
      </label>
      <div className="flex gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="text-2xl transition-all duration-150 focus:outline-none"
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          >
            <span
              className={
                star <= (hovered || value) ? 'text-spice-red' : 'text-gray-light'
              }
            >
              ★
            </span>
          </button>
        ))}
      </div>
      {value > 0 && (
        <p className="text-xs text-gray-mid">
          {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Exceptional'][value]}
        </p>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

const INITIAL: FormState = { name: '', email: '', rating: 0, message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState, value: string | number) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-8"
      >
        <div className="w-12 h-12 rounded-full bg-sky/50 flex items-center justify-center mx-auto mb-6">
          <span className="text-orange text-xl">✓</span>
        </div>
        <h3 className="font-serif text-3xl text-white mb-3">Thank You</h3>
        <p className="text-gray-mid max-w-sm mx-auto">
          Your message has been received. Our team will be in touch within one business day.
        </p>
        <button
          onClick={() => {
            setForm(INITIAL);
            setSubmitted(false);
          }}
          className="mt-8 text-xs tracking-[0.2em] uppercase text-orange border-b border-orange pb-0.5 hover:text-white hover:border-white transition-colors duration-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-gray-mid mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          placeholder="Jean-Pierre Dubois"
          className={`w-full bg-transparent border-b text-white text-sm py-3 pr-4 outline-none placeholder-gray-light transition-colors duration-300 focus:border-orange ${
            errors.name ? 'border-red-400' : 'border-gray-light'
          }`}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-gray-mid mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          placeholder="hello@example.com"
          className={`w-full bg-transparent border-b text-white text-sm py-3 pr-4 outline-none placeholder-gray-light transition-colors duration-300 focus:border-orange ${
            errors.email ? 'border-red-400' : 'border-gray-light'
          }`}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Star Rating */}
      <StarRating
        value={form.rating}
        onChange={(v) => set('rating', v)}
        error={errors.rating}
      />

      {/* Message */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-gray-mid mb-2">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          rows={5}
          placeholder="Share your experience or enquiry…"
          className={`w-full bg-transparent border-b text-white text-sm py-3 pr-4 outline-none placeholder-gray-light resize-none transition-colors duration-300 focus:border-orange ${
            errors.message ? 'border-red-400' : 'border-gray-light'
          }`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-spice-red text-white text-xs tracking-[0.2em] uppercase py-4 hover:bg-crimson transition-colors duration-500 mt-4"
      >
        Send Message
      </button>
    </form>
  );
}
