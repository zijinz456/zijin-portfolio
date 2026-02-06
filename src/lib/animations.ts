export const fadeInUp = {
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
};

export const fadeInUpView = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "100px 0px" } as const,
  transition: { duration: 0.6 } as const,
};

