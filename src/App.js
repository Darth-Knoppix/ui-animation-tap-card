import React from "react";
import Workspace from "@darth-knoppix/react-phone-show";
import { motion, useCycle } from "framer-motion";

import sereja from "./images/sereja-ris-zGyG2OyLu4k-unsplash.jpg";
import husen from "./images/husen-siraaj-zyJkh98ySE0-unsplash.jpg";
import houston from "./images/houston-ray-bkZlpn5iMEM-unsplash.jpg";
import dimitar from "./images/dimitar-donovski-RyvVnWaWbjI-unsplash.jpg";

import Info from "./Info";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [animate, toggleFocus] = useCycle(
    {
      container: { height: "25rem", top: "0rem", overflowX: "auto" },
      title: { opacity: 1 }
    },
    {
      container: { height: "100%", top: "-4.4rem", overflowX: "hidden" },
      title: { opacity: 0 }
    }
  );

  return (
    <Workspace title={<Header />} info={<Info />}>
      <motion.h1
        className="title"
        animate={animate.title}
        transition={{ ease: "easeInOut", duration: 0.2 }}
      >
        Showcase
      </motion.h1>
      <motion.div
        className="card-container"
        animate={animate.container}
        initial={{ top: "0rem" }}
        transition={{ ease: "easeOut", delay: 0.1 }}
      >
        <Card title="Sereja Ris" image={sereja} onToggleFocus={toggleFocus} />
        <Card title="Husen Siraaj" image={husen} onToggleFocus={toggleFocus} />
        <Card title="Houston Ray" image={houston} onToggleFocus={toggleFocus} />
        <Card
          title="Dimitar Donovski"
          image={dimitar}
          onToggleFocus={toggleFocus}
        />
      </motion.div>
    </Workspace>
  );
}

export default App;
