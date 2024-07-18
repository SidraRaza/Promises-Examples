// 1.Chaining Promises

const firstPromise = new Promise<number>((res, rej) => {
    setTimeout(() => res(26), 1000);
});

firstPromise.then(value => {
        console.log('First promise resolved with:', value);
        return value * 2;
    })
    .then(newValue => console.log('Chained result:', newValue))
    .catch(error => console.error('Error:', error));

// // 2.Basic Promise Example

const promise = new Promise<number>((res, rej) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            res(40);
        } else {
            rej('Error occurred');
        }
    }, 1000);
});

promise
    .then(value => console.log('Resolved with:', value))
    .catch(error => console.error('Rejected with:', error));

// 3.Promise.all for Concurrent Promises

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values)) // [3, 42, 'foo']
    .catch(error => console.error('Error:', error));
 



