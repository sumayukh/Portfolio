export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

// export const floatOnTouch = () => {
//   return {
//     hidden: {
//       opacity: 0,
//     },
//     show: {
//       opacity: 1,
//       initial: { translateY: 0, lineHeight: "30px" },
//       animate: {
//         translateY: [-20, 0],
//         lineHeight: ["30px", "10px", "30px"],
//       },
//       transition: {
//         duration: 5,
//         type: "spring",
//         ease: "easeInOut",
//         repeat: "Infinity",
//         direction: "alternate",
//       },
//     },
//   };
// };

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration, opacityEnabled) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
      opacity: opacityEnabled ? 0 : 1,
    },
    show: {
      x: 0,
      y: 0,
      opacity: opacityEnabled ? 1 : 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
    exit: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
      opacity: opacityEnabled ? 0 : 1,
      transition: {
        type: type,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
