import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function AuthPrompt({ method }) {
  return (
    <div>
      {method === 'login' ? (
        <p className="mt-10 text-center text-sm text-gray-500">
          Do not have an account?{' '}
          <Link to="/register" className="font-semibold leading-6 text-[#2CCA50] hover:text-[#5bce76]">
            Sign up
          </Link>
        </p>
      ) : (
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold leading-6 text-[#2CCA50] hover:text-[#5bce76]">
            Login
          </Link>
        </p>
      )}
    </div>
  );
}

export default AuthPrompt;