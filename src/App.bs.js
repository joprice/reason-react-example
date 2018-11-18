

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as State$ReasonReactExample from "./State.bs.js";
import * as Search$ReasonReactExample from "./Search.bs.js";

var components = ReasonReact.statelessComponent("App-ReasonReactExample");

function make(data, _children) {
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
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, State$ReasonReactExample.make(data, (function (state, send) {
                                var search = function (term) {
                                  return Curry._1(send, /* Search */Block.__(0, [term]));
                                };
                                return ReasonReact.element(undefined, undefined, Search$ReasonReactExample.make(state[/* search */1], search, /* array */[]));
                              })));
            }),
          /* initialState */components[/* initialState */10],
          /* retainedProps */components[/* retainedProps */11],
          /* reducer */components[/* reducer */12],
          /* jsElementWrapped */components[/* jsElementWrapped */13]
        ];
}

export {
  components ,
  make ,
  
}
/* components Not a pure module */
