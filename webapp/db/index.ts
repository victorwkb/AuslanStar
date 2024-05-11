import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DB_URL!;
const connectionString_2 = process.env.DB_URL_2!;
const client = postgres(connectionString, { prepare: false });
const client_2 = postgres(connectionString_2);

export const db = drizzle(client, { schema });
export const db2 = drizzle(client_2);
