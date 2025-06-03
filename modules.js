// What is a module
//
// A module is just a file. Onen script is onen module. As simple as that.
//
// Modules can load each other and use special directives export and import to interchange functionality, call functions from one module from another one:
//
// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of funtionality from other modules.

import {admin} from "./config.js";
import { capitalize } from "./helpers.js";
import './import_file_1.js'

console.log(capitalize("raven"));
console.log(admin);
console.log(import.meta.url);

// let str = "😻hello";
// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str.slice(0, 2));
// console.log([...str][0]);
