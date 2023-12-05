// Schrijf hier je oplossingen voor de codeervragen

function five()
{
    return 5;
}
function square(x)
{
    return x**2;
}
function average(x,y)
{
    return (x+y)/2;
}
function cakes(eggs)
{
    return Math.floor(eggs/4);
}
function cakes2(eggs,flour)
{
    let a = Math.floor(eggs/4);
    let b = Math.floor(flour/250);
    return Math.min(a,b);
}
function cakes3(eggs,flour,sugar)
{
    let a = Math.floor(eggs/4);
    let b = Math.floor(flour/250);
    let c = Math.floor(sugar/250);
    return Math.min(a,b,c);
}
function cakes4(eggsReq,eggsAv,flourReq,flourAv,sugarReq,sugarAv)
{
    let a = Math.floor(eggsAv/eggsReq);
    let b = Math.floor(flourAv/flourReq);
    let c = Math.floor(sugarAv/sugarReq);
    return Math.min(a,b,c);
}
function busesNeeded(people,busCapacity)
{
    return Math.ceil(people/busCapacity);
}
function advanceHour(h,n)
{
    return (h + n) % 24;
}
function distribute(children,candy)
{
    let a = candy % children;
    return a;
}
function lastDigit(n)
{
    return n % 10;
}
function abs(n)
{
    n = n**2;
    n = Math.sqrt(n);
    return n;
    // return Math.max(n,-n);
}
function sign(n)
{
    return n / abs(n);
}
function minutesSinceMidnight(h,m)
{
    let a = h*60;
    let b = m;
    let c = a + b;
    return c;
    // return h*60+m;
}
function minutesBetween(h1,m1,h2,m2)
{
    return minutesSinceMidnight(h2,m2) - minutesSinceMidnight(h1,m1); 
}
function round(n,precision)
{
    let a = Math.pow(10,precision);
    return Math.floor((n * a)+ 0.5)/ a;
}