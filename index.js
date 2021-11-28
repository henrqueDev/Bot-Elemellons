const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
//const mongoose = require('mongoose');
const mongodb = require('mongodb').MongoClient;

class personagem {
  constructor(id_discord,nome,idade,atributos,mana,vida,xp,sensibilidade_magica){
    this.id_discord = id_discord;
    this.atributos = atributos;
    this.nome = nome;
    this.idade = idade;
    this.mana = mana;
    this.vida = vida;
    this.xp = xp;
    this.sensibilidade_magica = sensibilidade_magica;
  }
  
  alterar_mana(qnt_mana){
    this.mana += qnt_mana;
  }
  alterar_vida(qnt_vida){
    this.vida += qnt_vida;
  }


}

class calc_normalbomextremo{
  constructor(normal){
    this.normal = normal;
    this.bom = Math.trunc(normal/2);
    this.extremo = Math.trunc(normal/5);
  }
}

class atributos{
  constructor(forca,constituicao,tamanho,destreza,aparencia,inteligencia,poder,educação){
    this.forca = new calc_normalbomextremo(forca);
    this.constituicao = new calc_normalbomextremo(constituicao);
    this.tamanho = new calc_normalbomextremo(tamanho);
    this.destreza = new calc_normalbomextremo(destreza);
    this.aparencia = new calc_normalbomextremo(aparencia);
    this.inteligencia = new calc_normalbomextremo(inteligencia);
    this.poder = new calc_normalbomextremo(poder);
    this.educação = new calc_normalbomextremo(educação);
  }}

/*AQUI !!!!!*/

class especialidades{
	constructor(){
	
	}

}

  var atr = new atributos(38,47,37,97,90,62,65,20);


  var sion = new personagem(1,'Sion',60,atr,20,8,14);
  



const url = 'mongodb+srv://dbUser:lhs157@cluster0.mhve7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongodb.connect(url, async (error,banco) => {
  if(error){
    throw error;
  }
  const dbo = banco.db('Elemellons');
  const obj = sion;
//db.customers.find({"tags": { $in: ["LUIZ"] }}).pretty()
  const consulta = await dbo.collection('Personagens').find({});
  /*const mudança = {
    $set:{
      nome:"mijo"
    }
  };
  const change = await dbo.collection('Personagens').updateOne({id_discord: 2},mudança);
 */
  await consulta.forEach(doc => console.log(doc));

  /*
  dbo.collection('Personagens').insertOne(obj , (erro,resultado) =>{
    if(erro) throw erro;
    console.log('1 novo  personagem inserido');
    banco.close();
  });*/


});

verify = false;
fila = [];
counter = 0;


/*

- Gastar_Recupermana
- Perder_GanharVida
- get_atributo
- set_atributo


 */
/*
class personagem {
  constructor(id_discord,atributos,mana,vida,xp,sensibilidade_magica){
    this.id_discord = id_discord;
    this.atributos = atributos;
    this.mana = mana;
    this.vida = vida;
    this.xp = xp;
    this.sensibilidade_magica = sensibilidade_magica;
  }
  
  alterar_mana(qnt_mana){
    this.mana += qnt_mana;
  }
  alterar_vida(qnt_vida){
    this.vida += qnt_vida;
  }


}

class calc_normalbomextremo{
  constructor(normal){
    this.normal = normal;
    this.bom = Math.trunc(normal/2);
    this.extremo = Math.trunc(normal/5);
  }
}

class atributos{
  constructor(forca,constituicao,tamanho,destreza,aparencia,inteligencia,poder,educação){
    this.forca = new calc_normalbomextremo(forca);
    this.constituicao = new calc_normalbomextremo(constituicao);
    this.tamanho = new calc_normalbomextremo(tamanho);
    this.destreza = new calc_normalbomextremo(destreza);
    this.aparencia = new calc_normalbomextremo(aparencia);
    this.inteligencia = new calc_normalbomextremo(inteligencia);
    this.poder = new calc_normalbomextremo(poder);
    this.educação = new calc_normalbomextremo(educação);
  }
}
var atr = [new atributos(38,47,37,97,90,62,65,20)];


var mijao = new personagem(1,atr,20,8,14);

console.log(JSON.stringify(mijao.atributos) + "  DEU CERTO");



const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.login("ODYxMjYzNzE0NDI5ODI5MTMy.YOHQVw.bnVW2u61fg85zJX_3pZwg-_3UxU");
bot.once('ready',() => {
  console.log(`Bot online: ${bot.user.tag}!!`)
});

const bot_recursivo = (connection,msg) => {
  if(fila.length > 0){
    const watcher =  connection.play(
      ytdl(fila[0], { filter: 'audioonly' }));
    watcher.on('speaking', (response) => {
      if (response == 0 || msg == "!skip"){
        fila.shift();
        console.log(fila);
        verify = false;
        bot_recursivo(connection);
      }
    });
    verify = true;
    console.log(`Tocando ${fila[0]} `);
  }else{
    console.log('Fila vazia!!!');
  }
      };
/*
bot.on('message', async (message) =>{

  if (message.content.slice(0,5) === '!play'){
    
      const voiceChannel = message.member.voice.channel;
      const connection = await voiceChannel.join();
  
      console.log(message.content);
      
      if(verify === false){
        message.channel.send(`Adicionado pra fila!`);
        fila.push(message.content.slice(6));
        bot_recursivo(connection,message.content);
      
        }else{
          message.channel.send(`Adicionado pra fila!`);
          fila.push(message.content.slice(6)); 
      }}else if(message.content.slice(0,5) == "!d100"){
        message.channel.send(getRandomIntInclusive(1,100));
      }else{

      }
  });
*/

/*
bot.on('message', async (message) => {
  if (message.content.slice(0,5) === '!play'){
  

    const voiceChannel = message.member.voice.channel;
    const connection = await voiceChannel.join();

}});



bot.on('guildMemberAdd', async (member) => {
  let guild = bot.guilds.cache.get('777234442448142387');
  let channel = bot.channels.cache.get('777234442892214284');
  console.log('opa');
  if(guild != member.guild){
    return console.log('SAI DAEKKKKKKKKKKJJJJJJJJJJ');
  }else{
    let embed = new Discord.MessageEmbed();
    embed.setColor("#0000ff");
    embed.setAuthor(member.user.tag, member.user.displayAvatarURL());
    embed.setTitle(`OLÁAAAA`);
  
    await channel.send(embed);
  }
});*/