class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.inventory = {
        'coins': 10,
        'keys': 1
      }
    }
    attack(target) {
        if (this.health > 0) {
          const damage = this.strength;
          console.log(
            `${this.name} attacks ${target.name} and causes ${damage} damage points`
          );
          target.health -= damage;
          if (target.health > 0) {
            console.log(`${target.name} has ${target.health} health points left`);
          } else {
            target.health = 0;
            const bonusXP = 10;
            const bonusCoin = 10;
            const bonusKey = 1;
            console.log(
              `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusCoin} coins and ${bonusKey} key `
            );
            this.xp += bonusXP;
            this.inventory['coins'] += bonusCoin
            this.inventory['keys'] += bonusKey
          }
        } else {
          console.log(`${this.name} can't attack (they've been eliminated)`);
        }
      }
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.inventory['coins']} coins and ${this.inventory['keys']} key(s)`;
    }
  }
let aurora = new Character('Aurora', 150, 20);
console.log(aurora.describe())