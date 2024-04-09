import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined;
}

export const database = globalThis.prisma || new PrismaClient();

export const test = "test";
