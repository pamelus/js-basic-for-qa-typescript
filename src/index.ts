import { Animal } from './Animal';
import { Cat } from './Cat';
import Dog from './Dog';

const dogs: Dog[] = [
    new Dog('Leslie'),
    new Dog('Szarik'),
];

const cats: Cat[] = [
    new Cat('Nyga'),
    new Cat('Bonifacy'),
    new Cat('Filemon')
];

const animals: Animal[] = [...dogs, ...cats];

for (let animal of animals) {
    animal.makeSound(); 
}
