"use client";

import Image from "next/image";
import Link from "next/link";
import { DiscordLogo, XLogo } from "@phosphor-icons/react";
import AnimatedText from "@/components/effects/animated-text";
import { motion } from "motion/react";
import { Button } from "@/components/effects/button";
import { CanvasDotAnimation } from "@/components/effects/canvas-dot-background";

export default function ComingSoon() {
  return (
    <main className="flex font-clds px-[18px] relative min-h-screen flex-col items-center justify-center bg-black p-4 text-center">
      <CanvasDotAnimation />
      <div className="space-y-6">
        <motion.div
          initial={{ y: 50, scale: 2 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1.2,
            bounce: 0.3,
            delay: 2,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve for smoother motion
          }}
          className="flex items-center justify-center space-x-4"
        >
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              type: "spring",
              duration: 1.2,
              bounce: 0.2,
              ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve for smoother motion
            }}
          >
            <Image
              src="/mist.svg"
              alt="Mistverse Logo"
              width={50}
              height={50}
              className="h-12 w-12"
            />
          </motion.div>
          <h1 className="text-5xl  font-semibold tracking-[-0.03em] text-white">
            <AnimatedText text="Mistverse" />
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1.2,
            bounce: 0.3,
            delay: 2.1,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve for smoother motion
          }}
          className="text-2xl font-clds font-medium leading-[1.0] text-white"
        >
          BlockChain powered Marketplace for
          <br />
          AI models, agents and Digital art
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1.2,
            delay: 2.4,
            bounce: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="mt-8 flex items-center justify-center cursor-default text-center"
        >
          <Link
            href="https://discord.gg/bKWNHh8NBZ"
            // target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute inset-0  opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <DiscordLogo
              size={20}
              weight="light"
              className="relative z-10 transition-transform duration-300 group-hover:-rotate-12"
            />
          </Link>
          <Button className="text-white text-md flex items-center justify-center cursor-default py-1 px-3 flex-shrink-0 tracking-[-0.03em] font-medium">
            <span className="flex items-center justify-center gap-1">
              Coming Soon on
              <img src="/solana.svg" className="w-4 h-4" alt="solana icon" />
              solana
            </span>
          </Button>
          <Link
            href="https://x.com/Mistverseai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute inset-0  opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <XLogo
              size={20}
              weight="light"
              className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
