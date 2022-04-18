import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} alt="logo" />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas/">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar