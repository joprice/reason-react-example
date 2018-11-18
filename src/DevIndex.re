include Index;

type hot;
[@bs.deriving abstract]
type module_ = {hot: option(hot)};

[@bs.val] external module_: module_ = "module";
[@bs.send.pipe: hot] external accept: unit => unit = "accept";

switch (module_->hotGet) {
| Some(h) => h |> accept()
| _ => ()
};
