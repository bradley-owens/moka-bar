import useDeviceSize from "../useDeviceSize";

export function CateringAnimationStyles() {
  const [width] = useDeviceSize();

  if (width <= 768 && width > 426) {
    return {
      hidden: {
        x: -25,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        x: 25,
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      },
    };
  } else if (width > 426) {
    return {
      hidden: {
        x: -30,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        x: 30,
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      },
    };
  } else {
    return {
      hidden: {
        y: 40,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        y: -40,
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      },
    };
  }
}
