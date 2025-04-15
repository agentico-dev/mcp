const reverse = function (message) {
    return new Promise((resolve) => {
        // ensure message is a string
        if (typeof message !== "string") {
            throw new Error("Message must be a string, type is: " + typeof message + " - " + JSON.stringify(message));
        }
        const reversedMessage = message.split("").reverse().join("");
        setTimeout(() => {
            resolve(reversedMessage);
        }, 100);
    });
};
export default reverse;
export { reverse };
//# sourceMappingURL=reverse.js.map