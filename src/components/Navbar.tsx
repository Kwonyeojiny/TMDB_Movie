import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MOVIE
        </Link>
        <div className="flex space-x-4">
          <Link to="/signup">회원가입</Link>
          <Link to="/signin">로그인</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
