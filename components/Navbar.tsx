import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-4">
      <Image
          src="/icons/logo4.svg"
          width={80}
          height={80}
          alt="Conference logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-serif font-extrabold text-white max-sm:hidden">
          Conference
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>

    </nav>
  )
}

export default Navbar;

