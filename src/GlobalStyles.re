module Global = {
  open Css;

  global(
    "body",
    [
      flex(1),
      display(`flex),
      fontFamily(
        "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
      ),
      fontWeight(300),
    ],
  );
};
