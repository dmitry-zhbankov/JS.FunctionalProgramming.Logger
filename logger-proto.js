//Prototypical pattern

function BaseLogger() {
}

BaseLogger.prototype.log = function (message) {
    console.log(message);
};

function TableLogger() {
    BaseLogger.call(this);
}

TableLogger.prototype = Object.create(BaseLogger.prototype);
TableLogger.prototype.constructor = TableLogger;

TableLogger.prototype.log = function (...msgArgs) {
    let message = msgArgs.join(" | ");
    this.__proto__.__proto__.log.call(this.__proto__, message);
};

function TableTimeLogger() {
    TableLogger.call(this);
}

TableTimeLogger.prototype = Object.create(TableLogger.prototype);
TableTimeLogger.prototype.constructor = TableTimeLogger;

TableTimeLogger.prototype.log = function (...msgArgs) {
    let date = new Date();
    let dateStr = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    this.__proto__.__proto__.log.call(this.__proto__, dateStr, ...msgArgs);
};

let baseLogger = new BaseLogger();
baseLogger.log("Hello World !");

let tableLogger = new TableLogger();
tableLogger.log("Hello", "World", "!");

let tableTimeLogger = new TableTimeLogger();
tableTimeLogger.log("Hello", "World", "!");
