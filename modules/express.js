const express = require("express");
const aplicacao = express();
const porta = 3000;

const path = require("path"); //chamando path pq essa biblioteca vai ajudar a usar os caminhos
aplicacao.use(express.static("arquivos")); //usando o css


//conf a aplicacao para usar ejs
aplicacao.set("views", "./views");
aplicacao.set("view engine","ejs");




aplicacao.get("/",(req,res) => {

  console.log("Seja Bem vindo");
  res.render("bv");
   //o pacote inteiro de css
});

//usar no browser, criando rota
  aplicacao.get("/calculadora",(req,res) => {

    console.log("Abrindo calculadora");
    res.render("calculadora");
     //o pacote inteiro de css
});



aplicacao.get("/vitrine",(req,res) => {

  console.log("Abrindo vitrine");
  res.render("vitrine");
});


aplicacao.get("/home",(req,res) => {

  console.log("Abrindo Home");
  res.render("Acesso");

});


aplicacao.listen(porta,() => console.log("Servidor NODEJS no ar na porta 3000"));
//pra iniciar: npm start
//na net localhost:3000