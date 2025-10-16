let uuid = 0;

module.exports = {
  plugins: [
    {
      name: 'prefixIds',
      params: {
        prefix: () => {
          uuid += 1;
          return uuid;
        },
      },
    },
  ],
};
