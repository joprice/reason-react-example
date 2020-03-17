

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Debouncer from "re-debouncer/src/Debouncer.bs.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

var component = ReasonReact.reducerComponent("State-ReasonReactExample");

function search(state) {
  if (state.search.term.length !== 0) {
    return Belt_List.keep(state.data, (function (item) {
                  return item.indexOf(state.search.term) !== -1;
                }));
  } else {
    return state.data;
  }
}

var search$1 = Debouncer.make(200, (function (param) {
        return Curry._1(param.send, /* SearchResults */Block.__(1, [search(param.state)]));
      }));

var Handlers = {
  search: search$1
};

function make(data, children) {
  return {
          debugName: component.debugName,
          reactClassInternal: component.reactClassInternal,
          handedOffState: component.handedOffState,
          willReceiveProps: component.willReceiveProps,
          didMount: component.didMount,
          didUpdate: component.didUpdate,
          willUnmount: component.willUnmount,
          willUpdate: component.willUpdate,
          shouldUpdate: component.shouldUpdate,
          render: (function (self) {
              return Curry._2(children, self.state, self.send);
            }),
          initialState: (function (param) {
              return {
                      data: data,
                      search: {
                        term: "",
                        results: data
                      }
                    };
            }),
          retainedProps: component.retainedProps,
          reducer: (function (action, state) {
              if (action.tag) {
                var init = state.search;
                return /* Update */Block.__(0, [{
                            data: state.data,
                            search: {
                              term: init.term,
                              results: action[0]
                            }
                          }]);
              } else {
                var init$1 = state.search;
                return /* UpdateWithSideEffects */Block.__(2, [
                          {
                            data: state.data,
                            search: {
                              term: action[0],
                              results: init$1.results
                            }
                          },
                          search$1
                        ]);
              }
            }),
          jsElementWrapped: component.jsElementWrapped
        };
}

export {
  component ,
  search ,
  Handlers ,
  make ,
  
}
/* component Not a pure module */
