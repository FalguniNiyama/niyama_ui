import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = { ok: true, data: {} };

      if (!response.ok) {
        throw new Error('Login failed.');
      }
      navigate('/dashboard', { replace: true });
    } catch (err) {
      console.error(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="/images/login_img.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Login Card on Left Side */}
      <div className="relative z-10 flex items-center h-full">
        <div className="ml-12 w-full max-w-md bg-transparent backdrop-blur-lg bg-white/10 p-8 rounded-xl text-whitecolor shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Niyama</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 bg-white/20 text-whitecolor border border-white/30 rounded focus:outline-none placeholder-white"
                placeholder="you@example.com"
                required
              />
            </div>
             
            <div>
              <label className="block text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  minLength={8}
                  className="w-full px-4 py-2 mt-1 bg-white/20 text-whitecolor border border-white/30 rounded focus:outline-none placeholder-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-whitecolor focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-5 h-5" />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-whitecolor hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-whitecolor active:scale-95 text-darkgraycolor font-semibold py-2 rounded-lg transition"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
