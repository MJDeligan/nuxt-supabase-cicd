export default defineEventHandler((event) => {
  return {
    param: event.context.params.param,
  };
});
