import { motion } from "framer-motion";
import { config } from "@/lib/config";

interface EndingProps {
  onRestart: () => void;
}

export default function Ending({ onRestart }: EndingProps) {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Background com partículas */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/1AyaFGrHqZxqfFh9hz1Hwl/sandbox/okcMBCM5oIfmKVvh5k7e8u-img-1_1772022327000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMUF5YUZHckhxWnhxZkZoOWh6MUh3bC9zYW5kYm94L29rY01CQ001b0lmbUtWdmg1azdlOHUtaW1nLTFfMTc3MjAyMjMyNzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZIXhpIOq1ep0-btcjCcHsOjvyCV~FLgqDk7WjS7FhJcApjHhCvQ8qg9i~7-YM3UwPMPtkh3TvE~APeJkOD-oAmV1FNq-ld1IHXHVcPtBprIq1DuHR3D6Hoy1U7tzqmpcZK7zrmwGeC3IKtnP9YZhKTJw7EyYpS6DGB9vHbavh0zF7uWVEr6mTRi8zUwQARrOXer4uOeB-~dI54fiknkjPbYyOK-GtkxJCUVWw8oCbwfSq-45ngf4BZLakPwE7PwaIt~v2Zly64djqfqeggCVgS7wgxGDbKe~xOMXrHS9XNF1d1rKJo8T-xMcNrIR~5uDXL7wOxx6D10rmwxK45sfwQ__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Obrigado
          </h1>
        </motion.div>

        {/* Mensagem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8 md:mb-12 max-w-2xl"
        >
          <p className="font-body text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
            Que este dia especial seja apenas o começo de muitos momentos
            incríveis em sua vida. Você merece toda a felicidade do mundo.
          </p>
        </motion.div>

        {/* Mensagem personalizada */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8 md:mb-12 max-w-md"
        >
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
            Com amor,
          </p>
          <p className="font-body text-foreground/60 text-sm sm:text-base md:text-lg mt-2">
            Seu pai
          </p>
        </motion.div>

        {/* Botão de reinício */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold text-sm sm:text-base transition-all hover:bg-primary/90"
          >
            Ver Novamente
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
