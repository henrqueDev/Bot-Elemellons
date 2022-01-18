/*
gastarMana.js


NESTE ARQUIVO SE ENCONTRA AS FUNCTIONS PARA A FUNCIONALIDADE GASTAR MANA


*/


const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;



async function gastar1Mana(message,dbo){
  const qnt = 1;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
    const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

    return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
  
  }else{

    return message.channel.send(`O personagem ${consulta.nome} não possui mana suficiente!`);
  
  }
}


async function gastar2Mana(message,dbo){
  const qnt = 2;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
  }else{
    return message.channel.send(`O personagem ${consulta.nome} não possui mana suficiente!`);
  }

}



async function gastar3Mana(message,dbo){
  const qnt = 3;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
  }else{
    
    return message.channel.send(`O personagem ${consulta.nome} não possui mana suficiente!`);

  }
}


async function gastar5Mana(message,dbo){
  const qnt = 5;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
  }else{
    return message.channel.send(`O personagem  ${consulta.nome} não possui mana suficiente!`);
  }

}


async function gastar10Mana(message,dbo){
  const qnt = 10;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
  }else{
    return message.channel.send(`O personagem ${consulta.nome} não possui mana suficiente!`);
  }

}


async function gastar15Mana(message,dbo){
  const qnt = 15;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} recuperou +${qnt} de mana!`);
  }else{
    return message.channel.send(`O personagem ${consulta.nome} não possui mana sufuciente!`);
  }

}


async function gastar20Mana(message,dbo){
  const qnt = 20;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
  }else{
    return message.channel.send(`O personagem ${consulta.nome} não possui mana suficiente!`);
  }

}


async function gastar50Mana(message,dbo){
  const qnt = 50;
  const consulta = await dbo.collection('Personagens').findOne({ id_discord: parseInt(message.author.id)});
  console.log(consulta)
  if(consulta.mana - qnt >= 0){
  const mudança = {
    $set:{
      mana: consulta.mana-qnt
    }
  };
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id)},mudança);

  return message.channel.send(`O personagem ${consulta.nome} gastou +${qnt} de mana!`);
  }else{
    return message.channel.send(`O personagem ${consulta.nome} não possui mana suficiente!`);
  }

}




module.exports = {gastar1Mana,gastar2Mana,gastar3Mana,gastar10Mana,gastar15Mana,gastar20Mana,gastar50Mana}