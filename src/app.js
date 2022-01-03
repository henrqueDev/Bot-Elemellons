const Discord = require('discord.js');
const bot = new Discord.Client();
const modelo = require('./model/personagem');
//const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;
var Personagem = modelo.Personagem;
//var atr = new Atributos(38,47,37,97,90,62,65,20);
//var personagem = new Personagem(1,atr,20,8,14, 7);
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
  //const obj = personagem;
//db.customers.find({"tags": { $in: ["LUIZ"] }}).pretty()
  
  /*const mudança = {
    $set:{
      nome:"m"
    }
  };*/
  //const change = await dbo.collection('Personagens').updateOne({id_discord: 2},mudança);
 
  //await consulta.forEach(doc => console.log(doc));
  
bot.on("message", async (message) => {
  if(message.content.slice(0,5).toLowerCase() == "!info"){
    const consulta = await dbo.collection('Personagens').findOne({id_discord : 1});
    const msgPersonalizada = new Discord.MessageEmbed();
    msgPersonalizada.setDescription()
    console.log(consulta);
    message.channel.send(consulta.vida);
    }
  
})
  
 /* dbo.collection('Personagens').insertOne(personagem , (erro,resultado) =>{
    if(erro) throw erro;
    console.log('1 novo  personagem inserido');
    banco.close();
  });
*/

});
