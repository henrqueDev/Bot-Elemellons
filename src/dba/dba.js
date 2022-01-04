const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;
var Personagem = modelo.Personagem;

function consultaId(id){
  return;
}

 async function consultaNome(message,dbo){
  console.log(message.content.slice(6));
    
  const consulta = await dbo.collection('Personagens').findOne({nome : message.content.slice(6) });
  const atributos_personagem = consulta.atributos;
  const msgPersonalizada = new Discord.MessageEmbed();
  msgPersonalizada.setTitle(`${consulta.nome}`);
  msgPersonalizada.setDescription('Atributos');
  for(k in atributos_personagem){
    console.log(atributos_personagem[k].normal);
    
    msgPersonalizada.addField(atributos_personagem[k].nome,`
    Normal -> ${atributos_personagem[k].normal}
    Bom -> ${atributos_personagem[k].bom}
    Extremo -> ${atributos_personagem[k].extremo}
    `)
  }
  
  msgPersonalizada.setThumbnail(consulta.urlImg);
  console.log(consulta);
  
  return message.channel.send(msgPersonalizada);
}

module.exports = {consultaNome};