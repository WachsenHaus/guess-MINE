import express from "express";


// const express = require('express');    


const PORT = 4000 || null;
const app = express();

const handleListening = () => console.log("서버 재부팅~");

app.listen(PORT,handleListening);