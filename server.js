const http = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="app.css">
    <title>Document</title>
</head>
<body>
    <h1> rest server </h1>
</body>
<script src="app.js"></script>
</html>`;   

const css = `body {
    margin: 25px;
}`;
const js = `alert('correct')`;

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(html);
            break;
        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css'});
            res.end(css);
            break;
        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript'});
            res.end(js);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain'});
            res.end('404');
            break;
    }
}).listen(3000, () => console.log('Сервер работает'));