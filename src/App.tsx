import { Outlet } from 'react-router';
import './App.css';
import { Navbar, Footer } from '@/components/index';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import StickyBottomCTA from '@/components/StickyBottomCTA';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { usePageViewTracker } from '@/hooks/usePageViewTracker';

function App() {
  usePageViewTracker();
  
  return (
    <div className='min-h-screen bg-white'>
      <ScrollToTop />
      <ScrollProgressBar />
      <Navbar />
      {/* Add padding to prevent content from hiding under fixed navbar */}
      <div className='pt-[68px]'>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
      <FloatingWhatsApp />
      <StickyBottomCTA />
      <ExitIntentPopup />
    </div>
  );
}

export default App;
