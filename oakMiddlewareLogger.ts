import { RouterContext } from "./deps.ts";
import { ensureDir } from "./deps.ts";

const oakMiddlewareLogger = async (ctx: RouterContext, next: any) => {
  try {
    const path = `${Deno.cwd()}\\logs`;
    const fileName = `logger-middleware.log`;

    await ensureDir(path);
    await Deno.writeTextFile(
      `${path}\\${fileName}`,
      `DATE: ${new Date().toISOString()} GMT: 
      REQUEST: 
      BODY: ${await ctx.request.body().value} 
      PARAMS: ${ctx.params} 
      HEADERS: ${ctx.request.headers} \n`,
      { append: true }
    );

    next();
  } catch (error) {
    next(error);
  }
};

export { oakMiddlewareLogger };
