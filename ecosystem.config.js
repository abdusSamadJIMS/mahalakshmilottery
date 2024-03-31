module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      key: "key.pem",
      host: "13.210.215.70",
      ref: "origin/main",
      repo: "git@github.com:abdusSamadJIMS/mahalakshmilottery.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      "ssh-options": "ForwardAgent=yes",
    },
  },
};
