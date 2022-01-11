const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;







async function recuperar1Vida(message,dbo){
  const qnt = 1
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida + qnt <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}}



async function recuperar2Vida(message,dbo){
  const qnt = 2
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida + qnt <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}}



async function recuperar3Vida(message,dbo){
  const qnt = 3
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - qnt)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}}



async function recuperar5Vida(message,dbo){
  const qnt = 5
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida + qnt <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}
}



async function recuperar10Vida(message,dbo){
  const qnt = 10
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida + qnt <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}}



async function recuperar15Vida(message,dbo){
  const qnt = 15
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}}



async function recuperar20Vida(message,dbo){
  const qnt = 20
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.vida + qnt <= 100){
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}
}



async function recuperar50Vida(message,dbo){
  const qnt = 50
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  if(consulta.vida + qnt <= 100){
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}else{
  const mudança = {
    $set:{
      mana: consulta.vida+(100 - consulta.vida)
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}
}



async function recuperarTotalVida(message,dbo){
  
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  const qnt = 100 - consulta.vida;
  console.log(consulta)
  const mudança = {
    $set:{
      mana: consulta.vida+qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de vida!`);
}

module.exports = {recuperar1Vida,recuperar2Vida,recuperar3Vida,recuperar5Vida, recuperar10Vida, recuperar15Vida, recuperar20Vida, recuperar50Vida, recuperarTotalVida}