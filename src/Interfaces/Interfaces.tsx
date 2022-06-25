export interface CarPart {
    image: string,
    name: string,
    dateOfProduction: string,
    specification: {},
}

export interface Brakes extends CarPart {
    specification: {
        padWear: string,
        control: string,
        meanFriction: string,
        heatConduct: string,
    }
}

export interface Tires extends CarPart {
    specification: {
        rimDiameter: string,
        speedRating: string,
    }
}

export interface Engine extends CarPart {
    specification: {
        power: string,
        fuelConsumption: string,
        acceleration: string,
    }
}

export interface Gearbox extends CarPart {
    specification: {
        type: string,
    }
}
