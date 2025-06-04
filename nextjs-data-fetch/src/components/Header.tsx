import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-gray-500">
      <h2>LOGO</h2>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>User</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header