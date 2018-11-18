open Belt;
open Util;

let components = ReasonReact.statelessComponent(__MODULE__);

module Styles = {
  open Css;

  let wrapper =
    style([
      margin(px(10)),
      padding(px(10)),
      border(px(1), `solid, lightgray),
      flex(1),
    ]);
  let input = style([flex(1), padding2(~v=px(10), ~h=px(5))]);
  let results = style([height(px(200)), overflowY(`auto)]);
  let result = style([padding(px(5))]);
};

type state = {
  term: string,
  results: list(string),
};

let make = (~state, ~search, _children) => {
  ...components,
  render: self => {
    let onChange = self.handle((event, _) => event |> formValue |> search);

    <div className=Styles.wrapper>
      <input
        className=Styles.input
        placeholder="Search"
        value={state.term}
        onChange
      />
      <div className=Styles.results>
        ...{
             List.map(state.results, result =>
               <div className=Styles.result> {str(result)} </div>
             )
             |> List.toArray
           }
      </div>
    </div>;
  },
};
