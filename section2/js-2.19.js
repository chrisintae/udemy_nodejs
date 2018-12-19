// section 2, lecture 19
//async code + promises


const fetchData = callback => {
    setTimeout(() => {
        callback('Done!')
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text); 
    });
}, 2000);

console.log('Hello!');
console.log('Hi');

/*
1. create fetchData anonymous function with callback parameter
2. 

*/