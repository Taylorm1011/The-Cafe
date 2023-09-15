const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

//server configiguration
const hostname = "127.0.0.1";
const port = 3200;


// reading the files
const homePage = fs.readFileSync("home.html");
const aboutPage = fs.readFileSync("about.html");
const menuPage = fs.readFileSync("menu.html");
const wherePage = fs.readFileSync("where.html");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(homePage);
        } else if (req.url === "/home.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(aboutPage);
        } else if (req.url === "/about.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(menuPage);
        } else if (req.url === "/menu.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(wherePage);
        }
        else if(req.url.match("\.jpg")) {
            try {
                res.statusCode = 200;
                res.setHeader("Content-Type", "cafeHeader/jpg");
                imgLoc = req.url.replace("/","./");
                console.log(imgLoc);
                image = fs.readFileSync(imgLoc);
                res.end(image);
            } catch {
                res.statusCode = 404;
                res.write("404");
                console.log(req.url);
            }
            
        } else {
            res.statusCode = 404;
            res.write("404");
            console.log(req.url);
        }
        res.end();
    
});  
// this starts the server 
server.listen(port, hostname, () => {
    console.log("server is now running");
});



    
        


