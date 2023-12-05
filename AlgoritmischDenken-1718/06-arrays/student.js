// Schrijf hier je oplossingen voor de codeervragen

function fourth(xs)
{
    return xs[3];
}

function last(xs){
    return xs[xs.length - 1];
}

function sum3(xs){
    return xs[0] + xs[1] + xs[2];
}

function max2(xs){
    return Math.max(xs[0], xs[1]);
}

function product(xs){
    let result = 1;
    for (let i = 0; i < xs.length; i++)
    {
        result *= xs[i];
    }
    return result;
}

function contains(xs, x){
    
    for (let i = 0; i < xs.length; i++){
        if (x === xs[i]){
            return true;
        }
    }
    return false;
}

function all(xs){
    for (let i = 0; i < xs.length; i++){
        if (xs[i] === false){
            return false;
        }
    }
    return true;
}

function any(xs){
    for (let i = 0; i < xs.length; i++){
        if (xs[i] === true){
            return true;
        }
    }
    return false;
}

function isIncreasing(xs){
    let hulp = 0;
    for (let i = 0; i < xs.length; i++){
        if(hulp > xs[i]){
            return false;
        }
        hulp = xs[i];
    }
    return true;
}

function swap(xs,i,j){
    let hulp;
    hulp = xs[i];
    xs[i] = xs[j];
    xs[j] = hulp;
}

function reverse(xs)
{
    for (let i = 0; i < xs.length / 2; i++)
    {
        swap(xs, i, xs.length - i - 1);
    }
}

function sameNumbers(xs,ys){
    if(xs.length != ys.length){
        return false;
    }
    for (let i = 0; i < xs.length; i++){
        if(xs[i] != ys[i]){
            return false;
        }
    }
    return true;
    
}

function range(from,to){
    if (to < from){
      return [];
    }
    
    let array = new Array(to - from);
    let t = 0;
    for (let i = from; i <= to; i++){
        array[t] = i;
        t++;
    }
    return array;
}

function transfer(xs, ys){
    
    if(xs.length > 0){
        ys.unshift(xs.pop());
        return true;
    }
    else{return false;}
}

function split(xs)
{
    const helft = Math.floor((xs.length + 1) / 2);
    const left = xs.slice(0, helft);
    const right = xs.slice(helft, xs.length);
    return [left, right];
}
function missingNumber(xs){
    let actualSum = 0;
    let expectedSum = 1;
    for (let i = 0; i != xs.length; ++i)
    {
        actualSum += xs[i];
        expectedSum += i + 2;
    }
    return expectedSum - actualSum;
}

function parseDate(str){
    let arr = str.split("/");
    for(let i = 0;i<arr.length;i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function evaluate(str){
    /*let arr = str.split(" ");
    for(let i =arr.length -1;i>=0;i--){
        if(arr[i] === "*"){
            arr[i-1] = arr[i-1] * arr[i+1];
            arr[i].pop();
            arr[i+1].pop();
        }
    }
    let result = 0;
    for(let i = 0;i<arr.length;i++){
        result +=  arr[i];
    }
    
    return result;*/
        let result = 0;
        const terms = str.split('+');
        for (let i = 0; i != terms.length; ++i)
        {
            const factors = terms[i].split('*');
            let r = 1;
            for (let j = 0; j != factors.length; ++j)
            {
                r *= parseFloat(factors[j]);
            }
            result += r;
        }
        return result;
}

function isPermutation(xs,ys){
    /*let res1= 0;
    let res2 = 0;
    
    for(let i = 0;i<xs.length;i++){
        res1 += xs[i];
    }
        for(let i = 0;i<ys.length;i++){
        res2 += ys[i];
    }
    
    return (res1 === res2);*/
        if (xs.length !== ys.length)
    {
        return false;
    }
    else
    {
        const used = new Array(xs.length);
        for (let i = 0; i !== used.length; ++i)
        {
            used[i] = false;
        }
        for (let i = 0; i !== xs.length; ++i)
        {
            let j = 0;
            while (j < ys.length && (used[j] || xs[i] !== ys[j]))
            {
                ++j;
            }
            if (j === ys.length)
            {
                return false;
            }
            else
            {
                used[j] = true;
            }
        }
        return true;
    }
}

















