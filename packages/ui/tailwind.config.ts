import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, 'content' | 'prefix' | 'presets'> = {
  content: ["./src/**/*.tsx"],
  // prefix: "se-",
  presets: [sharedConfig],
};

export default config;