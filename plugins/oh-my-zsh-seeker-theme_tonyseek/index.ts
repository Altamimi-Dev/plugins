const plugin: Fig.Plugin = {
  name: "oh-my-zsh-seeker-theme_tonyseek",
  type: "shell",
  description: "My favored oh-my-zsh theme.",
  authors: [
    {
      name: "tonyseek",
      github: "tonyseek",
    }
  ],
  github: "tonyseek/oh-my-zsh-seeker-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["seeker.zsh-theme"],
  },
};

export default plugin;