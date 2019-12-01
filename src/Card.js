import React from "react";
import { motion, useCycle } from "framer-motion";

export default function Card({ title, image, onToggleFocus }) {
  const [animate, cycleCard] = useCycle(
    {
      card: {
        padding: 16
      },
      image: {
        width: "100%"
      }
    },
    {
      card: {
        padding: 0
      },
      image: {
        width: "125%"
      }
    }
  );

  return (
    <motion.div
      className="card-wrapper"
      onTap={() => {
        cycleCard();
        onToggleFocus();
      }}
      animate={animate.card}
      transition={{
        ease: "anticipate"
      }}
    >
      <div className="card">
        <figure className="card-image-container">
          <div className="card-image-wrapper">
            <motion.img
              className="card-image"
              src={image}
              alt=""
              animate={animate.image}
              transition={{ ease: "easeIn" }}
            />
          </div>
          <figcaption>
            Photo by <b>{title}</b> on Unsplash
          </figcaption>
        </figure>
      </div>
    </motion.div>
  );
}
