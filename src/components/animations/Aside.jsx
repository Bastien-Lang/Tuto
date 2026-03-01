import { motion } from "framer-motion";

export default function Aside({ children, startOrEnd = "start" }) {
  const side = startOrEnd === "start" ? "left" : "right";
  
  return (
    <motion.aside 
        className={`bg-white p-8 h-auto w-[40%] rounded-xl flex flex-col text-${side} justify-center shadow-md border border-gray-100 cursor-pointer`}
        // TODO : Animation d'entrée quand l'élément devient visible (bonus : utilisez startOrEnd pour faire venir l'aside de la gauche ou de la droite)
        initial={{ opacity: 0, x: startOrEnd === "start" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        whileHover={{ 
            y: -10, 
            boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            borderColor: "#3b82f6" 
        }}
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Focus Concept</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </motion.aside>
  );
}