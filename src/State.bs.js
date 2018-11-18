

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Debouncer from "re-debouncer/src/Debouncer.bs.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.reducerComponent("State-ReasonReactExample");

function search(state) {
  if (state[/* search */1][/* term */0].length !== 0) {
    return Belt_List.keep(state[/* data */0], (function (item) {
                  return item.indexOf(state[/* search */1][/* term */0]) !== -1;
                }));
  } else {
    return state[/* data */0];
  }
}

var search$1 = Debouncer.make(200, (function (param) {
        return Curry._1(param[/* send */3], /* SearchResults */Block.__(1, [search(param[/* state */1])]));
      }));

var Handlers = /* module */[/* search */search$1];

function make(data, children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return Curry._2(children, self[/* state */1], self[/* send */3]);
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* data */data,
                      /* search : record */[
                        /* term */"",
                        /* results */data
                      ]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action.tag) {
                var init = state[/* search */1];
                return /* Update */Block.__(0, [/* record */[
                            /* data */state[/* data */0],
                            /* search : record */[
                              /* term */init[/* term */0],
                              /* results */action[0]
                            ]
                          ]]);
              } else {
                var init$1 = state[/* search */1];
                return /* UpdateWithSideEffects */Block.__(2, [
                          /* record */[
                            /* data */state[/* data */0],
                            /* search : record */[
                              /* term */action[0],
                              /* results */init$1[/* results */1]
                            ]
                          ],
                          search$1
                        ]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  search ,
  Handlers ,
  make ,
  
}
/* component Not a pure module */
