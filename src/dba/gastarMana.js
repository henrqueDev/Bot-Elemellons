
const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;



async function gastar1Mana(message,dbo){
  const qnt = 1
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


module.exports = {gastar1Mana,gastar10Mana}