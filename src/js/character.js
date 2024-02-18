export default class Character {
    constructor(name, type) {        
                
        if (name.length < 2 || name.length > 10) {
           throw new Error('Invalid name length');
        }
        
        if (
            type !== 'Bowman' &&
            type !== 'Daemon' &&
            type !== 'Magician' &&
            type !== 'Swordsman' &&
            type !== 'Undead' &&
            type !== 'Zombie'
          ) {            
            throw new Error('Invalid character type');
          }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;       
    }    
}

