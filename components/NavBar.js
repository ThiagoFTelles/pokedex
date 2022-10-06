import Link from 'next/link';

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  );
}
