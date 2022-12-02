import useDeviceSize from "../useDeviceSize";

export function DiningAnimationStyles() {
  const [width] = useDeviceSize();
  console.log(width);

  if (width <= 768 && width > 426) {
    return {
      hidden: {
        x: 20,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        x: -20,
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
        x: 40,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        x: -40,
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
        y: 50,
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        y: -50,
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      },
    };
  }
}
