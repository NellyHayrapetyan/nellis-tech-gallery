import React, {ReactElement, useEffect, useRef} from "react";
import classes from "./ScrollLineUp.module.scss";

interface ScrollLineUpProps {
  children: ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const ScrollLineUp: React.FC<ScrollLineUpProps> = ({ children }) => {
  const elementRef = useRef<HTMLElement | null>( null);

  useEffect(() => {
    const targetElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targetElement?.classList.add(classes.LineUpElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const ChildComponent = React.forwardRef<any, React.PropsWithChildren<any>>((props, ref) =>
    React.cloneElement(children, { ...props, ref })
  );

  ChildComponent.displayName = "ScrollLineUpChild";

  return <ChildComponent ref={elementRef} />;
};

export default ScrollLineUp;
