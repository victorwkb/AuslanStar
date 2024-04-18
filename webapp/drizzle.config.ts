import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  schema: "./db/schema.ts",
  dbCredentials: {
    user: "postgres.cfwpmooqcwldryskjpcr",
    port: 5432,
    host: "aws-0-ap-southeast-2.pooler.supabase.com",
    password: "Stackedstars_07",
    database: "postgres",
  },
  verbose: true,
  out: "./drizzle",
} satisfies Config;

