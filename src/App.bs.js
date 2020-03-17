

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as State$ReasonReactExample from "./State.bs.js";
import * as Search$ReasonReactExample from "./Search.bs.js";

var components = ReasonReact.statelessComponent("App-ReasonReactExample");

function make(data, _children) {
  return {
          debugName: components.debugName,
          reactClassInternal: components.reactClassInternal,
          handedOffState: components.handedOffState,
          willReceiveProps: components.willReceiveProps,
          didMount: components.didMount,
          didUpdate: components.didUpdate,
          willUnmount: components.willUnmount,
          willUpdate: components.willUpdate,
          shouldUpdate: components.shouldUpdate,
          render: (function (_self) {
              return ReasonReact.element(undefined, undefined, State$ReasonReactExample.make(data, (function (state, send) {
                                var search = function (term) {
                                  return Curry._1(send, /* Search */Block.__(0, [term]));
                                };
                                return ReasonReact.element(undefined, undefined, Search$ReasonReactExample.make(state.search, search, []));
                              })));
            }),
          initialState: components.initialState,
          retainedProps: components.retainedProps,
          reducer: components.reducer,
          jsElementWrapped: components.jsElementWrapped
        };
}

export {
  components ,
  make ,
  
}
/* components Not a pure module */
