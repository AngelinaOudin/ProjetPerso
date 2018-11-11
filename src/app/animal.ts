export class Animal {

    id: number;
    nom: string;
    espece: string;
    age: number;
    sexe: string;

    constructor(nom?: string, espece?: string, age?: number) {
        this.nom = (nom === undefined) ? '' : nom;
        this.espece = (espece === undefined) ? '' : espece;
        this.age = (age == undefined) ? 0 : age;
    }
}
