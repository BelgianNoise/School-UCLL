// Schrijf hier je oplossingen voor de codeervragen

function product(n){
    if(n<=1){
        return n;
    }else{
        return n * product(n-1);
    }
}
function sum(a,b){
    if(a>b){
        return 0;
    }else{
        return a + sum(a+1,b);
    }
    
}
function euclid(a, b)
{
    if (b === 0)
    {
        return a;
    }
    else
    {
        return euclid(b, a % b);
    }
}

function range(a,b){
    if(a>b){
        return [];
    }else{
        let result = range(a+1,b);
        result.unshift(a);
        return result;
    }
}

function digits(n)
{
    if (n < 10)
    {
        return [n];
    }
    else
    {
        const lastDigit = n % 10;
        const rest = (n - lastDigit) / 10;
        const ds = digits(rest);
        ds.push(lastDigit);
        return ds;
    }
}

















