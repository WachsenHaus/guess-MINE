import express from "express";
import path from 'path';
import {join} from 'path';

import socketIO from "socket.io";
const PORT = 4001 || null;
const app = express();
app.set('view engine','pug');

console.log(__dirname);
// console.log(path.normalize("C:\\\\\\\\Users\\..\\.\\guess-MINE\\src\\views"))
// console.log(path.resolve("aas\\..\\.\\wawawa\\guess-MINE\\src\\views"))
console.log(__filename);
console.log(path.basename(__filename,path.extname(__filename)));
//아래 3개는 동일한 소스코드이다. 
// app.set('views',join(__dirname,"views"));
// app.set('views',"C:\\Users\\wachsenhaus\\Documents\\guess-MINE\\src\\views")
app.set('views',`${__dirname}\\views`);
// app.set('views',`${path.normalize("C:\\\\\\\\Users\\..\\.\\guess-MINE\\src")}\\views`);
// app.set('views',path.join(__dirname,"views"));


app.use(express.static(join(__dirname,"static")));
// app.get("/", (req,res) => res.render("home"));
app.get("/", openHome);

function openHome(req,res)
{
    res.render("home");
}

const handleListening = () => console.log(`✔ Server running : http://localhost:${PORT}`);

app.listen(PORT,handleListening);