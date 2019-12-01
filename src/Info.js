import React from "react";

export default function Info() {
  return (
    <div className="work-about">
      <h2>
        How to achieve with animated state transitions with the{" "}
        <code>useCycle</code> hook
      </h2>
      <p>
        Tap the card to expand. Multiple animations play to transition between
        the expanded and collapsed states. Scroll horizontally to move between
        cards
      </p>
      <br />
      <h3 className="author">
        <span>Created by</span>{" "}
        <b>
          <a href="https://twitter.com/Darth_Knoppix" className="link">
            Seth Corker
          </a>
        </b>
      </h3>
      <p>
        See my blog to learn more{" "}
        <a href="https://blog.sethcorker.com/" className="link">
          tips and tricks for Framer Motion and React
        </a>
      </p>
    </div>
  );
}
