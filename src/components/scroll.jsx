import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scroll = () => {
  return (
    <section className="bg-white">
      <TextParllaxContent
        imgUrl="https://images.unsplash.com/photo-1715783768839-73794cbce337?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for All of us"
      >
        {<ExampleContent />}
      </TextParllaxContent>
      <TextParllaxContent
        imgUrl="https://images.unsplash.com/photo-1716369415085-4a6876f91840?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Creative"
        heading="Amazing features"
      >
        <ExampleContent />
      </TextParllaxContent>
      <TextParllaxContent
        imgUrl="https://images.unsplash.com/photo-1715783768839-73794cbce337?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best"
      >
        <ExampleContent />
      </TextParllaxContent>
    </section>
  );
};

export default Scroll;

const img_padding = 12;

const TextParllaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: img_padding,
        paddingRight: img_padding,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [
      "end end",
      "end start",
    ] /* primeiro end é o end da imagem coincidir com end da view, o segundo end end da imagem coincidir com start da view*/,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${img_padding * 2}px)`,
        top: img_padding,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ heading, subheading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [
      "start end",
      "end start",
    ] /* primeiro end é o end da imagem coincidir com end da view, o segundo end end da imagem coincidir com start da view*/,
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text=center font-modelicaBold text-4xl md:text-7xl">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = () => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Additional content explaining here
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit,
          quod libero qui obcaecati doloribus ipsum nisi reprehenderit eveniet
          possimus sunt accusamus? Eius nobis voluptatem magnam labore, error
          quibusdam esse!
        </p>
        <p className="mb-text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit,
          quod libero qui obcaecati doloribus ipsum nisi reprehenderit eveniet
          possimus sunt accusamus? Eius nobis voluptatem magnam labore, error
          quibusdam esse!
        </p>
        <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors md:w-fit hover:bg-neutral-700">
          Learn more
        </button>
      </div>
    </div>
  );
};
