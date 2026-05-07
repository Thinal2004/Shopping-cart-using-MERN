import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; 
import { auth } from '../firebase';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Safety check: Make sure passwords match
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      // Create the user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Immediately update their newly created profile with their Name
      await updateProfile(userCredential.user, {
        displayName: name
      });

      console.log("Success! Account created.");
      navigate('/'); 
      
    } catch (err) {
      setError('Failed to create an account. ' + err.message);
      console.error(err);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 font-sans text-gray-800 pb-20">
      <Navbar />
      
      <div className="flex justify-center items-center mt-12">
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
          <p className="text-center text-gray-500 mb-8">Join FreshMarket for fast checkout and saved carts.</p>
          
          {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-6">{error}</div>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#0a7a35] focus:ring-1 focus:ring-[#0a7a35] transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6" 
                placeholder="••••••••" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#0a7a35] focus:ring-1 focus:ring-[#0a7a35] transition" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength="6"
                placeholder="••••••••" 
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#0a7a35] focus:ring-1 focus:ring-[#0a7a35] transition" 
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#0a7a35] hover:bg-green-800 text-white font-bold py-3 rounded-xl mt-2 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account? <Link to="/login" className="text-[#0a7a35] font-semibold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;