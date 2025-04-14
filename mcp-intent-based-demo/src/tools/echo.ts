
const echo = function (message: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // do nothing
      resolve(message);
    }, 1000);
  });
};
export default echo;
export { echo };
