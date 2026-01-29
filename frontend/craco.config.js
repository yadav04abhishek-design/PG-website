// craco.config.js
const path = require("path");
require("dotenv").config();

/**
 * Cloudflare Pages specifics:
 * - NODE_ENV=production
 * - CI=true
 *
 * We must NEVER load dev-only plugins in CI/production builds
 */
const isDevServer =
  process.env.NODE_ENV !== "production" &&
  process.env.CI !== "true";

// Feature flags via env
const config = {
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
  enableVisualEdits: isDevServer,
};

// --------------------
// Optional dev modules
// --------------------
let setupDevServer;
let babelMetadataPlugin;

if (config.enableVisualEdits) {
  setupDevServer = require("./plugins/visual-edits/dev-server-setup");
  babelMetadataPlugin = require("./plugins/visual-edits/babel-metadata-plugin");
}

// --------------------
// Optional health check
// --------------------
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

// --------------------
// CRACO CONFIG
// --------------------
module.exports = {
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },

  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    configure: (webpackConfig) => {
      // Reduce watchers (important for CI)
      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/build/**",
          "**/dist/**",
          "**/coverage/**",
          "**/public/**",
        ],
      };

      // Add health plugin only when explicitly enabled
      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }

      return webpackConfig;
    },
  },

  // Babel plugins ONLY in dev (never CI / production)
  babel: config.enableVisualEdits
    ? {
        plugins: [babelMetadataPlugin],
      }
    : undefined,

  // Dev server config (never used in Cloudflare build)
  devServer: (devServerConfig) => {
    if (config.enableVisualEdits && setupDevServer) {
      devServerConfig = setupDevServer(devServerConfig);
    }

    if (
      config.enableHealthCheck &&
      setupHealthEndpoints &&
      healthPluginInstance
    ) {
      const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

      devServerConfig.setupMiddlewares = (middlewares, devServer) => {
        if (originalSetupMiddlewares) {
          middlewares = originalSetupMiddlewares(middlewares, devServer);
        }

        setupHealthEndpoints(devServer, healthPluginInstance);
        return middlewares;
      };
    }

    return devServerConfig;
  },
};
