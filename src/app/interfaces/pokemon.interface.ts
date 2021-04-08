
export default interface Pokemon {
    id:number;
    name:string;
    weight:number;
    height:number;
    moves: Array<any>;
    types: Array<any>;
    sprites:Sprite;
}

interface Sprite{
    back_default: string;
    front_default: string;
}