/****** 

1- !Info -> Em andamento
2- !recuperarMana -> Não iniciado
3- !gastarMana -> Não iniciado
4- !recuperarVida -> Não iniciado
5- !perderVida -> Não iniciado
6- !uparNivel -> Não iniciado
7- !aumentarSensibilidade -> Não iniciado







                                                        *****/
const Discord = require('discord.js');
const bot = new Discord.Client();
const modelo = require('./model/personagem');
//const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;
var Personagem = modelo.Personagem;
//var atr = new Atributos(38,47,37,97,90,62,65,20);
//var personagem = new Personagem(1,"Sion",atr,20,8,14, 7);
//console.log(JSON.stringify(personagem.atributos) + "  DEU CERTO");

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const url = 'mongodb+srv://dbUser:lhs157@cluster0.mhve7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
bot.login("ODYxMjYzNzE0NDI5ODI5MTMy.YOHQVw.Cnn37ahdOytelInI7lnRDiqNKug")
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
  
bot.on("message", async (message) => {
  if(message.content.slice(0,5).toLowerCase() == "!info"){
    console.log(message.content.slice(6));
    
    const consulta = await dbo.collection('Personagens').findOne({id_discord : parseInt(message.content.slice(6))});
    const atributos_personagem = consulta.atributos;
    const msgPersonalizada = new Discord.MessageEmbed();
    msgPersonalizada.setTitle(`${consulta.nome}`);
    msgPersonalizada.setDescription('123');
    msgPersonalizada.addField('Atributos',`
    Força -> Normal: ${atributos_personagem.forca.normal} // Bom: ${atributos_personagem.forca.bom}  // Extremo: ${atributos_personagem.forca.extremo}
    Constituição -> Normal: ${atributos_personagem.constituicao.normal} // Bom: ${atributos_personagem.constituicao.normal} // Extremo: ${atributos_personagem.constituicao.extremo}
    `);
    console.log(consulta);
    message.channel.send(msgPersonalizada);
    }
  
})
  /*
  dbo.collection('Personagens').insertOne(personagem , (erro,resultado) =>{
    if(erro) throw erro;
    console.log('1 novo  personagem inserido');
    banco.close();
  });*/


});