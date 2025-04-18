const echo = function (request: any) { // {input: { any }}, {$: any}
  const { message } = request.input;
  const timestamp = new Date().toISOString();
  const context = request.$;  // for future use - do you need to do something with the context? Workflows baby!
  return new Promise((resolve) => {
    setTimeout(() => {
      // just as an example, we are going to add a delay of 1 second 
      // and assume this is part of a workflow, we are going to add a trace to the context
      context.trace.step = "echo";
      context.trace.timestamp = timestamp;
      context.log("Echo tool called with message: ", message);
      resolve(message);
    }, 1000);
  });
};
export default echo;
export { echo };
