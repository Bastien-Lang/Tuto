export default function Header() {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">MMI</h1>
      <nav>
        <ul className="flex space-x-16">
          <li><a href="#" className="hover:underline text-white">Les</a></li>
          <li><a href="#" className="hover:underline text-white">MMI</a></li>
          <li><a href="#" className="hover:underline text-white">Sympas</a></li>
        </ul>
      </nav>
    </header>
  )
}