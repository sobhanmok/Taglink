import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";
import cache from "@opennextjs/cloudflare/kvCache";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: async () => cache,
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  // 👇 این خط مشکل رو حل می‌کنه
  buildCommand: "next build",
};

export default config;