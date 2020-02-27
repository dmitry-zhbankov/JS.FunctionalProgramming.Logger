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
