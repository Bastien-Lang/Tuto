import { motion, useScroll, useSpring } from "framer-motion";

export default function Header() {
  // TODO (Partie 2) : Récupérer le scroll progress
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-800 text-white flex flex-col p-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">MMI Framer</h1>
        <nav>
          <ul className="flex space-x-16">
            <li><a href="#" className="hover:underline">Tuto</a></li>
            <li><a href="#" className="hover:underline">Docs</a></li>
          </ul>
        </nav>
      </div>

      {/* TODO (Partie 2) : Créer la barre de progression ici */}
      {/* <motion.div className="h-1 bg-blue-500 origin-left mt-2" style={{ scaleX }} /> */}
    </header>
  );
}