/****** 

1- !Info -> Concluído 
2- !recuperarMana -> Não iniciado
3- !gastarMana -> Não iniciado
4- !recuperarVida -> Não iniciado
5- !perderVida -> Não iniciado
6- !uparNivel -> Não iniciado
7- !aumentarSensibilidade -> Não iniciado







                                                        *****/
const {consultaNome} = require('./dba/dba.js');                                              
const Discord = require('discord.js');
const bot = new Discord.Client();
const modelo = require('./model/personagem');
//const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;
//var Personagem = modelo.Personagem;
//var atr = new Atributos(38,47,37,97,90,62,65,20);
//var personagem = new Personagem(1,"Sion",atr,20,8,14, 7,"https://img.ifunny.co/images/48f343f9a0af7eab5c718607f2404978aecdaa2e1c63c279fafcccbd2099511e_1.jpg");
//console.log(JSON.stringify(personagem.atributos) + "  DEU CERTO");

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const url = 'mongodb+srv://dbUser:lhs157@cluster0.mhve7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
bot.login("")
mongodb.connect(url, async (error,banco) => {

  if(error){
    throw error;
  }
  const dbo = banco.db('Elemellons');
  console.log("MongoDB e Bot Conectados!!");
//  const obj = personagem;
//db.customers.find({"tags": { $in: ["LUIZ"] }}).pretty()
  
  const mudança = {
    $set:{
      nome:"m"
    }
  };
  //const change = await dbo.collection('Personagens').updateOne({id_discord: 2},mudança);
 
  //await consulta.forEach(doc => console.log(doc));
  
  dbo.collection("Personagens").insertOne(personagem, (doc) =>{
    console.log(doc);
  })


bot.on("message", async (message) => {


  if(message.content.slice(0,5).toLowerCase() == "!info"){
    //mostrarPersonagem(message);
    consultaNome(message,dbo);
   
    }
  
})
  
 

});
