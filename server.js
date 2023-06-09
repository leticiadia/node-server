const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });

    response.end(
      JSON.stringify({
        message: "Minha primeira aplicação com NodeJS",
      })
    );
  })
  .listen(3001, () => console.log("Servidor está rodando na porta 3001"));
