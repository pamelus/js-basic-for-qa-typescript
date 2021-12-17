import { Animal } from "./Animal";

export class Cat implements Animal {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(this.name + ' meows!');
    }
}