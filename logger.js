//Functional pattern

function log(message) {
    console.log(message);
}

function log2(...msgArgs){
    let message=msgArgs.join(" | ");
    log(message);
}

function log3(...msgArgs){
    let date=new Date();
    let dateStr=`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
    log2(dateStr, ...msgArgs);
}

log("Hello World !");
log2("Hello", "World", "!");
log3("Hello", "World", "!");


//Class inheritance pattern

class BaseLogger {
    log(message) {
        console.log(message);
    };
}

class TableLogger extends BaseLogger{
    log(...msgArgs) {
        let message=msgArgs.join(" | ");
        super.log(message);
    };
}

class TableTimeLogger extends TableLogger{
    log (...msgArgs) {
        let date=new Date();
        let dateStr=`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
        super.log(dateStr, ...msgArgs);
    }
}

let baseLogger=new BaseLogger();
baseLogger.log("Hello World !");

let tableLogger=new TableLogger();
tableLogger.log("Hello", "World", "!");

let tableTimeLogger=new TableTimeLogger();
tableTimeLogger.log("Hello", "World", "!");
