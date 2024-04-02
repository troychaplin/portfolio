export const maxWidthProp = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  max: "max-w-screen-2xl",
  full: "max-w-full",
};

export const gridColsProp = {
  "1": "",
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-3",
  "4": "md:grid-cols-2 lg:grid-cols-4",
  "1/3": "lg:grid-cols-3 lg:[&>*:last-child]:col-span-2",
  "2/3": "lg:grid-cols-3 lg:[&>*:first-child]:col-span-2",
};

export const gridSpaceProp = {
  "0": "gap-0",
  "5": "gap-2.5 md:gap-5",
  "10": "gap-5 md:gap-10",
};
