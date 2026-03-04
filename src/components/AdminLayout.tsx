import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  HeartPulse,
  BarChart3,
  Star,
  Clock,
  Phone,
  CheckCircle,
  XCircle,
  Download,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ExternalLink,
} from 'lucide-react';
import { logo } from '@/assets';

const MAIN_NAV = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'All Leads', path: '/admin?filter=all', icon: Users },
  { name: 'Training', path: '/admin?filter=training', icon: GraduationCap },
  { name: 'Health Checks', path: '/admin?filter=health', icon: HeartPulse },
];

const PIPELINE_NAV = [
  { name: 'New Leads', path: '/admin?status=new', icon: Star, color: 'text-blue-400' },
  { name: 'Contacted', path: '/admin?status=contacted', icon: Phone, color: 'text-yellow-400' },
  { name: 'In Progress', path: '/admin?status=in_progress', icon: Clock, color: 'text-purple-400' },
  { name: 'Converted', path: '/admin?status=converted', icon: CheckCircle, color: 'text-green-400' },
  { name: 'Lost', path: '/admin?status=lost', icon: XCircle, color: 'text-red-400' },
];

const QUICK_NAV = [
  { name: 'Analytics', path: '/admin?view=analytics', icon: BarChart3 },
  { name: 'Starred', path: '/admin?starred=true', icon: Star },
  { name: 'Export Data', path: '/admin?view=export', icon: Download },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const adminEmail = sessionStorage.getItem('adminEmail');

  const isActive = (path: string) => {
    const search = location.search;
    const params = new URLSearchParams(search);
    
    // Dashboard - default view
    if (path === '/admin') {
      return !params.get('filter') && !params.get('status') && !params.get('view') && !params.get('starred');
    }
    
    // Check for status filter
    if (path.includes('status=')) {
      return search.includes(path.split('status=')[1].split('&')[0]) || search === `?${path.split('?')[1]}`;
    }
    
    // Check for other filters
    if (path.includes('?')) {
      const [basePath, query] = path.split('?');
      return location.pathname === basePath && search === `?${query}`;
    }
    
    return location.pathname === path;
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    sessionStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          bg-gradient-to-b from-[#0e224b] to-[#0b1c3d]
          transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? 'w-20' : 'w-72'}
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-between px-4 lg:px-6 border-b border-white/10">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <img src={logo} alt="Open Edge" className="h-10 w-auto object-contain" />
            {!sidebarCollapsed && (
              <span className="text-white font-semibold text-lg">Admin</span>
            )}
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/70 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 lg:px-4 space-y-1 overflow-y-auto">
          {/* Main Menu */}
          <div className="px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
            {!sidebarCollapsed && 'Main'}
          </div>
          {MAIN_NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
          
          {/* Pipeline Status */}
          <div className="mt-6 px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
            {!sidebarCollapsed && 'Pipeline'}
          </div>
          {PIPELINE_NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  active 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${item.color || ''}`} />
                {!sidebarCollapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
          
          {/* Quick Access */}
          <div className="mt-6 px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
            {!sidebarCollapsed && 'Quick Access'}
          </div>
          {QUICK_NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  active 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
          
          {/* Divider */}
          <div className="my-4 border-t border-white/10" />
          
          {/* External Links */}
          <div className="px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
            {!sidebarCollapsed && 'External'}
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10"
          >
            <ExternalLink className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <span className="font-medium">View Website</span>
            )}
          </a>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-white/10 space-y-3">
          {/* Collapse Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex items-center justify-center w-full py-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft className={`w-5 h-5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            {!sidebarCollapsed && <span className="ml-2 text-sm">Collapse</span>}
          </button>

          {/* Admin Info */}
          {!sidebarCollapsed && adminEmail && (
            <div className="px-4 py-2 bg-white/5 rounded-lg">
              <p className="text-xs text-white/50">Logged in as</p>
              <p className="text-sm text-white font-medium truncate">{adminEmail}</p>
            </div>
          )}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!sidebarCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Open Edge" className="h-8 w-auto object-contain" />
            <span className="font-semibold text-gray-800">Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
