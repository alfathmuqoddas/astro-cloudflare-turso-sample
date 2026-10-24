import { defineRelations } from "drizzle-orm";
import * as schema from "./index";

export const relations: any = defineRelations(schema, (r) => ({
  usersTable: {
    posts: r.many.postsTable({
      from: r.usersTable.id,
      to: r.postsTable.userId,
    }),
  },
  postsTable: {
    author: r.one.usersTable({
      from: r.postsTable.userId,
      to: r.usersTable.id,
    }),
  },
}));
