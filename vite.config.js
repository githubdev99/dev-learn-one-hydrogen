import {defineConfig} from 'vite';
import netlify from '@netlify/hydrogen-platform/plugin';
import hydrogen from '@shopify/hydrogen/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen(), netlify(), readableStreamWorkaround()],
  optimizeDeps: {include: ['@headlessui/react']},
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});

function readableStreamWorkaround() {
  let config;
  return {
    name: 'readable-stream-workaround',
    configResolved(_config) {
      config = _config;
    },
    transform(code, id) {
      if (config.command === 'build' && id.includes('streaming.server.js')) {
        return code.replace('let cachedStreamingSupport', '$& = false');
      }
    },
  };
}
