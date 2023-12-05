    // Schrijf hier je oplossingen voor de codeervragen
function tShirts(n){
    let a = n*10;
    if (n>= 10){
        a -= 5;
    }
    return a;
}

function tShirts2(n){
    let a = 0;
    if (n>= 100){
        a = n * 9;
    }
    else{ a = n * 10;}
    return a;
}

function tShirts3(n){
    let a = 0;
    if (n>= 500){a = n * 8;}
    else if(n>=100){ a = n * 9;}
    else{a=n*10;}
    return a;
}

function max2(x,y){
    if (x > y){
        return x;
    }else {return y;}
}
function max3(x,y,z){
    let a = max2(x,y);
    a = max2(a,z);
    return a;
}
function middle(x,y,z){
    if ((x<y && x>z) || (x>y && x<z)){
        return x;
    }else if((y<x && y>z) || (y>x && y<z)){
        return y;
    }else{return z;}
}
function yahtzee(a,b,c){
    const x = Math.min(a,b,c);
    const y = Math.max(a,b,c);
    const z = a+b+c - x - y;
    
    if(a===b && a===c){
        return 25;
    }else if((x+1 === z)&&(z+1===y)){
        return 30;
    }else{return a+b+c;}
}
function rockPaperScissors(p1, p2){
    if(p1 === p2){
        return 0;
    }else if((p1===0 && p2===1)||(p1===1&&p2===2)||(p1===2&&p2===0)){
        return 1;
    }else{return 2;}
}
function towerDefense(ex,ey,vx,vy,tx,ty,s){
    let a = vx*vx + vy*vy - s*s;
    let b = 2*(ex*vx - tx*vx+(ey-ty)*vy);
    let c = Math.pow(ex - tx,2) + Math.pow(ey-ty,2);
    let t1, t2,px,py,ax,ay,d2,blop,d,t;
    
    if (a===0){
       t = -c/b;
        if (t<0){
            return -1;
        }
    }
    else {
        d = b*b - 4*a*c;
        if (d<0){
            return -1;
        }
        t1 = (-b + Math.sqrt(d))/2*a;
        t2 = (-b - Math.sqrt(d))/2*a;
        if (t1 <= 0 && t2 <= 0){
            return -1;
        }
        else if(t1<t2 && t1>0){
             t = t1;
        }
        else{t = t2;}
        px = ex + vx*t - tx;
        py = ey + vy*t-ty;
        d2 = Math.sqrt(px*px+py*py);
        ax = px / d2;
        ay = py/d2;
        blop = (Math.atan2(ay,ax)/Math.PI) * 180;
        return blop;
        
    }
}
        
    function latest(h1, m1, h2, m2){
        const t1 = 60*h1 + m1;
        const t2 = 60*h2+m2;
        
        if (t1 === t2){
            return 0;
        }else if(t1<t2){return 2;}else{return 1;}
    }
function age(bd, bm, by, nd, nm, ny)
{
    const ageAfterBirthday = ny - by;
    const ageBeforeBirthday = ageAfterBirthday - 1;
    if (nm < bm)
    {
        return ageBeforeBirthday;
    }
    else if (nm > bm)
    {
        return ageAfterBirthday;
    }
    else if (nd < bd)
    {
        return ageBeforeBirthday;
    }
    else
    {
        return ageAfterBirthday;
    }
}
function coins(c2, c5, goal){
    if((goal%c5)%c2 === 0){
        return true;
    }else{return false;}
}
function coins(c2, c5, goal)
{
    let used5 = Math.min(c5, Math.floor(goal / 5));
    goal -= 5 * used5;
    c5 -= used5;
    if (goal % 2 !== 0)
    {
        if (used5 === 0)
        {
            return false;
        }
        else
        {
            used5--;
            goal += 5;
        }
    }
    return goal / 2 <= c2;
}
    
