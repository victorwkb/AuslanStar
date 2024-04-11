import { pgTable, text, json, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const entry = pgTable('entry', {
  id: integer('id').primaryKey(),
  entryInEnglish: text('entry_in_english'),
  entryType: text('entry_type'),
  categories: text('categories').array()
});

export const entryRelations = relations(entry, ({ many }) => ({
  SubEntries: many(subentry)
}));

export const subentry = pgTable('subentry', {
  id: integer('id').primaryKey(),
  entryId: integer('entry_id')
    .references(() => entry.id, { onDelete: 'cascade' }),
  videoLinks: text('video_links').array(),
  keywords: text('keywords').array(),
  definitions: json('definitions'),
  regions: text('regions').array()
});

export const subEntryRelations = relations(
  subentry,
  ({ one }) => ({
    Entry: one(entry, {
      fields: [subentry.entryId],
      references: [entry.id]
    }),
  })
)

export type Entry = typeof entry.$inferSelect;
export type SubEntry = typeof subentry.$inferSelect;
