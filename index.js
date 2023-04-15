// Packages
const inquirer = require("inquirer");
const fs = require("fs");

// Questions - promptUser()
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "characters",
      message:
        "Please enter up to three characters that your logo will include: ",
      validate: (input) => {
        if (input.length > 3) {
          return "Please enter up to three characters only";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Please enter a color or a hexadecimal number for your text",
      validate: (input) => {
        // Regexes which identify colors
        const colorHexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        const colorNameRegex =
          /^(?:aqua|aliceblue|antiquewhite|black|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/i;
        if (!colorHexRegex.test(input) && !colorNameRegex.test(input)) {
          return "Please enter a valid color or hexadecimal number";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose a shape for your logo.",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Please enter a color or a hexadecimal number for your shape",
      validate: (input) => {
        // Regexes which identify colors
        const colorHexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        const colorNameRegex =
          /^(?:aqua|aliceblue|antiquewhite|black|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/i;
        if (!colorHexRegex.test(input) && !colorNameRegex.test(input)) {
          return "Please enter a valid color or hexadecimal number";
        }
        return true;
      },
    },
  ]);
};

// export promptUser
module.exports = promptUser;
//call promptUser
promptUser();
