import React from "react";
import { useInView } from "react-intersection-observer";
import global from "../../../assets/global.module.scss";
import {
  ActivePageState,
  pages,
  useActivePageStore,
} from "../../../stores/ActivePageStore";

type Props = {
  rootMargin?: string;
  startClass?: string;
  endClass?: string;
  triggerOnce?: boolean;
};

export const Home = React.forwardRef<HTMLElement, Props>(
  (
    {
      rootMargin = "100px",
      startClass = "",
      endClass = "",
      triggerOnce = false,
      ...props
    }: Props,
    scrollRef
  ) => {
    const inViewRef = React.useRef(false);
    const { ref, inView } = useInView({
      threshold: 0.5,
      rootMargin,
      triggerOnce,
    });
    const setActivePage = useActivePageStore(
      (state: ActivePageState) => state.setActivePage
    );

    React.useEffect(() => {
      if (!inView || inViewRef.current === true) {
        inViewRef.current = false;
        return;
      }

      if (inView) {
        inViewRef.current = true;
        setActivePage(pages.home);
      }
    }, [inView, setActivePage]);

    return (
      <section className={global.section} ref={scrollRef}>
        <div className={global.sectionHeader}>
          <h3 className={global.sectionTitle}>Home</h3>
        </div>
        <div className={global.sectionBody} ref={ref}>aiueo</div>
      </section>
    );
  }
);
