import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import {
  getSubmissions,
  deleteSubmission,
  getVisitorStats,
  updateSubmissionStatus,
  type VisitorData,
} from '@/utils/googleSheetsApi';
import type { Submission } from '@/utils/googleSheetsApi';
import SubmissionDetails from '@/components/SubmissionDetails';
import {
  RefreshCw,
  Search,
  Star,
  Trash2,
  Eye,
  Download,
  Filter,
  TrendingUp,
  Users,
  Clock,
  Phone,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  ChevronDown,
  Building2,
  GraduationCap,
  Activity,
  Globe,
  Monitor,
  Smartphone,
  ArrowUpRight,
  CalendarDays,
} from 'lucide-react';

type PipelineStatus =
  | 'new'
  | 'contacted'
  | 'in_progress'
  | 'converted'
  | 'lost';

interface SubmissionMeta {
  starred?: boolean;
  status?: PipelineStatus;
}

const STATUS_CONFIG: {
  value: PipelineStatus;
  label: string;
  color: string;
  icon: React.ElementType;
}[] = [
  {
    value: 'new',
    label: 'New',
    color: 'bg-blue-100 text-blue-800',
    icon: AlertCircle,
  },
  {
    value: 'contacted',
    label: 'Contacted',
    color: 'bg-yellow-100 text-yellow-800',
    icon: Phone,
  },
  {
    value: 'in_progress',
    label: 'In Progress',
    color: 'bg-purple-100 text-purple-800',
    icon: Clock,
  },
  {
    value: 'converted',
    label: 'Converted',
    color: 'bg-green-100 text-green-800',
    icon: CheckCircle,
  },
  {
    value: 'lost',
    label: 'Lost',
    color: 'bg-red-100 text-red-800',
    icon: XCircle,
  },
];

export default function AdminDashboard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  
  const filterParam = searchParams.get('filter');
  const viewParam = searchParams.get('view');
  const statusParam = searchParams.get('status') as PipelineStatus | null;
  const starredParam = searchParams.get('starred') === 'true';
  
  const activeTab: 'leads' | 'analytics' = viewParam === 'analytics' ? 'analytics' : 'leads';
  
  const getInitialFilter = (): 'all' | 'Training Application' | 'Health Check' => {
    if (filterParam === 'training') return 'Training Application';
    if (filterParam === 'health') return 'Health Check';
    return 'all';
  };
  
  const getInitialStatusFilter = (): PipelineStatus | 'all' => {
    if (statusParam && ['new', 'contacted', 'in_progress', 'converted', 'lost'].includes(statusParam)) {
      return statusParam;
    }
    return 'all';
  };
  
  const [filter, setFilter] = useState<
    'all' | 'Training Application' | 'Health Check'
  >(getInitialFilter());
  const [statusFilter, setStatusFilter] = useState<PipelineStatus | 'all'>(
    getInitialStatusFilter(),
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState<number | null>(
    null,
  );
  const [visitorData, setVisitorData] = useState<VisitorData[]>([]);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<'7' | '30' | 'all'>('7');

  const getMeta = (submission: Submission): SubmissionMeta => ({
    status: submission.Status as PipelineStatus | undefined,
    starred: submission.Starred === 'true',
  });

  const toggleStar = async (id: number) => {
    const submission = submissions.find((s) => s.id === id);
    if (!submission) return;
    const newStarred = !getMeta(submission).starred;
    const success = await updateSubmissionStatus(id, undefined, newStarred);
    if (success) {
      setSubmissions(
        submissions.map((s) =>
          s.id === id ? { ...s, Starred: newStarred ? 'true' : 'false' } : s,
        ),
      );
    }
  };

  const updateStatus = async (id: number, status: PipelineStatus) => {
    const success = await updateSubmissionStatus(id, status, undefined);
    if (success)
      setSubmissions(
        submissions.map((s) => (s.id === id ? { ...s, Status: status } : s)),
      );
    setShowStatusDropdown(null);
  };

  const getStatusCount = (status?: PipelineStatus) =>
    submissions.filter((s) => {
      const meta = getMeta(s);
      return status
        ? meta.status === status
        : !meta.status || meta.status === 'new';
    }).length;

  const getConversionRate = () => {
    const converted = submissions.filter(
      (s) => getMeta(s).status === 'converted',
    ).length;
    const total = submissions.filter(
      (s) => getMeta(s).status && getMeta(s).status !== 'new',
    ).length;
    return total > 0 ? Math.round((converted / total) * 100) : 0;
  };

  useEffect(() => {
    loadSubmissions();
    loadVisitorStats();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    setSubmissions(await getSubmissions());
    setLoading(false);
  };
  const loadVisitorStats = async () => {
    setAnalyticsLoading(true);
    setVisitorData(await getVisitorStats());
    setAnalyticsLoading(false);
  };

  const getUniqueVisitors = () =>
    new Set(visitorData.map((v) => v.SessionID)).size;
  const getPageViews = () => visitorData.length;
  const getTopPages = () => {
    const pageCounts: Record<string, number> = {};
    visitorData.forEach((v) => {
      const page = v.PageURL || 'Unknown';
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });
    return Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  };
  const getTrafficSources = () => {
    const sources: Record<string, number> = {};
    visitorData.forEach((v) => {
      const source = v.Referrer || 'Direct';
      sources[source] = (sources[source] || 0) + 1;
    });
    return Object.entries(sources).sort((a, b) => b[1] - a[1]);
  };
  const getDeviceStats = () => {
    const mobile = visitorData.filter((v) => v.DeviceType === 'Mobile').length;
    const desktop = visitorData.filter(
      (v) => v.DeviceType === 'Desktop',
    ).length;
    return { mobile, desktop, total: mobile + desktop };
  };
  const getFilteredVisitors = () => {
    if (dateRange === 'all') return visitorData;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - parseInt(dateRange));
    return visitorData.filter(
      (v) => v.Timestamp && new Date(v.Timestamp) > cutoff,
    );
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this submission?')) return;
    setDeletingId(id);
    const success = await deleteSubmission(id);
    if (success) {
      setSubmissions(submissions.filter((s) => s.id !== id));
      localStorage.removeItem(`sub_meta_${id}`);
    } else alert('Failed to delete');
    setDeletingId(null);
  };

  const exportToCSV = () => {
    const headers = [
      'Date',
      'Type',
      'Name',
      'Email',
      'Phone',
      'Status',
      'Starred',
    ];
    const rows = filteredSubmissions.map((sub) => {
      const meta = getMeta(sub);
      return [
        formatDate(sub.Timestamp),
        sub.FormType || '',
        sub.fullName || sub.businessName || sub.Name || '',
        sub.email || '',
        sub.phoneNumber || sub['Phone Number'] || '',
        STATUS_CONFIG.find((s) => s.value === meta.status)?.label || 'New',
        meta.starred ? 'Yes' : 'No',
      ];
    });
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${c}"`).join(','))
      .join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredSubmissions = useMemo(
    () =>
      submissions.filter((sub) => {
        const meta = getMeta(sub);
        const matchesType = filter === 'all' || sub.FormType === filter;
        const matchesStatus =
          statusFilter === 'all' || meta.status === statusFilter;
        const matchesStarred = !starredParam || meta.starred;
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          !searchQuery ||
          String(sub.fullName ?? sub.businessName ?? sub.Name ?? '')
            .toLowerCase()
            .includes(q) ||
          String(sub.email ?? '')
            .toLowerCase()
            .includes(q) ||
          String(sub.phoneNumber ?? sub['Phone Number'] ?? '').includes(q);
        return matchesType && matchesStatus && matchesSearch && matchesStarred;
      }),
    [submissions, filter, statusFilter, searchQuery, starredParam],
  );

  const formatDate = (d?: string) =>
    d
      ? new Date(d).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      : 'N/A';

  const getStatusBadge = (status?: PipelineStatus) => {
    const c = STATUS_CONFIG.find((s) => s.value === status) || STATUS_CONFIG[0];
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${c.color}`}
      >
        <c.icon className='w-3 h-3' />
        {c.label}
      </span>
    );
  };

  return (
    <div className='space-y-6'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
            <BarChart3 className='w-7 h-7 text-blue-600' />
            Dashboard
          </h1>
          <p className='text-sm text-gray-500 mt-1'>
            {activeTab === 'leads'
              ? 'Manage your leads'
              : 'Track visitor analytics'}
          </p>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={activeTab === 'leads' ? loadSubmissions : loadVisitorStats}
            className='flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 shadow-sm'
          >
            <RefreshCw
              className={`w-4 h-4 ${loading || analyticsLoading ? 'animate-spin' : ''}`}
            />
            Refresh
          </button>
          {activeTab === 'leads' && (
            <button
              onClick={exportToCSV}
              className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm'
            >
              <Download className='w-4 h-4' />
              Export
            </button>
          )}
        </div>
      </div>

      <div className='flex gap-2 border-b border-gray-200 pb-4'>
        <button
          onClick={() => navigate('/admin?filter=all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'leads' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
        >
          Leads
        </button>
        <button
          onClick={() => navigate('/admin?view=analytics')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
        >
          Analytics
        </button>
      </div>

      {activeTab === 'leads' && (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <Activity className='w-5 h-5 text-blue-600' />
                </div>
                <div className='text-gray-500 text-sm'>Total Leads</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {submissions.length}
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-yellow-100 rounded-lg'>
                  <AlertCircle className='w-5 h-5 text-yellow-600' />
                </div>
                <div className='text-gray-500 text-sm'>New</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {getStatusCount('new')}
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-purple-100 rounded-lg'>
                  <Clock className='w-5 h-5 text-purple-600' />
                </div>
                <div className='text-gray-500 text-sm'>In Progress</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {getStatusCount('in_progress')}
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-green-100 rounded-lg'>
                  <CheckCircle className='w-5 h-5 text-green-600' />
                </div>
                <div className='text-gray-500 text-sm'>Converted</div>
              </div>
              <div className='text-3xl font-bold text-green-600'>
                {getStatusCount('converted')}
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg'>
                  <TrendingUp className='w-5 h-5 text-white' />
                </div>
                <div className='text-gray-500 text-sm'>Conversion</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {getConversionRate()}%
              </div>
            </div>
          </div>

          <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
            <div className='flex flex-col lg:flex-row gap-4'>
              <div className='flex-1 relative'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='flex gap-2 items-center'>
                <Filter className='w-5 h-5 text-gray-400' />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as typeof filter)}
                  className='px-4 py-2 border border-gray-200 rounded-lg'
                >
                  <option value='all'>All Types</option>
                  <option value='Training Application'>Training</option>
                  <option value='Health Check'>Health Check</option>
                </select>
                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as PipelineStatus | 'all')
                  }
                  className='px-4 py-2 border border-gray-200 rounded-lg'
                >
                  <option value='all'>All Status</option>
                  {STATUS_CONFIG.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
            {loading ? (
              <div className='p-8 text-center text-gray-500'>
                <RefreshCw className='w-5 h-5 animate-spin inline mr-2' />
                Loading...
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className='p-8 text-center text-gray-500'>
                No submissions
              </div>
            ) : (
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b border-gray-200'>
                    <tr>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        <Star className='w-4 h-4' />
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        Date
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        Type
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        Name
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        Email
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        Phone
                      </th>
                      <th className='px-4 py-3 text-left text-xs font-semibold text-gray-500'>
                        Status
                      </th>
                      <th className='px-4 py-3 text-right text-xs font-semibold text-gray-500'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {filteredSubmissions.map((sub) => {
                      const meta = getMeta(sub);
                      const isTraining =
                        sub.FormType === 'Training Application';
                      return (
                        <tr
                          key={sub.id}
                          className={`hover:bg-gray-50 ${meta.starred ? 'bg-yellow-50' : ''}`}
                        >
                          <td className='px-4 py-3'>
                            <button
                              onClick={() => toggleStar(sub.id)}
                              className={`p-1 rounded ${meta.starred ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                              <Star
                                className={`w-5 h-5 ${meta.starred ? 'fill-current' : ''}`}
                              />
                            </button>
                          </td>
                          <td className='px-4 py-3 text-sm text-gray-600 whitespace-nowrap'>
                            {formatDate(sub.Timestamp)}
                          </td>
                          <td className='px-4 py-3'>
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${isTraining ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}
                            >
                              {isTraining ? (
                                <GraduationCap className='w-3 h-3' />
                              ) : (
                                <Building2 className='w-3 h-3' />
                              )}
                              {isTraining ? 'Training' : 'Health Check'}
                            </span>
                          </td>
                          <td className='px-4 py-3 text-sm font-medium text-gray-800'>
                            {sub.fullName ||
                              sub.businessName ||
                              sub.Name ||
                              'N/A'}
                          </td>
                          <td className='px-4 py-3 text-sm text-gray-600'>
                            {sub.email || 'N/A'}
                          </td>
                          <td className='px-4 py-3 text-sm text-gray-600'>
                            {sub.phoneNumber || sub['Phone Number'] || 'N/A'}
                          </td>
                          <td className='px-4 py-3'>
                            <div className='relative'>
                              <button
                                onClick={() =>
                                  setShowStatusDropdown(
                                    showStatusDropdown === sub.id
                                      ? null
                                      : sub.id,
                                  )
                                }
                                className='flex items-center gap-1'
                              >
                                {getStatusBadge(meta.status)}
                                <ChevronDown className='w-3 h-3 text-gray-400' />
                              </button>
                              {showStatusDropdown === sub.id && (
                                <div className='absolute z-10 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[140px]'>
                                  {STATUS_CONFIG.map((s) => (
                                    <button
                                      key={s.value}
                                      onClick={() =>
                                        updateStatus(sub.id, s.value)
                                      }
                                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${meta.status === s.value ? 'bg-gray-100' : ''}`}
                                    >
                                      <s.icon className='w-4 h-4' />
                                      {s.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className='px-4 py-3 text-right'>
                            <div className='flex gap-2 justify-end'>
                              <button
                                onClick={() => setSelectedSubmission(sub)}
                                className='text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50'
                              >
                                <Eye className='w-4 h-4 inline' />
                              </button>
                              <button
                                onClick={() => handleDelete(sub.id)}
                                disabled={deletingId === sub.id}
                                className='text-red-600 hover:text-red-800 disabled:opacity-50 px-2 py-1 rounded hover:bg-red-50'
                              >
                                <Trash2 className='w-4 h-4 inline' />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === 'analytics' && (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <Users className='w-5 h-5 text-blue-600' />
                </div>
                <div className='text-gray-500 text-sm'>Unique Visitors</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {analyticsLoading ? '...' : getUniqueVisitors()}
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-purple-100 rounded-lg'>
                  <Globe className='w-5 h-5 text-purple-600' />
                </div>
                <div className='text-gray-500 text-sm'>Page Views</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {analyticsLoading ? '...' : getPageViews()}
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-green-100 rounded-lg'>
                  <Monitor className='w-5 h-5 text-green-600' />
                </div>
                <div className='text-gray-500 text-sm'>Desktop</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {analyticsLoading ? '...' : getDeviceStats().desktop}
                <span className='text-sm text-gray-400 ml-2'>
                  (
                  {getDeviceStats().total > 0
                    ? Math.round(
                        (getDeviceStats().desktop / getDeviceStats().total) *
                          100,
                      )
                    : 0}
                  %)
                </span>
              </div>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='p-2 bg-orange-100 rounded-lg'>
                  <Smartphone className='w-5 h-5 text-orange-600' />
                </div>
                <div className='text-gray-500 text-sm'>Mobile</div>
              </div>
              <div className='text-3xl font-bold text-gray-800'>
                {analyticsLoading ? '...' : getDeviceStats().mobile}
                <span className='text-sm text-gray-400 ml-2'>
                  (
                  {getDeviceStats().total > 0
                    ? Math.round(
                        (getDeviceStats().mobile / getDeviceStats().total) *
                          100,
                      )
                    : 0}
                  %)
                </span>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
              <h3 className='font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                <Globe className='w-5 h-5 text-blue-600' />
                Top Pages
              </h3>
              <div className='space-y-3'>
                {analyticsLoading ? (
                  <p className='text-gray-500'>Loading...</p>
                ) : (
                  getTopPages().map(([page, count], idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center gap-2'>
                        <span className='w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold'>
                          {idx + 1}
                        </span>
                        <span className='text-sm text-gray-600 truncate max-w-[200px]'>
                          {page}
                        </span>
                      </div>
                      <span className='text-sm font-semibold text-gray-800'>
                        {count}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
              <h3 className='font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                <ArrowUpRight className='w-5 h-5 text-blue-600' />
                Traffic Sources
              </h3>
              <div className='space-y-3'>
                {analyticsLoading ? (
                  <p className='text-gray-500'>Loading...</p>
                ) : (
                  getTrafficSources()
                    .slice(0, 6)
                    .map(([source, count], idx) => (
                      <div
                        key={idx}
                        className='flex items-center justify-between'
                      >
                        <div className='flex items-center gap-2'>
                          <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                          <span className='text-sm text-gray-600'>
                            {source}
                          </span>
                        </div>
                        <span className='text-sm font-semibold text-gray-800'>
                          {count}
                        </span>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>

          <div className='bg-white p-5 rounded-xl shadow-sm border border-gray-100'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-semibold text-gray-800 flex items-center gap-2'>
                <CalendarDays className='w-5 h-5 text-blue-600' />
                Recent Visits
              </h3>
              <select
                value={dateRange}
                onChange={(e) =>
                  setDateRange(e.target.value as typeof dateRange)
                }
                className='px-3 py-1.5 border border-gray-200 rounded-lg text-sm'
              >
                <option value='7'>Last 7 days</option>
                <option value='30'>Last 30 days</option>
                <option value='all'>All time</option>
              </select>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gray-50 border-b border-gray-200'>
                  <tr>
                    <th className='px-3 py-2 text-left text-xs font-semibold text-gray-500'>
                      Time
                    </th>
                    <th className='px-3 py-2 text-left text-xs font-semibold text-gray-500'>
                      Page
                    </th>
                    <th className='px-3 py-2 text-left text-xs font-semibold text-gray-500'>
                      Source
                    </th>
                    <th className='px-3 py-2 text-left text-xs font-semibold text-gray-500'>
                      Device
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                  {analyticsLoading ? (
                    <tr>
                      <td
                        colSpan={4}
                        className='px-3 py-4 text-center text-gray-500'
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    getFilteredVisitors()
                      .slice(0, 15)
                      .map((v, idx) => (
                        <tr key={idx} className='hover:bg-gray-50'>
                          <td className='px-3 py-2 text-xs text-gray-500'>
                            {v.Timestamp
                              ? new Date(v.Timestamp).toLocaleString()
                              : 'N/A'}
                          </td>
                          <td className='px-3 py-2 text-xs text-gray-600 truncate max-w-[150px]'>
                            {v.PageURL}
                          </td>
                          <td className='px-3 py-2 text-xs text-gray-600'>
                            {v.Referrer}
                          </td>
                          <td className='px-3 py-2'>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${v.DeviceType === 'Mobile' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}
                            >
                              {v.DeviceType}
                            </span>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <SubmissionDetails
        submission={selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
      />
    </div>
  );
}
