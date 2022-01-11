const Discord = require('discord.js');
const modelo = require('../model/personagem');

const mongodb = require('mongodb').MongoClient;
var Atributos= modelo.Atributos;



async function aumentar1Ponto(message,dbo){
  let qnt = 1;
  let atributo = message.content.slice(15).trim();
  console.log(message.content.slice(15).trim());
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta.atributos[atributo].normal);
  if(consulta.atributos[atributo].normal != null){
  switch(atributo){
  case 'forca':
    novo_atr = new Atributos(consulta.atributos.forca.normal + qnt,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
     aumento = {
    $set:{
      atributos: novo_atr

  }
  
}
  console.log(novo_atr.forca);
  break;
  case 'constituicao':
   aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal + qnt,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'tamanho':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal + qnt,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'destreza':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal + qnt, consulta.atributos.aparencia.normal, consulta.atributos.inteligencia.normal, consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'aparencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal, consulta.atributos.aparencia.normal + qnt,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
  }
  break;
  case  'inteligencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal + qnt,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
    } 
  }
  break;
  case 'poder':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal+qnt, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'educacao':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal + qnt)
  
    }
    
  }  
  break;
  default:
    console.log()
    break;
}
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id) },aumento)
  return message.channel.send(`O personagem ${consulta.nome} ganhou +${qnt} pontos de ${message.content.slice(16)}`);

}
}


async function aumentar2Pontos(message,dbo){
  let qnt = 2;
  let atributo = message.content.slice(16).trim();
  console.log(message.content.slice(16).trim());
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta.atributos[atributo].normal);
  if(consulta.atributos[atributo].normal != null){
  switch(atributo){
  case 'forca':
    novo_atr = new Atributos(consulta.atributos.forca.normal + qnt,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
     aumento = {
    $set:{
      atributos: novo_atr

  }
  
}
  console.log(novo_atr.forca);
  break;
  case 'constituicao':
   aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal + qnt,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'tamanho':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal + qnt,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'destreza':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal + qnt, consulta.atributos.aparencia.normal, consulta.atributos.inteligencia.normal, consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'aparencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal, consulta.atributos.aparencia.normal + qnt,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
  }
  break;
  case  'inteligencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal + qnt,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
    } 
  }
  break;
  case 'poder':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal+qnt, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'educacao':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal + qnt)
  
    }
    
  }  
  break;
  default:
    console.log()
    break;
}
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id) },aumento)
  return message.channel.send(`O personagem ${consulta.nome} ganhou +${qnt} pontos de ${message.content.slice(16)}`);

}
}

async function aumentar3Pontos(message,dbo){
  let qnt = 3;
  let atributo = message.content.slice(16).trim();
  console.log(message.content.slice(16).trim());
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta.atributos[atributo].normal);
  if(consulta.atributos[atributo].normal != null){
  switch(atributo){
  case 'forca':
    novo_atr = new Atributos(consulta.atributos.forca.normal + qnt,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
     aumento = {
    $set:{
      atributos: novo_atr

  }
  
}
  console.log(novo_atr.forca);
  break;
  case 'constituicao':
   aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal + qnt,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'tamanho':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal + qnt,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'destreza':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal + qnt, consulta.atributos.aparencia.normal, consulta.atributos.inteligencia.normal, consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'aparencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal, consulta.atributos.aparencia.normal + qnt,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
  }
  break;
  case  'inteligencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal + qnt,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
    } 
  }
  break;
  case 'poder':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal+qnt, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'educacao':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal + qnt)
  
    }
    
  }  
  break;
  default:
    console.log()
    break;
}
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id) },aumento)
  return message.channel.send(`O personagem ${consulta.nome} ganhou +${qnt} pontos de ${message.content.slice(16)}`);

}
}


async function aumentar5Pontos(message,dbo){
  let qnt = 5;
  let atributo = message.content.slice(16).trim();
  console.log(message.content.slice(16).trim());
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta.atributos[atributo].normal);
  if(consulta.atributos[atributo].normal != null){
  switch(atributo){
  case 'forca':
    novo_atr = new Atributos(consulta.atributos.forca.normal + qnt,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
     aumento = {
    $set:{
      atributos: novo_atr

  }
  
}
  console.log(novo_atr.forca);
  break;
  case 'constituicao':
   aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal + qnt,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'tamanho':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal + qnt,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'destreza':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal + qnt, consulta.atributos.aparencia.normal, consulta.atributos.inteligencia.normal, consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'aparencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal, consulta.atributos.aparencia.normal + qnt,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
  }
  break;
  case  'inteligencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal + qnt,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
    } 
  }
  break;
  case 'poder':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal+qnt, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'educacao':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal + qnt)
  
    }
    
  }  
  break;
  default:
    console.log()
    break;
}
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id) },aumento)
  return message.channel.send(`O personagem ${consulta.nome} ganhou +${qnt} pontos de ${message.content.slice(16)}`);

}
}


async function aumentar10Pontos(message,dbo){
  let qnt = 10;
  let atributo = message.content.slice(17).trim();
  console.log(message.content.slice(17).trim());
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta.atributos[atributo].normal);
  if(consulta.atributos[atributo].normal != null){
  switch(atributo){
  case 'forca':
    novo_atr = new Atributos(consulta.atributos.forca.normal + qnt,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
     aumento = {
    $set:{
      atributos: novo_atr

  }
  
}
  console.log(novo_atr.forca);
  break;
  case 'constituicao':
   aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal + qnt,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'tamanho':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal + qnt,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'destreza':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal + qnt, consulta.atributos.aparencia.normal, consulta.atributos.inteligencia.normal, consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'aparencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal, consulta.atributos.aparencia.normal + qnt,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
  }
  break;
  case  'inteligencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal + qnt,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
    } 
  }
  break;
  case 'poder':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal+qnt, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'educacao':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal + qnt)
  
    }
    
  }  
  break;
  default:
    console.log()
    break;
}
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id) },aumento)
  return message.channel.send(`O personagem ${consulta.nome} ganhou +${qnt} pontos de ${message.content.slice(16)}`);

}
}


async function aumentar15Pontos(message,dbo){
  let qnt = 15;
  let atributo = message.content.slice(17).trim();
  console.log(message.content.slice(17).trim());
  const consulta = await dbo.collection('Personagens').findOne({id_discord: parseInt(message.author.id) });
  console.log(consulta.atributos[atributo].normal);
  if(consulta.atributos[atributo].normal != null){
  switch(atributo){
  case 'forca':
    novo_atr = new Atributos(consulta.atributos.forca.normal + qnt,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
     aumento = {
    $set:{
      atributos: novo_atr

  }
  
}
  console.log(novo_atr.forca);
  break;
  case 'constituicao':
   aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal + qnt,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'tamanho':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal + qnt,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'destreza':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal + qnt, consulta.atributos.aparencia.normal, consulta.atributos.inteligencia.normal, consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'aparencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal, consulta.atributos.constituicao.normal, consulta.atributos.tamanho.normal, consulta.atributos.destreza.normal, consulta.atributos.aparencia.normal + qnt,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
  
    }
  }
  break;
  case  'inteligencia':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal + qnt,consulta.atributos.poder.normal, consulta.atributos.educacao.normal)
    } 
  }
  break;
  case 'poder':
     aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal+qnt, consulta.atributos.educacao.normal)
  
    }
    
  }
  break;
  case 'educacao':
    aumento = {
      $set:{
        atributos: new Atributos(consulta.atributos.forca.normal,consulta.atributos.constituicao.normal,consulta.atributos.tamanho.normal,consulta.atributos.destreza.normal,consulta.atributos.aparencia.normal,consulta.atributos.inteligencia.normal,consulta.atributos.poder.normal, consulta.atributos.educacao.normal + qnt)
  
    }
    
  }  
  break;
  default:
    console.log()
    break;
}
  const update = await dbo.collection('Personagens').updateOne({id_discord: parseInt(message.author.id) },aumento)
  return message.channel.send(`O personagem ${consulta.nome} ganhou +${qnt} pontos de ${message.content.slice(16)}`);

}
}

module.exports = {aumentar1Ponto,aumentar2Pontos,aumentar3Pontos,aumentar5Pontos,aumentar10Pontos,aumentar15Pontos}