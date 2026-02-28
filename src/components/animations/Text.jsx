import { motion } from "framer-motion";

export default function Text() {
  return (
    <div className="py-20 flex justify-center">
        <motion.div 
            className="text-xl text-gray-800 max-w-[80%] md:max-w-[50%] leading-loose"
            //TODO : Ajoutez une animation d'entrée pour ce bloc de texte
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magni vitae, facere odio reiciendis distinctio, fuga adipisci molestiae...
            </p>
        </motion.div>
    </div>
  );
}