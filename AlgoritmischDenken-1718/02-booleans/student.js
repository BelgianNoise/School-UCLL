// Schrijf hier je oplossingen voor de codeervragen
function isPositive(x)
{
    return x>=0;
}
function divides(x,y)
{
    return y % x === 0;
}
function isInteger(x)
{
    return x % 1 === 0;
}
function isPerfectSquare(x)
{
    return isInteger(Math.sqrt(x));
}
function inInterval(x,a,b)
{
    return a < b && a <= x && x <= b;
}
function between(x,a,b)
{
    return inInterval(x,a,b) || (x <= a && x >= b);
}
function has28Days(month,year){
    return month === 2 && (isLeapYear(year) !== true);
}
function has31Days(month)
{
    return month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12;
}
function isLeapYear(year)
{
    return year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
}
function isValidDate(day,month,year)
{
    return(between(day,1,31) && has31Days(month)) || ( between(day,1,30) && between(month,1,12) && month != 2) || 
    (month === 2 && between(day,1,28)) || (isLeapYear(year) && month === 2 && between(day,1,29));
}
function xor(x,y)
{
    return x != y;
}
function majority(x,y,z)
{
    return (x && (y || z)) || (y && z);
}
function light(x,y,z)
{
    return xor(x, xor(y,z));
}
function oneOfThree(x,y,z)
{
   return xor(x, xor(y, z)) && !(x && y && z);
}