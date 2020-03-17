

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

var Styles = {
  wrapper: wrapper,
  input: input,
  results: results,
  result: result
};

function make(state, search, _children) {
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
          render: (function (self) {
              var onChange = Curry._1(self.handle, (function ($$event, param) {
                      return Curry._1(search, Util$ReasonReactExample.formValue($$event));
                    }));
              return React.createElement("div", {
                          className: wrapper
                        }, React.createElement("input", {
                              className: input,
                              placeholder: "Search",
                              value: state.term,
                              onChange: onChange
                            }), ReactDOMRe.createElementVariadic("div", {
                              className: results
                            }, Belt_List.toArray(Belt_List.map(state.results, (function (result$1) {
                                        return React.createElement("div", {
                                                    className: result
                                                  }, Util$ReasonReactExample.str(result$1));
                                      })))));
            }),
          initialState: components.initialState,
          retainedProps: components.retainedProps,
          reducer: components.reducer,
          jsElementWrapped: components.jsElementWrapped
        };
}

export {
  components ,
  Styles ,
  make ,
  
}
/* components Not a pure module */
