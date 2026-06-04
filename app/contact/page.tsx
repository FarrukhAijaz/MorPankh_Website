import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Mor Pankh',
  description:
    'Visit Mor Pankh in Çankaya, Ankara. Find our address, phone, email and opening hours.',
};

const contactDetails = [
  {
    label: 'Address',
    value: 'Kültür, Sağlık-2 Sk. No:54-56A\n06420 Çankaya / Ankara',
    href: 'https://maps.google.com/?q=Kültür+Sağlık-2+Sk.+No:54-56A+06420+Çankaya+Ankara',
  },
  {
    label: 'Phone',
    value: '+90 507 515 86 51',
    href: 'tel:+905075158651',
  },
  {
    label: 'Email',
    value: 'morpankh.res@gmail.com',
    href: 'mailto:morpankh.res@gmail.com',
  },
  {
    label: 'Instagram',
    value: '@morpankh.restaurant',
    href: 'https://www.instagram.com/morpankh.restaurant',
  },
];

const hours = [
  { day: 'Monday',    slots: ['10:00 – 23:00'] },
  { day: 'Tuesday',   slots: ['10:00 – 23:00'] },
  { day: 'Wednesday', slots: ['Closed'] },
  { day: 'Thursday',  slots: ['10:00 – 23:00'] },
  { day: 'Friday',    slots: ['10:00 – 23:00'] },
  { day: 'Saturday',  slots: ['10:00 – 23:00'] },
  { day: 'Sunday',    slots: ['10:00 – 23:00'] },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <div className="bg-secondary pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-mid mb-4">Humse Milein</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-white">Baat Karein</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — contact details + hours */}
        <div>
          {/* Contact details */}
          <div className="space-y-8 mb-14">
            {contactDetails.map(({ label, value, href }) => (
              <div key={label} className="border-t border-gray-light pt-6">
                <p className="text-xs tracking-[0.25em] uppercase text-gray-mid mb-2">{label}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl text-white leading-snug hover:text-orange transition-colors duration-300 whitespace-pre-line"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Opening Hours */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gray-mid mb-6">Opening Hours</p>
            <div className="space-y-3">
              {hours.map(({ day, slots }) => (
                <div key={day} className="flex justify-between items-baseline border-b border-gray-light/30 pb-3">
                  <span className={`text-sm font-medium ${day === 'Wednesday' ? 'text-gray-mid' : 'text-white'}`}>{day}</span>
                  <span className={`text-sm ${day === 'Wednesday' ? 'text-orange' : 'text-gray-mid'}`}>{slots[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — map */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-gray-mid mb-6">Find Us</p>
          <div className="overflow-hidden border border-gray-light h-[480px]">
            <iframe
              title="MorPankh South Asian Restaurant"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24472.934287435033!2d32.887406049999996!3d39.9387773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0c379ab49f%3A0xb707ead2982356ba!2sMorPankh%20South%20Asian%20Restaurant!5e0!3m2!1sen!2str!4v1780614944982!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-xs text-gray-mid">
            Kültür, Sağlık-2 Sk. No:54-56A, 06420 Çankaya / Ankara
          </p>
        </div>
      </div>
    </div>
  );
}

