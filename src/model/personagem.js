class Personagem {
  constructor(id_discord,nome,atributos,mana,vida,xp,sensibilidade_magica,urlImg){
    this.id_discord = id_discord;
    this.nome = nome;
    this.atributos = atributos;
    this.mana = mana;
    this.vida = vida;
    this.xp = xp;
    this.sensibilidade_magica = sensibilidade_magica;
    this.urlImg = urlImg
  }
  
  alterar_mana(qnt_mana){
    this.mana += qnt_mana;
  }
  alterar_vida(qnt_vida){
    this.vida += qnt_vida;
  }
 
  
}


class Atributos{
  constructor(forca,constituicao,tamanho,destreza,aparencia,inteligencia,poder,educacao){
    this.forca = new Calc_NormalBomExtremo(forca,"Força");
    this.constituicao = new Calc_NormalBomExtremo(constituicao,"Constituição");
    this.tamanho = new Calc_NormalBomExtremo(tamanho,"Tamanho");
    this.destreza = new Calc_NormalBomExtremo(destreza,"Destreza");
    this.aparencia = new Calc_NormalBomExtremo(aparencia, "Aparência");
    this.inteligencia = new Calc_NormalBomExtremo(inteligencia,"Inteligência");
    this.poder = new Calc_NormalBomExtremo(poder,"Poder");
    this.educacao = new Calc_NormalBomExtremo(educacao,"Educação");
  }

}
class Calc_NormalBomExtremo{
  constructor(normal, nome){
    this.nome = nome
    this.normal = normal;
    this.bom = Math.trunc(normal/2);
    this.extremo = Math.trunc(normal/5);
  }
}

module.exports.Personagem = Personagem;
module.exports.Atributos = Atributos;
module.exports.Calc_NormalBomExtremo= Calc_NormalBomExtremo;