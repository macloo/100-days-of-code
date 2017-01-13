var promise = new Promise(function(resolve, reject) {
    var n = "foobar";
    console.log("Start " + n);

    if (n) {
        resolve(n + n);
    } else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
        console.log(result); // "Stuff worked!"
    }, function(err) {
        console.log(err); // Error: "It broke"
});
