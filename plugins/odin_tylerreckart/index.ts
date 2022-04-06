const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "odin_tylerreckart",
  type: "shell",
  description: "A git flavored zsh prompt",
  authors: [
    {
      name: "tylerreckart",
      github: "tylerreckart",
    },
  ],
  github: "tylerreckart/odin",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["odin.zsh-theme"],
  },
};

export default plugin;
