import React from 'react';
import { hospitalInterior } from '@/assets';

export interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryBtnAction?: () => void;
  secondaryBtnAction?: () => void;
  imageSrc?: string | null;
  imageAlt?: string;
  overlayText?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnAction,
  secondaryBtnAction,
  imageSrc = hospitalInterior,
  imageAlt = 'Hero image',
  overlayText,
}: HeroProps) {
  const hasButtons = primaryBtnText || secondaryBtnText;
  const hasImage = imageSrc !== null;

  return (
    <section className='relative bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 pt-20 pb-28 overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20'></div>
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-10'></div>

      <div
        className='mx-auto  px-6 relative z-10'
        style={{ maxWidth: 'var(--container-big)' }}
      >
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* LEFT - Text Content */}
          <div className='lg:pr-12'>
            {/* Eyebrow - What We Do */}
            <div className='inline-flex items-center gap-2 bg-blue-50 px-5 py-2.5 rounded-full mb-6 border border-blue-100 shadow-sm'>
              <div className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></div>
              <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase'>
                Hospitality Operating Systems
              </p>
            </div>

            {/* Heading */}
            <h1 className='text-[52px] leading-[1.1] font-extrabold tracking-tight text-heading mb-6'>
              {title}
            </h1>

            {subtitle && (
              <div className='mb-5'>
                <h3 className='text-[19px] leading-[1.6] font-bold text-[var(--color-brandBlue)] bg-blue-50/60 py-3 px-6 rounded-xl inline-block border border-blue-100'>
                  {subtitle}
                </h3>
              </div>
            )}

            {/* Subtext */}
            {description && (
              <p className='mt-6 text-[17px] leading-[1.8] text-muted max-w-[600px]'>
                {description}
              </p>
            )}

            {/* Buttons */}
            {hasButtons && (
              <div className='mt-10 flex flex-col sm:flex-row items-start gap-4'>
                {primaryBtnText && (
                  <button
                    onClick={primaryBtnAction}
                    className='bg-primary hover:bg-primary-dark text-white text-[15px] font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto'
                  >
                    {primaryBtnText}
                  </button>
                )}

                {secondaryBtnText && (
                  <button
                    onClick={secondaryBtnAction}
                    className='bg-white border-2 border-primary text-[15px] font-bold text-primary px-10 py-5 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto'
                  >
                    {secondaryBtnText}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* RIGHT - Image */}
          {hasImage && (
            <div className='relative lg:pl-8'>
              <div className='relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group'>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className='w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700'
                />

                {/* Bottom Overlay Badge - More Visible */}
                {overlayText && (
                  <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%]'>
                    <div className='bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-gray-200'>
                      <p className='text-[11px] tracking-[0.15em] text-[var(--color-brandBlue)] font-bold uppercase flex items-center justify-center gap-2'>
                        <svg
                          className='w-5 h-5 text-green-500 flex-shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='text-center'>{overlayText}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay - Subtler */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none'></div>
              </div>

              {/* Decorative floating elements */}
              <div className='absolute -top-6 -right-6 w-28 h-28 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse'></div>
              <div className='absolute -bottom-6 -left-6 w-36 h-36 bg-purple-500 rounded-full blur-2xl opacity-15 animate-pulse'></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
