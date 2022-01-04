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
    this.forca = new calc_normalbomextremo(forca,"Força");
    this.constituicao = new calc_normalbomextremo(constituicao,"Constituição");
    this.tamanho = new calc_normalbomextremo(tamanho,"Tamanho");
    this.destreza = new calc_normalbomextremo(destreza,"Destreza");
    this.aparencia = new calc_normalbomextremo(aparencia, "Aparência");
    this.inteligencia = new calc_normalbomextremo(inteligencia,"Inteligência");
    this.poder = new calc_normalbomextremo(poder,"Poder");
    this.educacao = new calc_normalbomextremo(educacao,"Educação");
  }

}
class calc_normalbomextremo{
  constructor(normal, nome){
    this.nome = nome
    this.normal = normal;
    this.bom = Math.trunc(normal/2);
    this.extremo = Math.trunc(normal/5);
  }
}

module.exports.Personagem = Personagem;
module.exports.Atributos = Atributos;