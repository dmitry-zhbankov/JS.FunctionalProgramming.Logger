//Default implementation

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
