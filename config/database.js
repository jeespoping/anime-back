module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env(
        "DATABASE_HOST",
        "animecol.c0ugrfgwmkbn.us-east-1.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "anime"),
      user: env("DATABASE_USERNAME", "awsanimecol"),
      password: env("DATABASE_PASSWORD", "nik.2000"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
