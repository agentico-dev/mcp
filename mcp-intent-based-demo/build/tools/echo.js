const echo = function (message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // do nothing
            resolve(message);
        }, 1000);
    });
};
export default echo;
export { echo };
//# sourceMappingURL=echo.js.map