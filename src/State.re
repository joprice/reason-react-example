open Belt;

type state = {
  data: list(string),
  search: Search.state,
};

type action =
  | Search(string)
  | SearchResults(list(string));

let component = ReasonReact.reducerComponent(__MODULE__);

let search = state =>
  if (String.length(state.search.term) > 0) {
    state.data
    ->List.keep(item => Js.String.indexOf(state.search.term, item) != (-1));
  } else {
    state.data;
  };

module Handlers = {
  let search =
    Debouncer.make(~wait=200, ({ReasonReact.state, send}) =>
      send(SearchResults(search(state)))
    );
};

let make = (~data, children) => {
  ...component,
  initialState: () => {
    search: {
      term: "",
      results: data,
    },
    data,
  },
  reducer: (action, state) =>
    switch (action) {
    | SearchResults(results) =>
      Update({
        ...state,
        search: {
          ...state.search,
          results,
        },
      })
    | Search(term) =>
      UpdateWithSideEffects(
        {
          ...state,
          search: {
            ...state.search,
            term,
          },
        },
        Handlers.search,
      )
    },
  render: self => children(self.state, self.send),
};
