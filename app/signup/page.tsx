'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaApple } from 'react-icons/fa';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    // Demo: store signup in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  }

  function handleProviderSignup(provider: string) {
    // Demo: just log in
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSignup}
        className="bg-dark-300/80 p-8 rounded-xl shadow-neon-soft flex flex-col gap-4 w-full max-w-sm border border-gray-800"
      >
        <h1 className="text-2xl font-bold mb-2 text-primary">Sign Up</h1>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 rounded font-semibold hover:bg-primary/80 transition"
        >
          Sign Up
        </button>
        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="mx-2 text-gray-400 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>
        <button
          type="button"
          onClick={() => handleProviderSignup('google')}
          className="flex items-center justify-center gap-2 bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition"
        >
          <FaGoogle className="h-5 w-5" /> Sign up with Google
        </button>
        <button
          type="button"
          onClick={() => handleProviderSignup('github')}
          className="flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold py-2 rounded border border-gray-700 hover:bg-gray-800 transition"
        >
          <FaGithub className="h-5 w-5" /> Sign up with GitHub
        </button>
        <button
          type="button"
          onClick={() => handleProviderSignup('apple')}
          className="flex items-center justify-center gap-2 bg-black text-white font-semibold py-2 rounded border border-gray-700 hover:bg-gray-900 transition"
        >
          <FaApple className="h-5 w-5" /> Sign up with Apple
        </button>
        <div className="text-xs text-gray-400 text-center mt-2">
          Already have an account?{' '}
          <a href="/login" className="text-primary underline hover:text-primary/80">Login</a>
        </div>
      </form>
    </main>
  );
} 