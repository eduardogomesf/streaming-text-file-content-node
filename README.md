<h1>Streaming Text File Content</h1>

![Node JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br />

Streaming text file content is an example of how to use readable streams and writable streams to manipulate text files.

 * It has a http server without framework
 * There is only a default endpoint provided by the server
 * The endpoint reads a text file using stream and then stream the content
 * The streamed result is received and then written on another text file

 <br/>

<h2>Installation</h2>

 If you use npm, then run:
```bash
npm install
```

If you use yarn, then run:
```bash
yarn
```

<br />

<h2>Running the project</h2>

 First, it's necessary to run the http server, so run:
```bash
node ./src/server.mjs
```

To starting processing the products, run:
```bash
node ./src/index.mjs
```
