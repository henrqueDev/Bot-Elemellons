
const { MessageEmbed, Client } = require('discord.js');
const bot = new Client();
const ytdl = require('ytdl-core');
verify = false;

fila= [];

bot.login("ODYxMjYzNzE0NDI5ODI5MTMy.YOHQVw.c1QcfBVX6k5S8Z-jJTp8TYpUFTc");
bot.once('ready',() => {
  console.log(`Bot online: ${bot.user.tag}!!`)
});

 
bot.on('message', async (message) =>{

  if (message.content.slice(0,5) === '!info'){
    
      //const voiceChannel = message.member.voice.channel;
      //const connection = await voiceChannel.join();
      const exampleEmbed = new MessageEmbed()
      exampleEmbed.setColor('#0099ff')
      exampleEmbed.setTitle('Aliexpress')
      exampleEmbed.setURL('https://pt.aliexpress.com/?hcAppId=1252&hcFromCode=qABppSe50&hcSessionId=26-1252-3e66e84f-53de-49aa-8937-f8590e8c30b6&spm=service_hall.24428829.daohang.id_kt1o4hiz')
   /*   exampleEmbed.setAuthor({ name: 'Aliexpress', iconURL: 'https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg', url: 'https://discord.js.org' })*/
      //exampleEmbed.setDescription('Some description here')
      exampleEmbed.setThumbnail('https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg')
    
  exampleEmbed.addField('Bem vindo ao servidor da nossa !!', 'Somos a maior [empresa](https://pt.aliexpress.com/?hcAppId=1252&hcFromCode=qABppSe50&hcSessionId=26-1252-3e66e84f-53de-49aa-8937-f8590e8c30b6&spm=service_hall.24428829.daohang.id_kt1o4hiz) de venda de produtos online de todo o mundo! Obrigado por optar por nossos serviços!', true)
  exampleEmbed.setImage('https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg')
  exampleEmbed.setTimestamp()
  exampleEmbed.setFooter('Alibaba LTDA', 'https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg');  
  message.channel.send(exampleEmbed);
}else if(message.content=== '!FAQ'){
  const exampleEmbed = new MessageEmbed()
      //exampleEmbed.setColor('#0099ff')
      exampleEmbed.setTitle('Aliexpress')
      exampleEmbed.setURL('https://pt.aliexpress.com/?hcAppId=1252&hcFromCode=qABppSe50&hcSessionId=26-1252-3e66e84f-53de-49aa-8937-f8590e8c30b6&spm=service_hall.24428829.daohang.id_kt1o4hiz')
     /* exampleEmbed.setAuthor({ name: 'Alibaba', iconURL: 'https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg', url: 'https://pt.aliexpress.com/?hcAppId=1252&hcFromCode=qABppSe50&hcSessionId=26-1252-3e66e84f-53de-49aa-8937-f8590e8c30b6&spm=service_hall.24428829.daohang.id_kt1o4hiz' })*/
      //exampleEmbed.setDescription('Some description here')
      exampleEmbed.setThumbnail('https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg')
    
  exampleEmbed.addField('Dúvidas e FAQ', 'Perguntas frequentes', true)
  exampleEmbed.setImage('https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg')
  exampleEmbed.addFields(
		{ name: '1.', value: '[Quem somos nós?](https://sell.aliexpress.com/__pc/faq.htm)' },
	//	{ name: '\u200B', value: '\u200B' },
		{ name: '2.', value: '[Não recebi o meu pedido, o que eu faço?](https://servicehall.aliexpress.com/knowledgeDetail?hcAppId=1252&hcFromCode=qABppSe50&hcSessionId=26-1252-3e66e84f-53de-49aa-8937-f8590e8c30b6&knowledgeId=fe85e634ebc044478934eb6334b9885f&spm=service_hall.24421127.top.fe85e634ebc044478934eb6334b9885f)'},
		{ name: '3.', value: '[Como abro uma disputa?](https://servicehall.aliexpress.com/knowledgeDetail?hcAppId=1252&hcFromCode=qABppSe50&hcSessionId=26-1252-3e66e84f-53de-49aa-8937-f8590e8c30b6&knowledgeId=0f9658951da24fe19326b6d3072acbd5&spm=service_hall.24421127.top.0f9658951da24fe19326b6d3072acbd5)'},
	)
  exampleEmbed.setTimestamp()
  exampleEmbed.setFooter('Alibaba LTDA', 'https://fdr.com.br/wp-content/uploads/2021/05/aliexpress-750x393.jpg');  
  message.channel.send(exampleEmbed);
}})


  