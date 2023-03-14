const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage() {
    if (this.mana >= 15) {
      this.mana -= 15;
      return {
        dano: Math.ceil(
          Math.random() * (this.intelligence * 2 - this.intelligence) +
            this.intelligence
        ),
        mana: this.mana,
      };
    } else {
      return 'Não possui mana suficiente';
    }
  },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage() {
    return Math.ceil(
      Math.random() * (this.strength * this.weaponDmg - this.strength) +
        this.strength
    );
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage() {
    return Math.ceil(Math.random() * (this.strength - 15) + 15);
  },
};

const battleMembers = { mage, warrior, dragon };

console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());

const gameActions = {
    // Crie as HOFs neste objeto.
    warrior
  };
