module.exports = {
  apps: [
    {
      name: "congo-app",
      script: "server.js",
      watch: true,
      // Delay between restart
      watch_delay: 1000,
      ignore_watch: ["node_modules", "uploads"],
    },
  ],
};
