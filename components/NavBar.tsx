import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="nav" id="nav" aria-label="Main navigation">
        <Link href="/" className="nav__logo" aria-label="I'M SO ATL — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.webp" alt="I'M SO ATL" />
        </Link>
        <ul className="nav__links" role="list">
          <li>
            <Link href="/festival">Festival</Link>
          </li>
          <li>
            <Link href="/stories">Stories</Link>
          </li>
          <li>
            <Link href="/participate">Participate</Link>
          </li>
          <li>
            <Link href="/partners">Partners</Link>
          </li>
          <li>
            <Link href="/press">Press</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <button
          className="nav__burger"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <nav className="nav__mobile" id="mobile-nav" aria-label="Mobile navigation">
        <Link href="/festival">Festival</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/participate">Participate</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/press">Press</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
}
