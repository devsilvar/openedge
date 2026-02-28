import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Get credentials from environment variables
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    // Simulate a brief loading period for better UX
    setTimeout(() => {
      if (email === adminEmail && password === adminPassword) {
        // Store auth token in sessionStorage
        sessionStorage.setItem('adminAuth', 'true');
        sessionStorage.setItem('adminEmail', email);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12'>
      <div className='max-w-md w-full'>
        {/* Logo & Title */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-4 shadow-lg'>
            <Lock className='w-8 h-8 text-white' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Admin Login</h1>
          <p className='text-gray-600'>Access the Open Edge Admin Dashboard</p>
        </div>

        {/* Login Card */}
        <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
          {error && (
            <div className='mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3 animate-shake'>
              <span className='text-red-600 text-xl'>⚠️</span>
              <div>
                <h3 className='font-bold text-red-900 mb-1'>Authentication Failed</h3>
                <p className='text-red-700 text-sm'>{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className='space-y-6'>
            {/* Email Input */}
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-gray-700'>Email Address</label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='admin@openedge.com'
                  required
                  className='w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900'
                />
              </div>
            </div>

            {/* Password Input */}
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-gray-700'>Password</label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  required
                  className='w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none text-gray-900'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                >
                  {showPassword ? <EyeOff className='w-5 h-5' /> : <Eye className='w-5 h-5' />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            >
              {isLoading ? (
                <>
                  <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock className='w-5 h-5' />
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-500'>
            🔒 Secure admin access only
          </p>
        </div>
      </div>
    </div>
  );
}
