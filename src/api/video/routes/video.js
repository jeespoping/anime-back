module.exports = {
  routes: [
    {
      method: "GET",
      path: "/video/:url",
      handler: "video.videoUrl",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
