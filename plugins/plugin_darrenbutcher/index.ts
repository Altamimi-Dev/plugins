const plugin: Fig.Plugin = {
  name: "plugin_darrenbutcher",
  type: "shell",
  description: "Custom zsh plugin to create custom plugins",
  authors: [
    {
      name: "darrenbutcher",
      github: "darrenbutcher",
    }
  ],
  github: "darrenbutcher/plugin",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["plugin.plugin.zsh"],
  },
};

export default plugin;