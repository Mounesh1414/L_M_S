import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
  
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

// Users API
export const usersAPI = {
  getAll: async () => {
    const response = await api.get('/users');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  
  getByRole: async (role) => {
    const response = await api.get(`/users/role/${role}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/users', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.patch(`/users/${id}`, data);
    return response.data;
  },
  
  toggleActive: async (id) => {
    const response = await api.patch(`/users/${id}/toggle-active`);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

// Colleges API
export const collegesAPI = {
  getAll: async () => {
    const response = await api.get('/colleges');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/colleges/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/colleges', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.patch(`/colleges/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/colleges/${id}`);
    return response.data;
  },
};

// Departments API
export const departmentsAPI = {
  getAll: async () => {
    const response = await api.get('/departments');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/departments/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/departments', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.patch(`/departments/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/departments/${id}`);
    return response.data;
  },
};

// Batches API
export const batchesAPI = {
  getAll: async () => {
    const response = await api.get('/batches');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/batches/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/batches', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.patch(`/batches/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/batches/${id}`);
    return response.data;
  },
};

// Courses API
export const coursesAPI = {
  getAll: async () => {
    const response = await api.get('/courses');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/courses', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.patch(`/courses/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  },
};

// Announcements API
export const announcementsAPI = {
  getAll: async () => {
    const response = await api.get('/announcements');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/announcements/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/announcements', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.patch(`/announcements/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/announcements/${id}`);
    return response.data;
  },
};

// Assessment & AI API
export const assessmentAPI = {
  getQuestions: async () => {
    const response = await api.get('/assessment/questions');
    return response.data;
  },
  
  createOrUpdateProfile: async (profileData) => {
    const response = await api.post('/assessment/profile', profileData);
    return response.data;
  },
  
  getProfile: async (userId) => {
    const response = await api.get(`/assessment/profile/${userId}`);
    return response.data;
  },
  
  generateReport: async (userId, assessmentResponses) => {
    const response = await api.post(`/assessment/generate-report/${userId}`, assessmentResponses);
    return response.data;
  },
  
  getReport: async (userId) => {
    const response = await api.get(`/assessment/report/${userId}`);
    return response.data;
  },
};

export default api;
