"use client";
import { Fade } from "react-awesome-reveal";

const TestPage = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <div className=" w-full h-screen"></div>
      <Fade duration={3000}>
        <p className=" text-3xl text-white">
          This content will fade in when scrolled into view
        </p>
      </Fade>

      {/* Multiple elements will animate together */}
      <Fade
        cascade
        delay={200} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        triggerOnce // Only animate once
        fraction={0.5} // Start animation when element is 50% visible
      >
        <p>Features</p>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </Fade>
    </div>
  );
};

export default TestPage;
