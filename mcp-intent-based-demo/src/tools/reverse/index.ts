// Alternative: Embed Schema in the Tool File
const schema = {
  "type": "object",
  "properties": {
    "message": { "type": "string" }
  },
  "required": ["message"],
  "additionalProperties": false
};
const reverse = function (request: any) { // {input: { any }}, {$: any}
  return new Promise((resolve) => {
    const { message } = request.input;
    const context = request.$;    // for future use - do you need to do something with the context? Workflows baby!
    context.log("Reverse tool called with message: ", message);   // log the message sent back from the server side as notification!! 🤓
    const reversedMessage = message.split("").reverse().join("");
    context.log("Reversed message: ", reversedMessage); // log the reversed message
    resolve(reversedMessage);
  });
};

reverse.schema = schema;

export default reverse;
export { reverse };