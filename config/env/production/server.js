module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  url: "https://anime-back-production.up.railway.app/", // I was referring to this one
  proxy: true, // This makes Strapi (and therefore the Koa instance) aware of the proxy.
  admin: {
    url: "https://anime-back-production.up.railway.app/admin/",
    autoOpen: false,
  },
});
