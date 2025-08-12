tailwind = typeof tailwind !== 'undefined' ? tailwind : {};
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hero:
          "radial-gradient(70% 80% at 10% 10%, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0) 60%), radial-gradient(60% 60% at 90% 10%, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0) 60%)",
      },
    },
  },
};
