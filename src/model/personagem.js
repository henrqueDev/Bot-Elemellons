class Personagem {
  constructor(id_discord,nome,atributos,mana,vida,xp,sensibilidade_magica){
    this.id_discord = id_discord;
    this.nome = nome;
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


class Atributos{
  constructor(forca,constituicao,tamanho,destreza,aparencia,inteligencia,poder,educacao){
    this.forca = new calc_normalbomextremo(forca);
    this.constituicao = new calc_normalbomextremo(constituicao);
    this.tamanho = new calc_normalbomextremo(tamanho);
    this.destreza = new calc_normalbomextremo(destreza);
    this.aparencia = new calc_normalbomextremo(aparencia);
    this.inteligencia = new calc_normalbomextremo(inteligencia);
    this.poder = new calc_normalbomextremo(poder);
    this.educacao = new calc_normalbomextremo(educacao);
  }

}
class calc_normalbomextremo{
  constructor(normal){
    this.normal = normal;
    this.bom = Math.trunc(normal/2);
    this.extremo = Math.trunc(normal/5);
  }
}

module.exports.Personagem = Personagem;
module.exports.Atributos = Atributos;