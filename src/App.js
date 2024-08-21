import "./index.css";

// importing images
import imageOne from "./imgs/annie-spratt-ahmZpaR4N4A-unsplash.jpg";
import imageTwo from "./imgs/comet-cat-2uQ0G0gKVQ8-unsplash.jpg";
import imageThree from "./imgs/daniel-sessler-0MjapO_5WP0-unsplash.jpg";
import imageFour from "./imgs/harry-borrett-cOt5ClYWNIQ-unsplash.jpg";
import imageFive from "./imgs/polina-kuzovkova-IuuqE8mGQiw-unsplash.jpg";

// importing relevant modules
import { ReactLenis, useLenis } from "lenis/react";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function App() {
  // adding refs to text using useRef hook
  let textOne = useRef();
  let textTwo = useRef();
  let textThree = useRef();
  let textFour = useRef();
  let textFive = useRef();

  // adding smooth scrolling to page using Lenis
  const lenis = useLenis(({ scroll }) => {});

  // adding scroll behaviour to text using useLayourEffect and GSAP
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=400px",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .from(textOne.current, { opacity: 0 })
      .to(textOne.current, { opacity: 1, transform: `translateY(150px)` });

    const timelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "650px",
        end: "+=400px",
        scrub: true,
        markers: true,
      },
    });

    timelineTwo.from(textTwo.current, { opacity: 0 }).to(textTwo.current, {
      opacity: 1,
      transform: `translateY(150px) translateX(-100px)`,
    });

    const timelineThree = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "900px",
        end: "+=400px",
        scrub: true,
        markers: true,
      },
    });

    timelineThree
      .from(textThree.current, { opacity: 0 })
      .to(textThree.current, {
        opacity: 1,
        transform: `translateY(150px) rotate(90deg)`,
      });

    const timelineFour = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "1800px",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });

    timelineFour
      .from(textFour.current, { opacity: 0, transform: `scale(1.5)` })
      .to(textFour.current, {
        opacity: 1,
        transform: `translateY(150px) scale(0)`,
      });

    const timelineFive = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2200px",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });

    timelineFive
      .from(textFive.current, { opacity: 0 })
      .to(textFive.current, { opacity: 1, transform: `translateY(150px)` });
  }, []);

  return (
    <ReactLenis root>
      <div className="App">
        <div className="mainContainer">
          <section className="sectionOne">
            <h1 ref={textOne}>ONE</h1>
            <img src={imageOne} alt="" />
          </section>
          <section className="sectionTwo">
            <h1 ref={textTwo}>TWO</h1>
            <img src={imageTwo} alt="" />
          </section>
          <section className="sectionThree">
            <h1 ref={textThree}>THREE</h1>
            <img src={imageThree} alt="" />
          </section>
          <section className="sectionFour">
            <h1 ref={textFour}>FOUR</h1>
            <img src={imageFour} alt="" />
          </section>
          <section className="sectionFive">
            <h1 ref={textFive}>FIVE</h1>
            <img src={imageFive} alt="" />
          </section>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
