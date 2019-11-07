const server = require("./server");

const port = process.env.PORT || 4000;

server.listen(() => console.log(`\n=== YO! Listening on ${port} fool! ===\n`));