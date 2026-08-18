import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
  }).index("by_email", ["email"])
    .index("by_phone", ["phone"]),

  rsvps: defineTable({
    name: v.string(),
    attending: v.boolean(),
    guestCount: v.number(),
    note: v.optional(v.string()),
  }),

  guestMessages: defineTable({
    sender: v.string(),
    message: v.string(),
  }),

  authAccounts: defineTable({
    userId: v.id("users"),
    provider: v.string(),
    providerAccountId: v.string(),
    secret: v.optional(v.string()),
  }).index("by_providerAndAccountId", ["provider", "providerAccountId"])
    .index("by_userId", ["userId"]),

  authSessions: defineTable({
    userId: v.id("users"),
    expiresAtMs: v.number(),
  }).index("by_userId", ["userId"]),

  authRefreshTokens: defineTable({
    userId: v.id("users"),
    family: v.string(),
    expiresAtMs: v.number(),
    lastUsedAtMs: v.number(),
  }).index("by_userId", ["userId"]),
});
