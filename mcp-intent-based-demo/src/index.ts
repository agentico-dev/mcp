#!/usr/bin/env node

import createServerFromFile from "@agentico/mcp-intent-based";

// detect ctrl+c and exit
process.on("SIGINT", () => {
  console.log("Aborted, process interrupted.");
  process.exit(0);
});
async function startServer() {
  // either instance of Server or McpServer
  const server = await createServerFromFile();
  if (server) {
    if ("sendLoggingMessage" in server) {
      server.sendLoggingMessage({
        level: "info",
        data: `Server started!`,
      });
    }
    // Yes, that's all you need to do to start the server with Agentico and Intent Base AI!!
  } else {
    console.error("Error starting server");
    process.exit(1);
  }
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});