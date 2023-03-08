import Link from "next/link";

export default function ({ children }) {
  return (
    <div>
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <h3>
            <Link href="/">Home</Link>
          </h3>
        </div>
        <div className="collapsible">
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{children}</div>
      <style jsx>{`
        .paper {
          margin-top: 90px;
        }
      `}</style>
    </div>
  );
}
