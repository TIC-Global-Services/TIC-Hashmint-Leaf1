import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import HashmintLogo from '@/public/Hashmint_Logomark_Black_png.png';

const Footer = () => {
  const navContents = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'FAQ', link: '/faq' },
  ];

  const socialLogos = [
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-6 w-6 hover:text-gray-400 transition-colors" />,
      url: '#',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="h-6 w-6 hover:text-gray-400 transition-colors" />,
      url: '#',
    },
  ];

  return (
    <footer className="relative bg-black text-white">
      {/* Top Section */}
      <div className="relative w-full">
        <div className="relative">
          <Image
            src="https://ik.imagekit.io/99y1fc9mh/HashMint/prefooter-product.avif?updatedAt=1746729436147"
            alt="Product Image"
            width={1440}
            height={600}
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
            priority
          />
          {/* Top gradient (#18190f to transparent) */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#18190f] to-transparent" />
          {/* Bottom gradient (transparent to black) */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="absolute top-4 sm:top-8 md:top-0 left-10 sm:left-8 md:left-12 lg:left-36 flex flex-col justify-center space-y-[35%] items-center">
          <h1 className="text-7xl sm:text-4xl md:text-5xl lg:text-[120px] text-center font-bold text-yellow-400">
            Hashmint
          </h1>
          <div className="mt-4 sm:mt-6 md:mt-8 items-start justify-center w-full">
            <Link href={'https://hashmint-frontend.onrender.com/'} target='_blank' className="px-25 sm:px-59  py-4 sm:py-3 bg-yellow-400 text-black rounded-xl text-sm sm:text-base font-semibold hover:bg-yellow-500 transition-colors w-full">
              Pre-Order
            </Link>
            <p className="text-sm sm:text-base font-semibold mt-8 md:pl-40 pl-6 text-center">
              Estimated Ship Date: <span className="font-normal">August 2025</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex w-full justify-between gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col items-start md:items-start justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={HashmintLogo}
                alt="Hashmint Logo"
                width={60}
                height={60}
                className="rounded-xl bg-white"
              />
              <span className="text-2xl sm:text-3xl font-bold">HashMint</span>
            </Link>

          </div>

          {/* Right Column */}
          <div className="space-y-18 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Navigation */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {navContents.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        className="text-sm hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who We Are */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Who We Are
                </h3>
                <p className="text-sm">
                  A more Caring Computer Company
                </p>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  Socials
                </h3>
                <div className="flex space-x-4">
                  {socialLogos.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      aria-label={social.name}
                      className="text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm sm:text-sm text-left md:text-left md:mt-0 mt-7">
          © {new Date().getFullYear()} • Hashmint Co. • Designed & developed by <Link href={'https://www.theinternetcompany.one/'} className='underline'>TIC Global</Link>
          <br />
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          {' • '}
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;