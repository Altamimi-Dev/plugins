const plugin: Fig.Plugin = {
  name: "ssh-connect",
  type: "shell",
  description: "🐙 simple ssh manager based on bash/zsh history",
  github: "gko/ssh-connect",
  shells: ["zsh"],
  tags: [
    "bash",
    "zsh",
    "ssh",
    "manager",
    "connect",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
