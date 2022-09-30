import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['**/e2e.spec.ts'],
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
}