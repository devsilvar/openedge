import React from 'react';
import { hospitalInterior, logo } from '@/assets';
import { Link } from 'react-router';

export interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  eyebrowText?: string;
  description?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryLink?: string;
  secondaryLink?: string;
  primaryBtnAction?: () => void;
  secondaryBtnAction?: () => void;
  imageSrc?: string | null;
  heroImage?: string;
  heroVideo?: string;
  imageAlt?: string;
  overlayText?: string;
}

export default function Hero({
  title,
  subtitle,
  eyebrowText = 'Hospitality Solutions Firm',
  description,
  primaryBtnText,
  primaryLink = '/contact',
  secondaryLink = '/training',
  secondaryBtnText,
  primaryBtnAction,
  secondaryBtnAction,
  imageSrc = hospitalInterior,
  heroImage,
  heroVideo,
  imageAlt = 'Hero image',
  overlayText,
}: HeroProps) {
  const hasButtons = primaryBtnText || secondaryBtnText;
  const hasImage = imageSrc !== null;
  const hasHeroVideo = !!heroVideo;
  const isLogo = hasHeroVideo || !!heroImage;

  return (
    <section className='relative  pt-16 pb-20 overflow-hidden'>
      {/* Decorative background elements */}

      <div className='mx-auto max-w-[1200px] px-6 relative z-10'>
        <div className='grid lg:grid-cols-[55%_45%] gap-12 items-center'>
          {/* LEFT - Text Content */}
          <div className='flex flex-col justify-center'>
            {/* Eyebrow - What We Do */}
            <div className='inline-flex items-center gap-2 mb-5'>
              <p className='text-[14px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase'>
                {eyebrowText}
              </p>
            </div>

            {/* Heading */}
            <h1 className='text-[32px] sm:text-[38px] md:text-[40px] leading-[1.2] font-extrabold tracking-tight text-heading mb-6'>
              {title}
            </h1>

            {subtitle && (
              <div className='mb-5'>
                {' '}
                <h2 className='italic text-[16px] sm:text-[18px] md:text-[20px] leading-[1.4] font-normal '>
                  <em>{subtitle}</em>
                </h2>
              </div>
            )}

            {/* Subtext */}
            {description && (
              <p className='mt-3 text-[16px] sm:text-[17px] leading-[1.7] text-muted max-w-[520px]'>
                {description}
              </p>
            )}

            {/* Buttons */}
            {hasButtons && (
              <div className='mt-8 flex flex-col sm:flex-row gap-6'>
                {primaryBtnText && (
                  <div className='w-full sm:w-auto'>
                    <p className='text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide'>
                      Business Owner?
                    </p>
                    <Link to={primaryLink} className='block'>
                      <button
                        onClick={primaryBtnAction}
                        className='w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-[16px] font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-magnetic btn-ripple'
                      >
                        {primaryBtnText}
                      </button>
                    </Link>
                  </div>
                )}

                {secondaryBtnText && (
                  <div className='w-full sm:w-auto'>
                    <p className='text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide'>
                      Hospitality Operator?
                    </p>
                    <Link to={secondaryLink} className='block'>
                      <button
                        onClick={secondaryBtnAction}
                        className='w-full sm:w-auto bg-white border-2 border-primary text-[16px] font-bold text-primary px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 btn-magnetic'
                      >
                        {secondaryBtnText}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT - Image/Logo/Video */}
          {(hasImage || hasHeroVideo) && (
            <div className='relative'>
              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 group ${isLogo ? 'bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 logo-glow-container' : ''}`}
              >
                {isLogo && <div className='logo-glow-middle'></div>}
                {hasHeroVideo ? (
                  <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-[100%] lg:w-full lg:max-w-[600px] h-auto object-contain'
                  />
                ) : (
                  <img
                    src={logo || ''}
                    alt={imageAlt}
                    className={
                      isLogo
                        ? 'w-[90%] lg:w-full lg:max-w-[600px] h-auto object-contain group-hover:scale-110 transition-transform duration-700 logo-float-animation'
                        : 'w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700'
                    }
                  />
                )}

                {/* Bottom Overlay Badge */}
                {overlayText && (
                  <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[92%]'>
                    <div className='bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl border border-gray-200'>
                      <p className='text-[13px] tracking-[0.12em] text-[var(--color-brandBlue)] font-bold uppercase flex items-center justify-center gap-2 font-montserrat'>
                        <span className='text-center'>{overlayText}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none'></div>
              </div>

              {/* Decorative floating elements - smaller */}
              <div className='absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-15 animate-pulse'></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
