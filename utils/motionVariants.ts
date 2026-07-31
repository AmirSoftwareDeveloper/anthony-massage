export default {
  slideLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
  slideUp: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeUp: (distance = 20) => ({
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: distance },
  }),
  fadeDown: (distance = 20) => ({
    initial: { opacity: 0, y: -distance },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -distance },
  }),
  fadeLeft: (distance = 20) => ({
    initial: { opacity: 0, x: distance },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: distance },
  }),
  fadeRight: (distance = 20) => ({
    initial: { opacity: 0, x: -distance },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -distance },
  }),
  zoom: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0 },
  },
};


