import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Text() {
  const containerRef = useRef(null);

  // TODO (Partie 2) : Utiliser useScroll avec target: containerRef
  // TODO (Partie 2) : Créer un opacityTransform qui va de 0 à 1 selon le scroll

  return (
    <div ref={containerRef} className="py-20">
        <motion.div 
            className="text-xl text-gray-800 max-w-[80%] md:max-w-[40%] text-left"
            // TODO (Option simple) : Utiliser whileInView pour déclencher l'anim au scroll
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
        >
            <span >
                Lorem ipsum dolor sit amet... (votre texte)
            </span>
        </motion.div>
    </div>
  );
}