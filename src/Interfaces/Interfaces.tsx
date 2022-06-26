export interface CarPart {
    image: string,
    name: string,
    dateOfProduction: string,
    specification: {},
}

export interface Brakes extends CarPart {
    specification: {
        brakeDiscType: string,
        brakeDiscDiameter: string,
        brakePadsWidth: string,
        caliperDiameter: string,
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
