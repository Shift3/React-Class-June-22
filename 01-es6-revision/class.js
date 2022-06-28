export class Animal{
  constructor(type, legs){
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Loud noise'){
    console.log('Animal makes this sound:', sound);
  }

  static returnTen(){
    return 10;
  }

  get meatData(){
    return `This animal of type: ${this.type}`;
  }
}

export class Dog extends Animal{
  constructor(type, legs, tail){
    super(type, legs);
    this.tail = tail;
  }

  makeNoise(sound = 'Bark'){
    console.log('Dog makes this sound:', sound);
  }
}
