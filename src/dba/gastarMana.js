
const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;



async function gastar1Mana(message,dbo){
  const qnt = 1;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function gastar2Mana(message,dbo){
  const qnt = 2;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function gastar3Mana(message,dbo){
  const qnt = 3;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function gastar5Mana(message,dbo){
  const qnt = 5;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function gastar10Mana(message,dbo){
  const qnt = 10;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
}


async function gastar15Mana(message,dbo){
  const qnt = 15;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
}


async function gastar20Mana(message,dbo){
  const qnt = 20;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
}


async function gastar50Mana(message,dbo){
  const qnt = 50;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
}

/*
async function gastar100Mana(message,dbo){
  const qnt = 100;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
}
*/


module.exports = {gastar1Mana,gastar2Mana,gastar3Mana,gastar10Mana,gastar15Mana,gastar20Mana,gastar50Mana}