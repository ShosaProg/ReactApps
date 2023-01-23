import * as React from "react";
import clsx from "clsx";
import styles from "./ImageBox.module.scss";

type ImageBoxProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  text?: string;
  variant: keyof typeof variants;
};

const variants = {
  default: "",
  fadeIn: styles.fadeIn,
};

export const ImageBox = React.forwardRef<HTMLImageElement, ImageBoxProps>(
  ({ text, variant = "default", alt = "", ...props }, ref) => {
    return (
      <div className={clsx(variants[variant])}>
        <div className={styles.image}>
          <img alt={alt} {...props} />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    );
  }
);
