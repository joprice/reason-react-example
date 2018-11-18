

import * as Css from "bs-css/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as ReactDOMRe from "reason-react/src/ReactDOMRe.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Util$ReasonReactExample from "./Util.bs.js";

var components = ReasonReact.statelessComponent("Search-ReasonReactExample");

var wrapper = Css.style(/* :: */[
      Css.margin(Css.px(10)),
      /* :: */[
        Css.padding(Css.px(10)),
        /* :: */[
          Css.border(Css.px(1), /* solid */12956715, Css.lightgray),
          /* :: */[
            Css.flex(1),
            /* [] */0
          ]
        ]
      ]
    ]);

var input = Css.style(/* :: */[
      Css.flex(1),
      /* :: */[
        Css.padding2(Css.px(10), Css.px(5)),
        /* [] */0
      ]
    ]);

var results = Css.style(/* :: */[
      Css.height(Css.px(200)),
      /* :: */[
        Css.overflowY(/* auto */-1065951377),
        /* [] */0
      ]
    ]);

var result = Css.style(/* :: */[
      Css.padding(Css.px(5)),
      /* [] */0
    ]);

var Styles = /* module */[
  /* wrapper */wrapper,
  /* input */input,
  /* results */results,
  /* result */result
];

function make(state, search, _children) {
  return /* record */[
          /* debugName */components[/* debugName */0],
          /* reactClassInternal */components[/* reactClassInternal */1],
          /* handedOffState */components[/* handedOffState */2],
          /* willReceiveProps */components[/* willReceiveProps */3],
          /* didMount */components[/* didMount */4],
          /* didUpdate */components[/* didUpdate */5],
          /* willUnmount */components[/* willUnmount */6],
          /* willUpdate */components[/* willUpdate */7],
          /* shouldUpdate */components[/* shouldUpdate */8],
          /* render */(function (self) {
              var onChange = Curry._1(self[/* handle */0], (function ($$event, param) {
                      return Curry._1(search, Util$ReasonReactExample.formValue($$event));
                    }));
              return React.createElement("div", {
                          className: wrapper
                        }, React.createElement("input", {
                              className: input,
                              placeholder: "Search",
                              value: state[/* term */0],
                              onChange: onChange
                            }), ReactDOMRe.createElementVariadic("div", {
                              className: results
                            }, Belt_List.toArray(Belt_List.map(state[/* results */1], (function (result$1) {
                                        return React.createElement("div", {
                                                    className: result
                                                  }, Util$ReasonReactExample.str(result$1));
                                      })))));
            }),
          /* initialState */components[/* initialState */10],
          /* retainedProps */components[/* retainedProps */11],
          /* reducer */components[/* reducer */12],
          /* jsElementWrapped */components[/* jsElementWrapped */13]
        ];
}

export {
  components ,
  Styles ,
  make ,
  
}
/* components Not a pure module */
