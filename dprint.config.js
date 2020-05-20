// @ts-check
const { TypeScriptPlugin } = require("dprint-plugin-typescript");
const { JsoncPlugin } = require("dprint-plugin-jsonc");

/** @type { import("dprint").Configuration } */
module.exports.config = {
    projectType: "openSource",
    plugins: [
        new TypeScriptPlugin({
            useBraces: "preferNone",
            singleBodyPosition: "nextLine",
            preferHanging: false,
            preferSingleLine: false,
            nextControlFlowPosition: "nextLine",
            semiColons: "always",
            "arrowFunction.useParentheses": "preferNone",
            "tryStatement.nextControlFlowPosition": "sameLine",
        }),
        new JsoncPlugin({ indentWidth: 1 }),
    ],
    includes: ["**/*.{ts,tsx,json,js,jsx}"],
};
