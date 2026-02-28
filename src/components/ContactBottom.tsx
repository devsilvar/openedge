import { MapPin, ExternalLink } from 'lucide-react';
import { ContactPageBottom } from '@/assets/index';

export default function ContactBottom() {
  return (
    <section className='relative w-full h-[400px] bg-gray-200 overflow-hidden'>
      {/* Map Background - Using a map image or you can integrate Google Maps */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(${ContactPageBottom})`,
          filter: 'grayscale(100%)',
        }}
      >
        {/* Overlay for better contrast */}
        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      {/* Large Location Pin Icon */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <div className='relative'>
          {/* White pin outline */}

          {/* Grid pattern inside pin */}
        </div>
      </div>

      {/* Location Card */}
      <div className='absolute bottom-8 left-8 z-10'>
        <div className='bg-white rounded-xl shadow-2xl p-5 flex items-center gap-4 max-w-sm group hover:shadow-2xl transition-all duration-300'>
          <div className='w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0'>
            <MapPin className='w-6 h-6 text-white' strokeWidth={2.5} />
          </div>

          <div className='flex-1'>
            <p className='text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1'>
              FIND US HERE
            </p>
            <p className='text-[14px] font-semibold text-gray-900 leading-tight'>
              Plot 8 Acme Road, Ikeja, Lagos
            </p>
          </div>

          <button
            onClick={() =>
              window.open(
                'https://maps.google.com/?q=Plot+8+Acme+Road+Ikeja+Lagos',
                '_blank',
              )
            }
            className='w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors duration-200'
          >
            <ExternalLink className='w-4 h-4 text-gray-600' />
          </button>
        </div>
      </div>
    </section>
  );
}
