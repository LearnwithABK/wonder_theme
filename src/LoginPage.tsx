import React, { useState } from 'react';

const LoginPage = ({ onLogin, onCreateAccount }: { onLogin: () => void; onCreateAccount: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        onLogin();
      } else {
        setError('Please enter your email and password.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f7ec] to-[#e0e7fa] relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6 animate-fade-in"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)' }}
      >
        <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-2">Sign in to your account</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-full bg-green-500 text-white font-semibold tracking-widest text-base shadow hover:bg-green-600 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        <div className="flex justify-between items-center mt-2 text-sm">
          <a href="#" className="text-gray-500 hover:underline">Forgot password?</a>
          <a href="#" className="text-green-700 hover:underline font-medium" onClick={e => { e.preventDefault(); onCreateAccount(); }}>Create account</a>
        </div>
      </form>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoginPage; 