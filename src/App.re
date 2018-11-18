let components = ReasonReact.statelessComponent(__MODULE__);

let make = (~data, _children) => {
  ...components,
  render: _self =>
    <State data>
      ...{
           (state, send) => {
             let search = term => send(State.Search(term));
             <Search state={state.search} search />;
           }
         }
    </State>,
};
