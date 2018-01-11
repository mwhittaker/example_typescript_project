import * as _ from "lodash";
import * as echo from "./echo";

function main() {
    console.log(_.join([echo.echo("hello"), echo.echo("world")], " "));
}

window.onload = main;
