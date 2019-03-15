// callback
readFile('example.txt', function(err, contents) {
    if (err) {
        throw err;
    }

    writeFile('example.txt', function (err) {
        if (err) {
            throw err;
        }

        console.log('file was writen');
    });
});

console.log('hello');






























console.log();
console.log();
console.log();
console.log();
