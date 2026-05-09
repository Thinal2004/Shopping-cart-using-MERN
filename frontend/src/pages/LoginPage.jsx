import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithRedirect , signInWithEmailAndPassword} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    try {
      setError('');
      signInWithRedirect(auth, googleProvider);
    } catch (err) {
      setError('Failed to initiate Google sign-in.');
      console.error(err);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault(); // Prevents the page from reloading when you hit submit
    try {
      setError('');
      // Tell Firebase to check this email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Success! Logged in with email.");
      navigate('/');
    } catch (err) {
      // Firebase will throw an error if the password is wrong or user doesn't exist
      setError('Invalid email or password. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 font-sans text-gray-800 pb-20">
      <Navbar />
      
      <div className="flex justify-center items-center mt-20">
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-8">Sign in to access your saved cart and fast checkout.</p>
          
          {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6">{error}</div>}

          {/* The Google Sign-In Button */}
          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl transition duration-200 mb-6"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="relative flex py-2 items-center mb-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Standard Email/Password form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Updates the email state
                required
                placeholder="you@example.com" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#0a7a35] focus:ring-1 focus:ring-[#0a7a35] transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Updates the password state
                required
                placeholder="••••••••" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#0a7a35] focus:ring-1 focus:ring-[#0a7a35] transition" 
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#0a7a35] hover:bg-green-800 text-white font-bold py-3 rounded-xl transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account? <Link to="/register" className="text-[#0a7a35] font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;