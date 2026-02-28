import { motion } from "framer-motion";

export default function Hero({ nom }) {
  return (
    <section className="bg-gray-200 w-full min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1 
        className="text-5xl font-extrabold text-gray-800 mb-6"
        //TODO : Ajoutez une animation d'entrée pour ce titre (exemple : viens du bas vers le haut avec une légère opacité)
      >
        Bienvenue sur notre tuto Framer Motion <span className="text-blue-600">{nom}</span> !
      </motion.h1>


      {/* Bonus : Un bouton "CTA" qui respire */}
      <motion.button
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
        //TODO : Ajoutez une animation de "respiration" à ce bouton (exemple : scale légèrement de 1 à 1.05 en boucle infinie)
      >
        Mon super bouton
      </motion.button>
    </section>
  );
}