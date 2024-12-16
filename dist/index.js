"use strict";
var DocumentsType;
(function (DocumentsType) {
    DocumentsType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentsType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F";
    DocumentsType["IDCard"] = "ID \u043A\u0430\u0440\u0442\u0430";
    DocumentsType["Other"] = "\u0414\u0440\u0443\u0433\u043E\u0435";
})(DocumentsType || (DocumentsType = {}));
class Transport {
    constructor(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner) {
        this._mark = mark;
        this._model = model;
        this._productionYear = productionYear;
        this._vinNumber = vinNumber;
        this._registrationNumber = registrationNumber;
        this._aboutOwner = aboutOwner;
    }
    get mark() {
        return this._mark;
    }
    set mark(value) {
        this._mark = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get productionYear() {
        return this._productionYear;
    }
    set productionYear(value) {
        this._productionYear = value;
    }
    get vinNumber() {
        return this._vinNumber;
    }
    set vinNumber(value) {
        this._vinNumber = value;
    }
    get registrationNumber() {
        return this._registrationNumber;
    }
    set registrationNumber(value) {
        this._registrationNumber = value;
    }
    get aboutOwner() {
        return this._aboutOwner;
    }
    set aboutOwner(value) {
        this._aboutOwner = value;
    }
    displayVehicleDetails() {
        console.log(`Марка: ${this._mark}, Модель: {this._model} VIN-номер: ${this._vinNumber} Регистрационный номер: ${this._registrationNumber}`);
    }
}
class OwnerClass {
    constructor(surname, name, patronymic, birthDate, documentType, documentSerialNumber, documentNumber) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSerialNumber = documentSerialNumber;
        this._documentNumber = documentNumber;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get patronymic() {
        return this._patronymic;
    }
    set patronymic(value) {
        this._patronymic = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this._birthDate = value;
    }
    get documentType() {
        return this._documentType;
    }
    set documentType(value) {
        this._documentType = value;
    }
    get documentSerialNumber() {
        return this._documentSerialNumber;
    }
    set documentSerialNumber(value) {
        this._documentSerialNumber = value;
    }
    get documentNumber() {
        return this._documentNumber;
    }
    set documentNumber(value) {
        this._documentNumber = value;
    }
    displayOwnerDetails() {
        console.log(`Фамилия: ${this._surname}, Имя: ${this._name} Отчество: ${this._patronymic} Дата рождения: ${this._birthDate} Тип документа: ${this._documentType} Серия документа: ${this._documentSerialNumber} Номер документа: ${this._documentNumber}`);
    }
}
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "Economy";
    CarClass["Business"] = "Business";
    CarClass["Luxury"] = "Luxury";
})(CarClass || (CarClass = {}));
var CarType;
(function (CarType) {
    CarType["Sedan"] = "Sedan";
    CarType["SUV"] = "SUV";
    CarType["Hatchback"] = "Hatchback";
})(CarType || (CarType = {}));
class Automobile extends Transport {
    constructor(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner, carType, carClass) {
        super(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner);
        this._carType = carType;
        this._carClass = carClass;
    }
    get carType() {
        return this._carType;
    }
    set carType(value) {
        this._carType = value;
    }
    get carClass() {
        return this._carClass;
    }
    set carClass(value) {
        this._carClass = value;
    }
    displayVehicleDetails() {
        super.displayVehicleDetails();
        console.log(`Тип: ${this._carType}, Класс: ${this._carClass}`);
    }
}
class MotorbikeImpl extends Transport {
    constructor(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner, frameType, isForSport) {
        super(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner);
        this._frameType = frameType;
        this._isForSport = isForSport;
    }
    get frameType() {
        return this._frameType;
    }
    set frameType(value) {
        this._frameType = value;
    }
    get isForSport() {
        return this._isForSport;
    }
    set isForSport(value) {
        this._isForSport = value;
    }
    displayVehicleDetails() {
        super.displayVehicleDetails();
        console.log(`Тип рамы: ${this._frameType}, Для спорта: ${this._isForSport}`);
    }
}
class StorageTV {
    constructor() {
        this.dateCreated = new Date();
        this.storage = [];
    }
    addVehicle(vehicle) {
        this.storage.push(vehicle);
    }
    getVehicles() {
        return this.storage;
    }
}
const owner1 = {
    surname: "Беннедикт",
    name: "Деля",
    patronymic: "Коко",
    birthDate: "1999-11-11",
    documentType: DocumentsType.Passport,
    documentSerialNumber: 1234,
    documentNumber: 567890,
    displayOwnerDetails() {
        console.log(`Владелец: ${this.surname} ${this.name} ${this.patronymic} Документ: ${this.documentType}`);
    }
};
const car1 = new Automobile("Toyota", "Camry", 2020, 123456789, 123, owner1, CarType.Sedan, CarClass.Business);
car1.displayVehicleDetails();
