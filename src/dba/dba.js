/*

DB Acess -> o DBA será utilizado para acessar o MongoDB, para consultar e alterar objetos na nuvem


*/

const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;
var Personagem = modelo.Personagem;


async function recuperarTotalMana(message,dbo){
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  qnt = 100 - consulta.mana ;
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}

async function recuperar50Mana(message,dbo){
  const qnt = 50
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}

async function recuperar20Mana(message,dbo){
  const qnt = 20
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}

async function recuperar10Mana(message,dbo){
  const qnt = 10
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}

async function recuperar5Mana(message,dbo){
  const qnt = 5
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function recuperar3Mana(message,dbo){
  const qnt = 3
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function recuperar2Mana(message,dbo){
  const qnt = 2
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function recuperar1Mana(message,dbo){
  const qnt = 1
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({nome: message.content.slice(15)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}

async function gastar1Mana(message,dbo){
  const qnt = 1
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({nome: message.content.slice(15)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function aumentar5Pontos(message,dbo){
  
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  
  return;
}




 async function consultaNome(message,dbo){
  console.log(message.content.slice(6));
  console.log(message.author.id)
  const consulta = await dbo.collection('Personagens').findOne({id_discord : parseInt(message.author.id) });
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

module.exports = {consultaNome,recuperarTotalMana,recuperar50Mana,recuperar20Mana,recuperar10Mana,recuperar3Mana,recuperar2Mana,recuperar1Mana};