

import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as App$ReasonReactExample from "./App.bs.js";
import * as GlobalStyles$ReasonReactExample from "./GlobalStyles.bs.js";

((require('normalize.css')));

var data = Belt_List.makeBy(20, (function (i) {
        var j = i + 1 | 0;
        return "result-" + (String(j) + "");
      }));

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, App$ReasonReactExample.make(data, [])), "root");

var Global = GlobalStyles$ReasonReactExample.Global;

export {
  Global ,
  data ,
  
}
/*  Not a pure module */
