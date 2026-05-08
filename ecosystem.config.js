module.exports = {
  apps: [
    {
      name: "cortinas-web",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "C:/Proyectos/web-cortinas-girardot",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      watch: false,
      autorestart: true,
      max_restarts: 10,
    },
  ],
};
