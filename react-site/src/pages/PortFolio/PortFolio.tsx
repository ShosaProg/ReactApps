import * as React from "react";
import { AnimationTrigger } from "../../components/Triggers/AnimatinoTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "../../../logo.svg";
import styles from "./PortFolio.module.scss";
import global from "../../../assets/global.module.scss";
import { Contact } from "../../features/Contact/components/Contact";
import { Skills } from "../../features/Skills/components/Skills";
import {
  ActivePageState,
  pages,
  useActivePageStore,
} from "../../stores/ActivePageStore";
import clsx from "clsx";
import { About } from "../../features/About/components/About";
import { Works } from "../../features/Works/components/Works";
import { Header } from "./Header";
import { Home } from "../../features/Home/components/Home";

export const PortFolio = React.forwardRef<HTMLElement>((_, ref) => {
  const pagesWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const pagesRef = React.useRef<HTMLDivElement | null>(null);
  const didEffect = React.useRef(false);
  const scrollRefs = React.useRef<
    React.RefObject<HTMLElement | HTMLDivElement>[]
  >([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLElement>(),
    React.createRef<HTMLElement>(),
    React.createRef<HTMLElement>(),
    React.createRef<HTMLElement>(),
  ]);

  gsap.registerPlugin(ScrollTrigger);
  const setupGsap = (
    pagesElement: HTMLDivElement,
    pagesWrapperElement: HTMLDivElement
  ) => {
    gsap.to(pagesElement, {
      x: () => -(pagesElement.clientWidth - pagesWrapperElement.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#horizontal-scroll-section",
        start: "top top",
        end: () =>
          `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  React.useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const pagesElement = pagesRef?.current;
    if (!pagesElement) return;

    const pagesWrapperElement = pagesWrapperRef?.current;
    if (!pagesWrapperElement) return;

    setupGsap(pagesElement, pagesWrapperElement);
  }, []);

  //TODO HomeのComponentを分離し、useInviewを使用する

  return (
    <>
      <div
        className="container"
        ref={scrollRefs?.current[0] as React.RefObject<HTMLDivElement>}
      >
        <Header scrollRefs={scrollRefs} />
        <div className={styles.body}>
          <main className={styles.main}>
            <AnimationTrigger animation="fadeIn" rootMargin="0px" triggerOnce>
              <Home
                ref={scrollRefs.current[0]}
              />
            </AnimationTrigger>
            <AnimationTrigger animation="fadeIn" rootMargin="0px" triggerOnce>
              <About
                ref={scrollRefs.current[1]}
              />
            </AnimationTrigger>
            <AnimationTrigger animation="fadeIn" rootMargin="0px" triggerOnce>
              <Skills
                ref={scrollRefs.current[2]}
              />
            </AnimationTrigger>
            <AnimationTrigger animation="fadeIn" rootMargin="0px" triggerOnce>
              <Works
                ref={scrollRefs.current[3]}
              />
            </AnimationTrigger>
            <AnimationTrigger animation="fadeIn" rootMargin="0px" triggerOnce>
              <Contact
                ref={scrollRefs.current[4]}
              />
            </AnimationTrigger>
          </main>
        </div>
      </div>
    </>
  );
});
