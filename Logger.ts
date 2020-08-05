import { ensureDir } from "./deps.ts";

class Logger {
  path: string;
  fileName: string;

  constructor(fileName?: string, path?: string) {
    this.path = path || `${Deno.cwd()}\\logs`;
    this.fileName = fileName || `logger-file.log`;
  }

  async info(data: any) {
    await ensureDir(this.path);
    await Deno.writeTextFile(
      `${this.path}\\${this.fileName}`,
      `DATE: ${new Date().toISOString()} GMT : INFO: ${JSON.stringify(data)}\n`,
      { append: true }
    );
  }

  async warn(data: any) {
    await ensureDir(this.path);
    await Deno.writeTextFile(
      `${this.path}\\${this.fileName}`,
      `DATE: ${new Date().toISOString()} GMT : WARN: ${JSON.stringify(data)}\n`,
      { append: true }
    );
  }

  async error(data: any) {
    await ensureDir(this.path);
    await Deno.writeTextFile(
      `${this.path}\\${this.fileName}`,
      `DATE: ${new Date().toISOString()} GMT : ERROR: ${JSON.stringify(
        data
      )}\n`,
      { append: true }
    );
  }
}

export { Logger };
