import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, XCircle, Pencil, Mail, Phone, CalendarDays } from 'lucide-react';
import {
  getLoginRequests,
  approveLoginRequest,
  rejectLoginRequest,
  updateLoginRequest,
} from '../../services/loginRequests';

const LoginRequests = () => {
  const [requests, setRequests] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const loadRequests = () => {
    setRequests(getLoginRequests());
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const pendingCount = useMemo(
    () => requests.filter((item) => item.status === 'Pending').length,
    [requests]
  );

  const startEdit = (request) => {
    setEditingId(request.id);
    setEditForm({ ...request });
  };

  const saveEdit = () => {
    updateLoginRequest(editingId, {
      fullName: editForm.fullName,
      registerNumber: editForm.registerNumber,
      department: editForm.department,
      course: editForm.course,
      email: editForm.email,
      mobile: editForm.mobile,
      yearSemester: editForm.yearSemester,
      batch: editForm.batch,
      message: editForm.message,
    });
    setEditingId(null);
    loadRequests();
  };

  const handleApprove = (id) => {
    approveLoginRequest(id);
    loadRequests();
  };

  const handleReject = (id) => {
    rejectLoginRequest(id);
    loadRequests();
  };

  const statusStyles = {
    Pending: 'bg-amber-100 text-amber-700',
    Approved: 'bg-emerald-100 text-emerald-700',
    Rejected: 'bg-red-100 text-red-700',
  };

  return (
    <div className="max-w-7xl mx-auto py-4 space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-slate-900">Login Requests</h1>
        <p className="text-slate-600 mt-1">
          Review student access requests and create login access after verification.
        </p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-700 font-semibold">
          Pending Requests: {pendingCount}
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-600">
          No login requests found.
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-2xl border border-slate-200 p-5">
              {editingId === request.id ? (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900">Edit Student Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input className="px-3 py-2 border border-slate-300 rounded-lg" value={editForm.fullName || ''} onChange={(e) => setEditForm((prev) => ({ ...prev, fullName: e.target.value }))} />
                    <input className="px-3 py-2 border border-slate-300 rounded-lg" value={editForm.registerNumber || ''} onChange={(e) => setEditForm((prev) => ({ ...prev, registerNumber: e.target.value }))} />
                    <input className="px-3 py-2 border border-slate-300 rounded-lg" value={editForm.department || ''} onChange={(e) => setEditForm((prev) => ({ ...prev, department: e.target.value }))} />
                    <input className="px-3 py-2 border border-slate-300 rounded-lg" value={editForm.course || ''} onChange={(e) => setEditForm((prev) => ({ ...prev, course: e.target.value }))} />
                    <input className="px-3 py-2 border border-slate-300 rounded-lg" value={editForm.email || ''} onChange={(e) => setEditForm((prev) => ({ ...prev, email: e.target.value }))} />
                    <input className="px-3 py-2 border border-slate-300 rounded-lg" value={editForm.mobile || ''} onChange={(e) => setEditForm((prev) => ({ ...prev, mobile: e.target.value }))} />
                  </div>
                  <div className="flex gap-3">
                    <button onClick={saveEdit} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save</button>
                    <button onClick={() => setEditingId(null)} className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{request.fullName}</h3>
                      <p className="text-slate-600">Register Number: {request.registerNumber}</p>
                      <p className="text-slate-600">{request.department} • {request.course}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${statusStyles[request.status] || statusStyles.Pending}`}>
                      {request.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-slate-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>{request.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>{request.mobile}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-blue-600" />
                      <span>Requested Date: {new Date(request.requestedAt).toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="font-medium">Year/Semester:</span> {request.yearSemester}
                    </div>
                  </div>

                  {request.batch && (
                    <p className="mt-2 text-slate-600"><span className="font-medium">Batch:</span> {request.batch}</p>
                  )}

                  {request.message && (
                    <p className="mt-2 text-slate-600"><span className="font-medium">Message:</span> {request.message}</p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Approve & Create Account
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject Request
                    </button>
                    <button
                      onClick={() => startEdit(request)}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
                    >
                      <Pencil className="w-4 h-4" />
                      Edit Student Details
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoginRequests;
