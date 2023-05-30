export const styles = {
  outerContainer: { display: "flex", justifyContent: "center", alignItems: "center" },
  imageBox: {
    width: { xs: "90vw", md: "50vw", lg: "66vw" },
    height: { xs: `${100 / 1.77}vw`, md: `${50 / 1.77}vw`, lg: `${66 / 1.77}vw` }, //1.77 means aspect ratio will be 16:9
    position: "relative",
  },
};
