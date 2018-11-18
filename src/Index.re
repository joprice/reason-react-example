[%bs.raw {| require('normalize.css') |}];

include GlobalStyles;

let data =
  Belt.List.makeBy(
    20,
    i => {
      let j = i + 1;
      {j|result-$j|j};
    },
  );

ReactDOMRe.renderToElementWithId(<App data />, "root");
