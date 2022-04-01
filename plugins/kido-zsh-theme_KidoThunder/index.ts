const plugin: Fig.Plugin = {
  name: "kido-zsh-theme_KidoThunder",
  type: "shell",
  description: "Kido Theme for Oh My ZSH",
  authors: [
    {
      name: "KidoThunder",
      github: "KidoThunder",
    }
  ],
  github: "KidoThunder/kido-zsh-theme",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["kido.zsh-theme"],
  },
};

export default plugin;
