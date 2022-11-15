const fs = require("fs");
const https = require("http").createServer((request, response) => {
  const myFileWriter = async (fileName, fileContent) => {
    await new Promise((resolve) => {
      fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("File Created");
      });
    });
  };
  myFileWriter(
    "index.html",
    `<h1>Hello World</h1>
<p>This is Rohit Pal...</p>`
  );
  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      response.writeHead(404);
      respone.write("Whoops! File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
});
https.listen(5001, () => console.log("server running at 5001"));