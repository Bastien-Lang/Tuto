import { motion } from "framer-motion";

export default function Aside({ children, startOrEnd = "start" }) {
  const side = startOrEnd === "start" ? "left" : "right";
  
  return (
    <motion.aside 
      className={`bg-white p-8 h-auto w-[40%] rounded-xl flex flex-col text-${side} justify-center shadow-md border border-gray-100 cursor-pointer`}
      // TODO : Animation d'entrée quand l'élément devient visible (bonus : utilisez startOrEnd pour faire venir l'aside de la gauche ou de la droite)
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Focus Concept</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </motion.aside>
  );
}