
const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;



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
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}

module.exports = {recuperarTotalMana,recuperar50Mana,recuperar20Mana,recuperar10Mana,recuperar5Mana,recuperar3Mana,recuperar2Mana,recuperar1Mana};