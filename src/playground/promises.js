const promise = new Promise((resolve , reject)=> {
    setTimeout(() => {
        resolve({
            name:WaveShaperNode,
            age:22
        });

        reject('something went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data);
    return 'some data';

}).then(() => {
    console.log('does this run??');
}).catch((error) => {
    console.log('error: ', error)
})

console.log('after');
