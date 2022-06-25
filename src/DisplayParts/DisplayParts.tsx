import { CarPart } from '../Interfaces/Interfaces';

export function DisplayParts(carPart: CarPart) {
    return (
        <div>
            <h1>carPart.image</h1>
            <h1>carPart.name</h1>
            <h1>carPart.dateOfProduction</h1>
        </div>
    );
}
