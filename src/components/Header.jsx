import { motion, useScroll, useSpring } from "framer-motion";

export default function Header() {
  //TODO : Ajoutez une barre de progression en haut du header qui indique la progression du scroll de la page (creez une variable scaleX qui utilise useScroll et useSpring pour animer la barre de progression)

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-800 text-white flex flex-col p-4 shadow-lg">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">MMI Framer</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="https://motion.dev/docs/react" target="_blank" className="hover:text-blue-400 transition-colors">Documentation</a></li>
          </ul>
        </nav>
      </div>

      {/* Barre de progression */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}