const STORAGE_KEY = 'studentLoginRequests';

const safeParse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

// Mock data for login requests
const mockLoginRequests = [
  {
    id: 'REQ-1001',
    fullName: 'Arjun Kumar',
    registerNumber: 'STU2024001',
    email: 'arjun.kumar@student.edu',
    mobile: '+91 98765 43210',
    department: 'Computer Science',
    course: 'B.Tech Computer Science',
    yearSemester: '2nd Year / 3rd Semester',
    batch: 'Batch A - Morning',
    message: 'Requesting access to submit my pending assignments and view course materials.',
    status: 'Pending',
    requestedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: 'REQ-1002',
    fullName: 'Priya Sharma',
    registerNumber: 'STU2024002',
    email: 'priya.sharma@student.edu',
    mobile: '+91 87654 32109',
    department: 'Electronics and Communication',
    course: 'B.Tech ECE',
    yearSemester: '3rd Year / 5th Semester',
    batch: 'Batch B - Afternoon',
    message: 'New student requesting initial login access.',
    status: 'Pending',
    requestedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
  },
  {
    id: 'REQ-1003',
    fullName: 'Mohammed Akhtar',
    registerNumber: 'STU2024003',
    email: 'mohammed.akhtar@student.edu',
    mobile: '+91 76543 21098',
    department: 'Mechanical Engineering',
    course: 'B.Tech Mechanical',
    yearSemester: '1st Year / 1st Semester',
    batch: 'Batch C - Morning',
    message: 'Forgot my previous login credentials. Need new access.',
    status: 'Approved',
    requestedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    id: 'REQ-1004',
    fullName: 'Sneha Patel',
    registerNumber: 'STU2024004',
    email: 'sneha.patel@student.edu',
    mobile: '+91 65432 10987',
    department: 'Civil Engineering',
    course: 'B.Tech Civil',
    yearSemester: '4th Year / 7th Semester',
    batch: 'Batch A - Morning',
    message: 'Transferred from another institution. Requesting new login credentials.',
    status: 'Pending',
    requestedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
  },
  {
    id: 'REQ-1005',
    fullName: 'Rahul Verma',
    registerNumber: 'STU2023005',
    email: 'rahul.verma@student.edu',
    mobile: '+91 54321 09876',
    department: 'Information Technology',
    course: 'B.Tech IT',
    yearSemester: '2nd Year / 4th Semester',
    batch: 'Batch B - Afternoon',
    message: '',
    status: 'Rejected',
    requestedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
  },
  {
    id: 'REQ-1006',
    fullName: 'Ananya Singh',
    registerNumber: 'STU2024006',
    email: 'ananya.singh@student.edu',
    mobile: '+91 43210 98765',
    department: 'Electrical Engineering',
    course: 'B.Tech Electrical',
    yearSemester: '3rd Year / 6th Semester',
    batch: 'Batch C - Morning',
    message: 'Account locked due to multiple failed login attempts. Requesting reset.',
    status: 'Pending',
    requestedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // 10 minutes ago
  },
  {
    id: 'REQ-1007',
    fullName: 'Vikram Reddy',
    registerNumber: 'STU2024007',
    email: 'vikram.reddy@student.edu',
    mobile: '+91 32109 87654',
    department: 'Computer Science',
    course: 'M.Tech Computer Science',
    yearSemester: '1st Year / 2nd Semester',
    batch: 'Batch A - Morning',
    message: 'Postgraduate student requesting access to research portal and course materials.',
    status: 'Approved',
    requestedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    id: 'REQ-1008',
    fullName: 'Deepika Nair',
    registerNumber: 'STU2024008',
    email: 'deepika.nair@student.edu',
    mobile: '+91 21098 76543',
    department: 'Chemical Engineering',
    course: 'B.Tech Chemical',
    yearSemester: '2nd Year / 3rd Semester',
    batch: 'Batch B - Afternoon',
    message: 'Returning after academic leave. Need to reactivate my account.',
    status: 'Pending',
    requestedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
  },
];

// Initialize mock data if no requests exist
const initializeMockData = () => {
  const existing = safeParse(localStorage.getItem(STORAGE_KEY));
  if (!Array.isArray(existing) || existing.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockLoginRequests));
  }
};

// Initialize on module load
initializeMockData();

export const getLoginRequests = () => {
  const requests = safeParse(localStorage.getItem(STORAGE_KEY));
  return Array.isArray(requests)
    ? requests.sort((a, b) => new Date(b.requestedAt) - new Date(a.requestedAt))
    : [];
};

export const createLoginRequest = (payload) => {
  const requests = getLoginRequests();
  const request = {
    id: `REQ-${Date.now()}`,
    fullName: payload.fullName,
    registerNumber: payload.registerNumber,
    email: payload.email,
    mobile: payload.mobile,
    department: payload.department,
    course: payload.course,
    yearSemester: payload.yearSemester,
    batch: payload.batch || '',
    message: payload.message || '',
    status: 'Pending',
    requestedAt: new Date().toISOString(),
  };

  const updated = [request, ...requests];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return request;
};

export const updateLoginRequest = (id, updates) => {
  const requests = getLoginRequests();
  const updated = requests.map((item) =>
    item.id === id ? { ...item, ...updates, updatedAt: new Date().toISOString() } : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated.find((item) => item.id === id);
};

export const approveLoginRequest = (id) => updateLoginRequest(id, { status: 'Approved' });

export const rejectLoginRequest = (id) => updateLoginRequest(id, { status: 'Rejected' });
