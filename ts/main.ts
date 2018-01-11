import * as _ from "lodash";
import Vue from "vue";

import * as echo from "./echo";

function main() {
  const msg = _.join([echo.echo("hello"), echo.echo("world")], " ");
  // tslint:disable:no-unused-expression
  new Vue({
    el: "#app",
    data: {msg},
  });
}

main();
