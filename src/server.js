import express from "express";
import {join} from 'path';
import path from 'path';
import socketIO from "socket.io";
const PORT = 4000 || null;
const app = express();
app.set('view engine','pug');
// app.set('views',join(__dirname,"views"));
console.log(__dirname);

//아래 3개는 동일한 소스코드이다. 
// app.set('views',"C:\\Users\\wachsenhaus\\Documents\\guess-MINE\\src\\views")
app.set('views',`${__dirname}\\views`);
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