module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Viktor Matveev - portfolio";
      return args;
    });
  }
};
