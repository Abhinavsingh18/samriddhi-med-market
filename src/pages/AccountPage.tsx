import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Add sign-up logic here
      console.log('Sign Up:', email, password);
    } else {
      // Add sign-in logic here
      console.log('Sign In:', email, password);
    }
    // Navigate to home page after successful sign in or sign up
    navigate('/');
  };

  const handleGoogleSignIn = () => {
    // Add Google sign-in logic here
    console.log('Google Sign In');
  };

  return (
    <div className="account-container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default AccountPage; 