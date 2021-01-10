import Link from 'next/link';
import Image from 'next/image';

export default function Header(): JSX.Element {
  return (
    <header className="z-10 border-b border-gray-200 bg-white sticky top-0">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <Link href="/">
            <a className="flex items-center">
              <Image src="/images/spring.png" alt="logo" width="32" height="32" />
              <span className="ml-4">m0nch1</span>
            </a>
          </Link>
        </div>

        <div className="flex text-sm">
          <Link href="/blog">
            <a className="font-medium text-gray-500 hover:text-gray-900">Blog</a>
          </Link>
          <Link href="/about">
            <a className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12">About</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
