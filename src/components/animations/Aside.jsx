import { motion } from "framer-motion";

export default function Aside({ children, startOrEnd = "start" }) {
  const side = startOrEnd === "start" ? "left" : "right";
  const xInitial = startOrEnd === "start" ? -100 : 100;

  return (
    <motion.aside 
      className={`bg-gray-200 p-8 h-80 w-1/3 rounded-lg flex flex-col text-${side} justify-center shadow-md cursor-pointer`}
      // TODO (Partie 1) : Animation d'entrée slide + fade
      // TODO (Partie 1) : Au hover, la carte doit se soulever (y: -10) et changer d'ombre
      // whileHover={{ ... }}
    >
      <h2 className="text-2xl font-bold mb-4">Focus Component</h2>
      <p className="text-gray-700">{children}</p>
    </motion.aside>
  );
}