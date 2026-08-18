import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    sender: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("guestMessages", args);
  },
});

export const submit = create;

export const list = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("guestMessages").order("desc").collect();
    return messages.slice(0, 50);
  },
});
