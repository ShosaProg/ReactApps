import { useInView } from "react-intersection-observer";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  animation: string;
  startClass?: string;
  endClass?: string;
  /** if viewport observe this margin, animation is moving  */
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const AnimationTrigger = ({
  rootMargin = "100px",
  startClass = "",
  endClass = "",
  triggerOnce = false,
  ...props
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce,
  });

  return (
    <div ref={ref} className={props.className} style={props.style}>
      <div className={inView ? props.animation : startClass}>
        {props.children}
        </div>
    </div>
  );
};
