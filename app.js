// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("please enter your name:", (name) => {
//   console.log("your entered name:" + name);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("interface closed");
//   process.exit(0);
// });

// Step-0: Read a file........................................................
const fs = require("fs");
const indexhtml = fs.readFileSync("./index.html", "utf-8");
const homehtml = fs.readFileSync("./Template/home.html", "utf-8");
const contacthtml = fs.readFileSync("./Template/contact.html", "utf-8");
const abouthtml = fs.readFileSync("./Template/about.html", "utf-8");
const producthtml = fs.readFileSync("./Template/product.html", "utf-8");

// STEP-1: Create a server................................................
const http = require("http");
const { hostname } = require("os");

const server = http.createServer((request, response) => {
  let path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end(indexhtml.replace("{{%CONTENT%}}", homehtml));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end(indexhtml.replace("{{%CONTENT%}}", abouthtml));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end(indexhtml.replace("{{%CONTENT%}}", contacthtml));
  } else if (path.toLocaleLowerCase() === "/products") {
    response.end(indexhtml.replace("{{%CONTENT%}}", producthtml));
  } else {
    response.end(
      indexhtml.replace("{{%CONTENT%}}", "Error 404: Page not found")
    );
  }
});

// STEP-2: Start the server................................................
const port = 9000;
const hname = "127.0.0.1";

server.listen(port, hname, () => {
  console.log("server has started");
});

// STEP-3: Create Routing................................................

// video ended at #16
