function merge2String(a, b) {
    var i,
        l = Math.min(a.length, b.length),
        temp = '';

    for( i = 0; i < l; i++) {
        temp += a[i] + b[i];
    }
    return temp + a.slice(i) + b.slice(i);
}

console.log(merge2String('abc', '123')); 
console.log(merge2String('abc', '0123'));  
console.log(merge2String('abcd', '123')); 
    