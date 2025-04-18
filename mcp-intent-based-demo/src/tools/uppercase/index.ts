const uppercase = function (request: any) { // {input: { any }}, {$: any}
  // on purpose, we are changing the name of the input attribute to msg
  // this is to show that the input schema is aligned with schema.json
  // @todo - try to change to message and see what happens 🕵🏽‍♀️
  const { msg } = request.input;
  const timestamp = new Date().toISOString();
  const context = request.$;
  context.trace.step = "uppercase";
  context.trace.timestamp = timestamp;
  context.log("Uppercase tool called with message: ", msg);
  return msg.toUpperCase();  
};
export default uppercase;
export { uppercase };