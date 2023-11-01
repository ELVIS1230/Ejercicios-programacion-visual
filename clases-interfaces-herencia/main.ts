interface interfaceVehiculos {
    marca: string
    color: string
    acelerar():void
    encenderLuces():void
}

class VehiculoTerrestre implements interfaceVehiculos {
        constructor(public marca:string , public color:string ){}
        acelerar():void{
            console.log(`El vehiculo de la marca ${this.marca} esta acelerando`)
        }
        encenderLuces():void {
            console.log(`El vehiculo de color ${this.color} prendio las luces`)
        }
}

class Camion extends VehiculoTerrestre {}
class Camioneta extends VehiculoTerrestre {}
class Automovil extends VehiculoTerrestre {}

class VehiculoMaritimo implements interfaceVehiculos {
    constructor(public marca: string, public color: string) {}

    acelerar(): void {
        console.log(`El ${this.marca} ${this.color} está navegando a toda velocidad.`);
    }

    encenderLuces(): void {
        console.log(`El ${this.marca} ${this.color} está asustando a los peces con la luz.`);
    }
}

class Barco extends VehiculoMaritimo {}
class Yate extends VehiculoMaritimo {}

class VehiculoAereo implements interfaceVehiculos {
    constructor(public marca: string, public color: string) {}

    acelerar(): void {
        console.log(`El ${this.marca} ${this.color} esta volandooooo.`);
    }

    encenderLuces(): void {
        console.log(`El ${this.marca} ${this.color} está brillando.`);
    }
}

class Avion extends VehiculoAereo {}
class Avioneta extends VehiculoAereo {}

const camion = new Camion("Volvo", "Rojo" );
// Clases que heredan de VehiculoAereo
const avioncito = new Avion("Boeing 747", "Verder");
const yate = new Yate("Yamaha", "Amarillo" );

console.log(camion) 
camion.acelerar()

console.log(avioncito) 
avioncito.acelerar()


console.log(yate) 
yate.encenderLuces();   

