import { Animal } from "./Animal";

export default class Dog implements Animal {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(this.name + ' barks!');
    }
}