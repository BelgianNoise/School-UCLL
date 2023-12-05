// Schrijf hier je oplossingen voor de 
function factorial(n){
    let tot = 1;
    while(n >0){
        tot *= n;
        n--;
    }
    return tot;
}
function sumRange(a,b){
    let tot = 0;
    while (a<=b){
        tot+=a;
        a++;
    }
    return tot;
}
function invest(goal){
    let jaar = 0;
    let geld = 1000;
    while(geld<goal){
        geld *= 1.05;
        jaar ++;
    }
    return jaar;
}
function countDigits(n){
    if(n===(-9,9)){
        return 1;
    }else if(n<0){
        n = -n;
    }
    let x = 10;
    let aantal = 1;
    while(n>=x){
        aantal ++;
        x*=10;
    }
    return aantal;
}
function gcd(a,b){
    
}
function isPrime(n){
    let a = n -1;
    if(n<2){
        return false;
    }
    while(a>1){
        if (n%a ===0){
            return false;
        }else{a--;}
    }
    return true;
}