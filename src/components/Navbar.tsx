import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <img src="/logo,png" alt="Logo" className="h-8 w-auto" />
        </Link>
        <Link
          href="/login"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
