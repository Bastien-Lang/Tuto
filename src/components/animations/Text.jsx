import { motion } from "framer-motion";

export default function Text() {
  return (
    <div className="py-20 flex justify-center">
        <motion.div 
            className="text-xl text-gray-800 max-w-[80%] md:max-w-[50%] leading-loose"
            //TODO : Ajoutez une animation d'entrée pour ce bloc de texte
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            viewport={{ once: true, amount: 0.3 }} // Déclenche quand 30% du texte est visible)
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magni vitae, facere odio reiciendis distinctio, fuga adipisci molestiae...
            </p>
        </motion.div>
    </div>
  );
}