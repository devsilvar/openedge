import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className='bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20'>
      <div className='max-w-[1200px] mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <p className='text-blue-600 font-bold text-sm uppercase tracking-wider mb-3'>Contact Us</p>
          <h1 className='text-5xl font-extrabold text-gray-900 mb-4'>
            Let's Start a Conversation
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Ready to transform your hospitality business? We're here to help you build systems that drive profit and create lasting value.
          </p>
        </div>

        {/* Main Card */}
        <div className='bg-white rounded-xl shadow-lg border border-[var(--color-border-light)] grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
          {/* Left Form */}
          <div className='p-8'>
            <h3 className='text-[15px] font-semibold text-[var(--color-heading)] mb-1'>
              Send us a message
            </h3>
            <p className='text-[12px] text-[var(--color-muted)] mb-6'>
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form className='space-y-4'>
              <Field label='Full Name'>
                <input
                  type='text'
                  placeholder='e.g. Adebayo Ogunlesi'
                  className='input'
                />
              </Field>

              <Field label='Email Address'>
                <input
                  type='email'
                  placeholder='name@company.com'
                  className='input'
                />
              </Field>

              <Field label='Subject (Optional)'>
                <select className='input'>
                  <option>General Inquiry</option>
                </select>
              </Field>

              <Field label='How can we help?'>
                <textarea
                  rows={4}
                  placeholder='Tell us about your project...'
                  className='input resize-none'
                />
              </Field>

              <button
                type='submit'
                className='w-full bg-[#1f6fe5] hover:bg-[#1b63cc] transition text-white text-sm font-semibold py-3 rounded-lg mt-2'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className='p-8 bg-[#fbfdff] border-l border-[var(--color-border-light)]'>
            <h3 className='text-[15px] font-semibold text-[var(--color-heading)] mb-6'>
              Contact Information
            </h3>

            <div className='space-y-6 text-sm'>
              <Info
                icon={<FaPhone className='text-blue-600' />}
                title='Phone'
                main='07047544000'
                sub='Mon–Fri 8am–5pm WAT'
              />

              <Info
                icon={<FaEnvelope className='text-blue-600' />}
                title='Email'
                main='hello@openedge.ng'
                sub='We respond within 24hrs'
              />

              <Info
                icon={<FaMapMarkerAlt className='text-blue-600' />}
                title='Location'
                main='Lagos, Nigeria'
                sub='Serving clients nationwide'
              />
            </div>

            <div className='mt-12'>
              <p className='text-sm font-semibold text-gray-700 mb-4'>
                Connect with us
              </p>

              <div className='flex gap-3'>
                <SocialIcon href='https://wa.me/2347047544000' aria-label='WhatsApp'>
                  <FaWhatsapp />
                </SocialIcon>
                <SocialIcon href='#' aria-label='Facebook'>
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon href='#' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href='#' aria-label='LinkedIn'>
                  <FaLinkedinIn />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-border-light);
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 13px;
          outline: none;
          transition: border 0.15s ease;
        }

        .input:focus {
          border-color: var(--color-primary);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className='block text-[12px] font-medium text-[var(--color-muted)] mb-1'>
        {label}
      </label>
      {children}
    </div>
  );
}

function Info({ icon, title, main, sub }: { icon: React.ReactNode; title: string; main: string; sub: string }) {
  return (
    <div className='flex items-start gap-4 group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300 cursor-pointer'>
      <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 shadow-md'>
        {icon}
      </div>
      <div>
        <div className='text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1'>
          {title}
        </div>
        <div className='text-base font-bold text-gray-900'>
          {main}
        </div>
        <div className='text-sm text-gray-600'>{sub}</div>
      </div>
    </div>
  );
}

function SocialIcon({ children, href, 'aria-label': ariaLabel }: { children: React.ReactNode; href: string; 'aria-label': string }) {
  return (
    <a 
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={ariaLabel}
      className='w-11 h-11 rounded-full bg-blue-100 hover:bg-blue-600 flex items-center justify-center text-blue-600 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl'
    >
      {children}
    </a>
  );
}
