#!/usr/bin/env node
var K=require("node:module");var D=Object.create;var{getPrototypeOf:E,defineProperty:x,getOwnPropertyNames:G}=Object;var H=Object.prototype.hasOwnProperty;var J=(f,C,j)=>{j=f!=null?D(E(f)):{};let k=C||!f||!f.__esModule?x(j,"default",{value:f,enumerable:!0}):j;for(let q of G(f))if(!H.call(k,q))x(k,q,{get:()=>f[q],enumerable:!0});return k};var z=J(require("@agentico/mcp-intent-based"));process.on("SIGINT",()=>{console.log("Aborted, process interrupted."),process.exit(0)});async function L(){let f=await z.default();if(f){if("sendLoggingMessage"in f)f.sendLoggingMessage({level:"info",data:"Server started!"})}else console.error("Error starting server"),process.exit(1)}L().catch((f)=>{console.error("Error starting server:",f),process.exit(1)});
