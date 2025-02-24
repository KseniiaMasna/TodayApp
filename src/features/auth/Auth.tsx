import { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <p>
        {isLogin ? 'Need an account? ' : 'Already have an account? '}
        <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
          {isLogin ? 'Register here' : 'Login'}
        </span>
      </p>
    </div>
  );
};

export default Auth;
