import { authRouter } from "./auth";

import { router } from "../trpc";
import { blogRouter } from "./blog";

export const appRouter = router({
  auth: authRouter,
  blog: blogRouter
});

export type AppRouter = typeof appRouter;
