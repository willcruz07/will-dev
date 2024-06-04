'use client'

import Image from "next/image";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center"> 
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 1 }}
        className="relative h-48 w-64 sm:h-72 sm:w-96"
      >
        <Image
          src="/Logo-2.png"
          alt="Next.js Logo"
          priority
          fill
          objectFit="cover"
        />  
      </motion.div>

      <motion.span 
        initial={{opacity: 0}}
        animate={{opacity: 1}} 
        transition={{duration: 1.8, delay: .5}}
        className="max-w-6xl text-center text-md text-neutral-400 antialiased tracking-wide leading-7 font-sans p-4 mt-4"
      >
        {`"A Will Dev é uma equipe de especialistas apaixonados por tecnologia e inovação, dedicados a transformar ideias em realidade digital. Nossa empresa oferece serviços de desenvolvimento de software personalizado, adaptados às necessidades exclusivas de cada cliente. Com uma abordagem centrada no cliente e uma vasta experiência em diversas plataformas e tecnologias, ajudamos empresas de todos os tamanhos a criar soluções de software robustas, intuitivas e escaláveis. Desde o conceito inicial até a implementação e manutenção contínua, estamos comprometidos em fornecer soluções de software de alta qualidade que impulsionam o sucesso de nossos clientes no mercado digital."`}
      </motion.span>  
    
      <motion.button 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.5, delay: 1}}
        className="bg-blue-950 hover:bg-blue-900 hover:shadow-lg transition-all duration-150 ease-out mt-10 text-neutral-200 py-4 px-16 rounded-full shadow-lg font-sans font-normal text-md"
      >
        Contato
      </motion.button>
    </main>
  );
}
