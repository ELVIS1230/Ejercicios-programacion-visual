var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehiculoTerrestre = /** @class */ (function () {
    function VehiculoTerrestre(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    VehiculoTerrestre.prototype.acelerar = function () {
        console.log("El vehiculo de la marca ".concat(this.marca, " esta acelerando"));
    };
    VehiculoTerrestre.prototype.encenderLuces = function () {
        console.log("El vehiculo de color ".concat(this.color, " prendio las luces"));
    };
    return VehiculoTerrestre;
}());
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Camion;
}(VehiculoTerrestre));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Camioneta;
}(VehiculoTerrestre));
var Automovil = /** @class */ (function (_super) {
    __extends(Automovil, _super);
    function Automovil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automovil;
}(VehiculoTerrestre));
var VehiculoMaritimo = /** @class */ (function () {
    function VehiculoMaritimo(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    VehiculoMaritimo.prototype.acelerar = function () {
        console.log("El ".concat(this.marca, " ").concat(this.color, " est\u00E1 navegando a toda velocidad."));
    };
    VehiculoMaritimo.prototype.encenderLuces = function () {
        console.log("El ".concat(this.marca, " ").concat(this.color, " est\u00E1 asustando a los peces con la luz."));
    };
    return VehiculoMaritimo;
}());
var Barco = /** @class */ (function (_super) {
    __extends(Barco, _super);
    function Barco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Barco;
}(VehiculoMaritimo));
var Yate = /** @class */ (function (_super) {
    __extends(Yate, _super);
    function Yate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Yate;
}(VehiculoMaritimo));
var VehiculoAereo = /** @class */ (function () {
    function VehiculoAereo(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    VehiculoAereo.prototype.acelerar = function () {
        console.log("El ".concat(this.marca, " ").concat(this.color, " esta volandooooo."));
    };
    VehiculoAereo.prototype.encenderLuces = function () {
        console.log("El ".concat(this.marca, " ").concat(this.color, " est\u00E1 brillando."));
    };
    return VehiculoAereo;
}());
var Avion = /** @class */ (function (_super) {
    __extends(Avion, _super);
    function Avion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Avion;
}(VehiculoAereo));
var Avioneta = /** @class */ (function (_super) {
    __extends(Avioneta, _super);
    function Avioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Avioneta;
}(VehiculoAereo));
var camion = new Camion("Volvo", "Rojo");
// Clases que heredan de VehiculoAereo
var avioncito = new Avion("Boeing 747", "Verder");
var yate = new Yate("Yamaha", "Amarillo");
console.log(camion);
camion.acelerar();
console.log(avioncito);
avioncito.acelerar();
console.log(yate);
yate.encenderLuces();
