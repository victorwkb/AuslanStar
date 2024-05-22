import { pgTable, integer, serial, varchar } from "drizzle-orm/pg-core";

export const leaderboard = pgTable("leaderboard", {
  id: integer("id").primaryKey(),
  username: varchar("username", { length: 50 }),
  score: integer("score"),
});

export const leaderboard_m1 = pgTable("leaderboard_m1", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }),
  score: integer("score"),
});

export const leaderboard_m2 = pgTable("leaderboard_m2", {
  id: integer("id").primaryKey(),
  username: varchar("username", { length: 50 }),
  score: integer("score"),
});

export const leaderboard_m3 = pgTable("leaderboard_m3", {
  id: integer("id").primaryKey(),
  username: varchar("username", { length: 50 }),
  score: integer("score"),
});

export type Leaderboard = typeof leaderboard.$inferSelect;
export type Leaderboard_m1 = typeof leaderboard_m1.$inferSelect;
export type Leaderboard_m2 = typeof leaderboard_m2.$inferSelect;
export type Leaderboard_m3 = typeof leaderboard_m3.$inferSelect;
