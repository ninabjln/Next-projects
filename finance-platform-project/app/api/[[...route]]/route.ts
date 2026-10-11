import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import authors from './authors'
import * as z from 'zod'
import { zValidator } from '@hono/zod-validator'
import { Hono } from "hono";
import { handle } from "@hono/vercel";

const app = new Hono().basePath("/api");
app.use('*', clerkMiddleware())
app.get('/', (c) => {
  const { userId } = getAuth(c);

  if (!userId) {
    return c.json({
      message: 'You are not logged in.',
    })
  }

  return c.json({
    message: 'You are logged in!',
    userId,
  })
})

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .get(
    "/hello/:test",
    zValidator("param", z.object({test: z.string(),
    }))
    
    , async (c) => {
    const {test} = c.req.valid("param");

    return c.json({
      message: "Hello world",
      test: test,
    });
  });
app.route('/authors', authors)
export const GET = handle(app);

export const POST = handle(app);
