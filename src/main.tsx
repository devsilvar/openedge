import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import HealthCheckForm from './pages/HealthCheckForm';
import BookHealthCheck from './pages/BookHealthCheck';
import './index.css';
import OperatingSystem from './pages/OperatingSystem';
import TrainingForm from './pages/TrainingForm';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import { initAnalytics } from './utils/analytics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'training',
        element: <Training />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'operating-system',
        element: <OperatingSystem />,
      },
      {
        path: 'book-health-check',
        element: <BookHealthCheck />,
      },
      {
        path: 'health-check-form',
        element: <HealthCheckForm />,
      },
      {
        path: 'training-form',
        element: <TrainingForm />,
      },
      {
        path: 'admin/login',
        element: <AdminLogin />,
      },
      {
        path: 'admin/dashboard',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

// Initialize Google Analytics
initAnalytics();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
