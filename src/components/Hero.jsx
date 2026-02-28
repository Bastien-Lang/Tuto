import { motion } from "framer-motion";

export default function Hero({ nom }) {
  return (
    <section className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* TODO (Partie 1) : Faire apparaître le titre du bas vers le haut avec un fade-in */}
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-4"
        // initial={{ ... }}
        // animate={{ ... }}
      >
        Bienvenue sur notre tuto Framer Motion {nom} !
      </motion.h1>
      
      {/* BONUS : Ajouter un bouton qui pulse légèrement (scale) à l'infini */}
    </section>
  );
}