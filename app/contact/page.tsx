import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Mor Pankh',
  description:
    'Mor Pankh se baat karein — apna tajurba share karein ya humse rabta karein. Karachi, Pakistan.',
};

const contactDetails = [
  {
    label: 'Address',
    value: 'Sector 15, Korangi Industrial Area\nKarachi, Pakistan',
    href: 'https://maps.google.com/?q=Korangi+Industrial+Area+Karachi+Pakistan',
  },
  {
    label: 'Phone',
    value: '+92 21 3456 7890',
    href: 'tel:+922134567890',
  },
  {
    label: 'Email',
    value: 'info@hamarimehfil.pk',
    href: 'mailto:info@hamarimehfil.pk',
  },
];

const hours = [
  { day: 'Monday – Friday', slots: ['Breakfast 7:00 – 11:00', 'Lunch 11:30 – 15:30', 'Dinner 18:00 – 23:00'] },
  { day: 'Saturday – Sunday', slots: ['Breakfast 7:00 – 13:00', 'Dinner 17:00 – 23:30'] },
  { day: 'Public Holidays', slots: ['10:00 – 22:00 (Continuous)'] },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* header */}
      <div className="bg-secondary pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-4">Humse Milein</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-white">Baat Karein</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — info + map */}
        <div>
          {/* Contact details */}
          <div className="space-y-8 mb-14">
            {contactDetails.map(({ label, value, href }) => (
              <div key={label} className="border-t border-gray-light pt-6">
                <p className="text-xs tracking-[0.25em] uppercase text-gray-mid mb-2">{label}</p>
                <a
                  href={href}
                  target={label === 'Address' ? '_blank' : undefined}
                  rel={label === 'Address' ? 'noopener noreferrer' : undefined}
                  className="font-serif text-xl text-white leading-snug hover:text-orange transition-colors duration-300 whitespace-pre-line"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Opening Hours */}
          <div className="mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gray-mid mb-6">
              Opening Hours
            </p>
            <div className="space-y-4">
              {hours.map(({ day, slots }) => (
                <div key={day} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-sm font-medium text-white w-40 flex-shrink-0">{day}</span>
                  <div className="text-sm text-gray-mid space-y-0.5">
                    {slots.map((s) => (
                      <p key={s}>{s}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden border border-gray-light">
            <iframe
              title="Mor Pankh — Karachi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.2!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="320"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right — feedback form */}
        <div>
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-3">
              Table Booking & Feedback
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4">
              Paighaam Bhejein
            </h2>
            <p className="text-gray-mid text-sm leading-relaxed max-w-sm">
              Table reserve karna ho, apna tajurba share karna ho, ya bas koi سلام — hum khushi se sunenge. Har wave ka jawab milega.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
