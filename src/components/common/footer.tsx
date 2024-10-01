import Link from 'next/link';

// footer component
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-8 px-4 pb-4 text-center text-xs text-gray-400">
      ©{year} Built by
      <Link
        className="ml-1 text-blue-500"
        target="_blank"
        href="https://pulkits.me"
      >
        Pulkit Gupta
      </Link>
      . The source code is available on
      <Link className="ml-1 text-blue-500" href="">
        GitHub
      </Link>
      .
    </footer>
  );
};

export default Footer;
