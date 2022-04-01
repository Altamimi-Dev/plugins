const plugin: Fig.Plugin = {
  name: "zsh2000_consolemaverick",
  type: "shell",
  description: "Pretty sweet zsh theme",
  authors: [
    {
      name: "consolemaverick",
      github: "consolemaverick",
      twitter: "consolemaverick",
    }
  ],
  github: "consolemaverick/zsh2000",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["zsh2000.zsh-theme"],
  },
};

export default plugin;
