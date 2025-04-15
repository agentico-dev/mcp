# Getting Started with MCP Intent Based Demo

This is an early version of the MCP Intent-Based demo project. The goal of this project is to demonstrate how to create and manage a flexible, dynamic server environment using a declarative manifest approach. Please note that this is a work in progress and may not be fully functional or stable. We welcome [feedback](https://go.rebelion.la/contact-us) to improve the project.

This guide will assist you in setting up and running the MCP Intent-Based demo project, which demonstrates how to create and manage a flexible, dynamic server environment using a declarative manifest approach.

## Prerequisites

- Node.js (v18 or higher)
- `npm` or `yarn` (or `bun`)

## Project Structure

The demo consists of these key files:

- `server.yaml`: The manifest file that defines the server configuration
- `src/index.ts`: The entry point that initializes the server
- Various tool implementations in the project directory
- `src/tools`: Directory containing tool implementations - one for each tool,
  - `echo.ts`: A tool that echoes back the input
  - `reverse.ts`: A tool that reverses the input string
  - `uppercase.ts`: A tool that converts the input string to uppercase
- `package.json`: The project configuration file

## Step 1: Clone the Repository

```bash
git clone https://github.com/agentico-dev/mcp.git
cd mcp/mcp-intent-based-demo
```

## Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

## Step 3: Understanding the Manifest File

The `server.yaml` file is the heart of the MCP Intent Based approach. It defines:

```yaml
apiVersion: agentico.dev/v1
kind: Server
metadata:
  name: demo-mcp
  description: Demo MCP Server instance
  transport: stdio
  capabilities:
    - logging
    - tools
spec:
  template:
    metadata:
      scope: local
    spec:
      tools:
        - name: echo
          description: 'Utility tool that returns the exact input provided to it...'
        - name: reverse
          description: 'Text manipulation tool that reverses the order of characters...'
        - name: uppercase
          description: 'String transformation utility that converts all alphabetic characters...'
```

This file specifies:
- Server metadata - to define the MCP server instance
- Transport type (`stdio` in this example)
- Enabled capabilities
- Tools to be dynamically created

## Step 4: Understanding the Server Initialization

The entry point of the application (`index.ts`) is remarkably simple:

```typescript
#!/usr/bin/env node

import createServerFromFile from "@agentico/mcp-intent-based";

async function startServer() {
  // either instance of Server or McpServer
  const server = await createServerFromFile();
  // Yes, that's all you need to do to start the server with Agentico and Intent Base AI!!
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
```

🪄 The magic happens with a single call to `createServerFromFile()`, which reads the manifest file and dynamically sets up the entire server environment!!

## Step 5: Running the Demo

To start the server:

**NOTE: Make sure you add the `tools` path to the `TOOLS_PATH` environment variable, so that the server can find the tools.**

```bash
npm run build
TOOLS_PATH=$PWD/build/tools npm run inspector
# or
yarn build
yarn inspector
```

You should see output indicating that the server has started successfully.

## Step 6: Testing the Tools

The demo includes three tools:

1. **Echo Tool**: Returns exactly what you send to it
2. **Reverse Tool**: Reverses the order of characters in a string
3. **Uppercase Tool**: Converts text to uppercase

You can interact with these tools through the configured transport (stdio in this case) via the `inspector`.

Example interaction:

```
> {"tool": "echo", "input": "Hello, MCP Intent Based Server!"}
< {"output": "Hello, MCP Intent Based Server!"}

> {"tool": "reverse", "input": "Hello, MCP Intent Based Server!"}
< {"output": "!revreS desaB tnetnI PCM ,olleH"}

> {"tool": "uppercase", "input": "Hello, MCP Intent Based Server!"}
< {"output": "HELLO, MCP INTENT BASED SERVER!"}
```

## Step 7: Extending the Demo

You can extend this demo by:

1. **Adding New Tools**:
   - Create a new tool implementation in the `src/tools` directory
   - Add it to the `tools` section in `server.yaml`

3. **Changing Transport**:
   - Modify the `transport` field in `server.yaml`
   - Configure the new transport as needed: 
     - `stdio` for standard input/output
     - `sse` for server-sent events
     - `http` for HTTP transport
     - Custom transports can be implemented as needed
       - `grpc` for gRPC transport - coming soon
       - `http` for HTTP transport - coming soon

## Understanding the Intent-Based Approach

The power of this approach comes from:

- **Declarative Configuration**: Define what you want, not how to achieve it
- **Dynamic Tool Creation**: Tools are created based on the manifest
- **Separation of Concerns**: Server logic is separated from tool implementations
- **Extensibility**: Easily add new tools and capabilities by updating the manifest

## Common Issues and Solutions

- **Tool Not Found**: Ensure the tool name in your request matches exactly what's in the manifest
- **Server Not Starting**: Check that all dependencies are installed and the manifest file is valid
- **Tool Not Working**: Check the implementation of the tool and ensure it's properly registered

## Next Steps

- Explore the MCP Intent Based Server documentation for more advanced features
- Try creating your own custom tools and incorporate them into the manifest
- Experiment with different transport types

For more information, visit the [MCP Intent Based Server and Tools documentation](https://agentico.dev/docs/mcp-intent-based).