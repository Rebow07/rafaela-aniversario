import { useState } from "react";
import { motion } from "framer-motion";

interface LandingProps {
  onEnter: () => void;
}

export default function Landing({ onEnter }: LandingProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  const heartButtonStyle = {
    backgroundImage:
      "url('https://private-us-east-1.manuscdn.com/sessionFile/1AyaFGrHqZxqfFh9hz1Hwl/sandbox/okcMBCM5oIfmKVvh5k7e8u-img-2_1772022321000_na1fn_bGFuZGluZy1idXR0b24tZ2xvdw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMUF5YUZHckhxWnhxZkZoOWh6MUh3bC9zYW5kYm94L29rY01CQ001b0lmbUtWdmg1azdlOHUtaW1nLTJfMTc3MjAyMjMyMTAwMF9uYTFmbl9iR0Z1WkdsdVp5MWlkWFIwYjI0dFoyeHZkdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AjvI4pZikD955ZUAvbBEgRj~sMM8xrVLIGZCIdFUjxjgJEp9cn2mVfsnTgBpTDGAlPm1ue779xIwOoIo9x6Y6LnhRhK96yrjJaPXWLmtI8nl2sJjbP4HekOvmOTCUKbMX3qLZ~3Eiu8OEDkvyKiD5Hpw0yUKSuibFcvID5xPozK6nZoL6FqtPO6hjA3YpS415pj8QQMJFsZ5Yq-hvknhw7rqPv3-5f~uQ8knk-MwVxH609tAIFOOwFJE1t2FTUxBmhH6pFyswPL5ebDhGbKqmGlsGwRIrSxG~sFwWedSGHGchFQrVszS8~8blhraajlFvjskZ1wLGHUWBi9~h1LFrg__')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/1AyaFGrHqZxqfFh9hz1Hwl/sandbox/okcMBCM5oIfmKVvh5k7e8u-img-1_1772022327000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMUF5YUZHckhxWnhxZkZoOWh6MUh3bC9zYW5kYm94L29rY01CQ001b0lmbUtWdmg1azdlOHUtaW1nLTFfMTc3MjAyMjMyNzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZIXhpIOq1ep0-btcjCcHsOjvyCV~FLgqDk7WjS7FhJcApjHhCvQ8qg9i~7-YM3UwPMPtkh3TvE~APeJkOD-oAmV1FNq-ld1IHXHVcPtBprIq1DuHR3D6Hoy1U7tzqmpcZK7zrmwGeC3IKtnP9YZhKTJw7EyYpS6DGB9vHbavh0zF7uWVEr6mTRi8zUwQARrOXer4uOeB-~dI54fiknkjPbYyOK-GtkxJCUVWw8oCbwfSq-45ngf4BZLakPwE7PwaIt~v2Zly64djqfqeggCVgS7wgxGDbKe~xOMXrHS9XNF1d1rKJo8T-xMcNrIR~5uDXL7wOxx6D10rmwxK45sfwQ__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Feliz 15 Anos, Rafaela
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12 max-w-md px-4"
        >
          <p className="font-body text-foreground/70 text-sm sm:text-base md:text-lg">
            Um presente cinematográfico para você no seu dia especial
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={handleClick}
            disabled={isClicked}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={heartButtonStyle}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full transition-all duration-300 animate-glow-pulse ${
              isClicked ? "opacity-50" : "cursor-pointer"
            }`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <p className="font-body text-foreground/60 text-xs sm:text-sm md:text-base text-center">
            Clique no coração para começar
          </p>
        </motion.div>

        {/* Logo KL */}
        <a
          href="https://www.linkedin.com/in/kelvin-loureiro-6a0714149"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 logo-kl"
          title="Criado por Kelvin Loureiro"
        >
          <span className="logo-kl-text">KL</span>
        </a>
      </div>
    </div>
  );
}
