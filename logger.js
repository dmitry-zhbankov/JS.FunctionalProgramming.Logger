function log(message) {
    console.log(message);
}

function log2(...msgArgs) {
    let message = msgArgs.join(" | ");
    log(message);
}

function log3(...msgArgs) {
    let date = new Date();
    let dateStr = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    log2(dateStr, ...msgArgs);
}

log("Hello World !");
log2("Hello", "World", "!");
log3("Hello", "World", "!");


//Functional pattern

let baseLogger = {};
(function (context) {
    context.log = function (message) {
        console.log(message);
    };
})(baseLogger);

let tableLogger = {};
tableLogger.log = function (...msgArgs) {
    let message = msgArgs.join(" | ");
    baseLogger.log(message);
};

let tableTimeLogger = {};
tableTimeLogger.log = function (...msgArgs) {
    let date = new Date();
    let dateStr = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    tableLogger.log(dateStr, ...msgArgs);
};

baseLogger.log("Hello World !");
tableLogger.log("Hello", "World", "!");
tableTimeLogger.log("Hello", "World", "!");


//Class inheritance pattern

class BaseLogger {
    log(message) {
        console.log(message);
    };
}

class TableLogger extends BaseLogger {
    log(...msgArgs) {
        let message = msgArgs.join(" | ");
        super.log(message);
    };
}

class TableTimeLogger extends TableLogger {
    log(...msgArgs) {
        let date = new Date();
        let dateStr = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
        super.log(dateStr, ...msgArgs);
    }
}

baseLogger = new BaseLogger();
baseLogger.log("Hello World !");

tableLogger = new TableLogger();
tableLogger.log("Hello", "World", "!");

tableTimeLogger = new TableTimeLogger();
tableTimeLogger.log("Hello", "World", "!");


//Prototypical pattern

function BaseLogger2() {
}

BaseLogger2.prototype.log = function (message) {
    console.log(message);
};

function TableLogger2() {
    BaseLogger2.call(this);
}

TableLogger2.prototype.log = function (...msgArgs) {
    let message = msgArgs.join(" | ");
    BaseLogger2.prototype.log(message);
};

function TableTimeLogger2() {
    TableLogger2.call(this);
}

TableTimeLogger2.prototype.log = function (...msgArgs) {
    let date = new Date();
    let dateStr = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    TableLogger2.prototype.log(this, dateStr, ...msgArgs);
};

let baseLogger2 = new BaseLogger2();
baseLogger2.log("Hello World !");

let tableLogger2 = new TableLogger2();
tableLogger2.log("Hello", "World", "!");

let tableTimeLogger2 = new TableTimeLogger2();
tableTimeLogger2.log("Hello", "World", "!");
