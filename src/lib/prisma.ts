import { PrismaClient } from "@/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const provider = process.env.DATABASE_PROVIDER || "sqlite";
  let adapter;
  
  if (provider === "postgresql") {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is required for PostgreSQL");
    adapter = new PrismaPg(url);
  } else {
    adapter = new PrismaLibSql({
      url: process.env.DATABASE_URL || "file:./dev.db",
    });
  }
  
  return new PrismaClient({
    adapter,
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;