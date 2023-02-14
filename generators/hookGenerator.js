const hookExists = require("./hookExists");
const isValidHookName = require("./isValidHookName");

module.exports = {
  description: "Create a hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "useReactHook",
      validate: (value) => {
        if (/.+/.test(value)) {
          return hookExists(value)
            ? "A hook with this name already exists"
            : isValidHookName(value)
            ? true
            : "Invalid hook name";
        }
        return "The name is required";
      },
    },
  ],
  actions: (data) => {
    const basePath = "../use-react-hooks/src/{{name}}";
    const examplePath = "../example/src/app/(hooks)/{{name}}";

    const actions = [
      //   //create hook
      {
        type: "add",
        path: `${basePath}/${data.name}.tsx`,
        templateFile: "./templates/hook.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${basePath}/${data.name}.test.tsx`,
        templateFile: "./templates/test.tsx.hbs",
        abortOnFail: true,
      },
      // example
      {
        type: "add",
        path: `${examplePath}/page.tsx`,
        templateFile: "./templates/page.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${examplePath}/demo.tsx`,
        templateFile: "./templates/demo.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${examplePath}/info.mdx`,
        templateFile: "./templates/info.mdx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${examplePath}/usage.mdx`,
        templateFile: "./templates/usage.mdx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${examplePath}/types.mdx`,
        templateFile: "./templates/types.mdx.hbs",
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
