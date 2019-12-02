import React from "react";
import { motion, useCycle } from "framer-motion";

export default function Card({ title, image, onToggleFocus }) {
  const [animate, cycleCard] = useCycle(
    {
      card: { padding: "1rem" },
      image: {
        width: "100%",
        marginLeft: "0rem",
        marginRight: "0rem",
        marginTop: "0rem"
      }
    },
    {
      card: { padding: "0rem" },
      image: {
        width: "125%",
        marginLeft: "-3rem",
        marginRight: "-3rem",
        marginTop: "-1rem"
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
      initial={{ padding: "1rem" }}
      transition={{ ease: "easeOut", delay: 0.1 }}
    >
      <div className="card">
        <figure className="card-image-container">
          <div className="card-image-wrapper">
            <motion.img
              className="card-image"
              src={image}
              alt=""
              animate={animate.image}
              initial={{
                marginLeft: "0rem",
                marginRight: "0rem",
                marginTop: "0rem"
              }}
              transition={{ ease: "easeOut" }}
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
