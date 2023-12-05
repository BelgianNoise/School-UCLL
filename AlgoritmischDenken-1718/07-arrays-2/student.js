// Schrijf hier je oplossingen voor de 

function flatten(xss){
    let result = [];
    for(let i =0;i<xss.length;i++){
        for(let j = 0;j<xss[i].length;j++){
            result.push(xss[i][j]);
        }
    }
    return result;
}

function pairs(xs){
    /* let m = new Array(xs.length-1);
    for(let i = 0;i<m.length;i++){
        m[i] = new Array(2);
    }
    
    for(let i = 0;i<m.length;i++){
        m[i].push(xs[i]);
        i++;
        m[i].push(xs[i]);
        i--;
    }
    
    return m; */
    
    let result = [];
    for (let i = 1; i < xs.length; ++i)
    {
        result.push([xs[i - 1], xs[i]]);
    }
    return result;
}

function longest(xss){
    let result = [];
    
    for(let i = 0;i<xss.length;i++){
        if(xss[i].length > result.length){
            result = xss[i];
        }
    }
    return result;
}

function orderedPairs(xs){
    let result = [];
    
    for(let i =0;i<xs.length;i++){
        for(let j = 0;j< xs.length;j++){
            result.push([xs[i],xs[j]]);
        }
    }
    return result;
}

function unorderedPairs(xs){
        let result = [];
        let hulp = 1;
    
    for(let i =0;i<xs.length;i++){
        for(let j = hulp;j< xs.length;j++){
            result.push([xs[i],xs[j]]);
        }
        hulp++;
    }
    return result;
}

function unorderedTriplets(xs){
    if(xs.length<3){
        return [];
    }
    let result = [];
    
        for(let i =0;i<xs.length;i++){
        for(let j = i+1;j< xs.length;j++){
            for(let k = j+1;k<xs.length;k++){
            result.push([xs[i],xs[j],xs[k]]);
            }
        }
    }
    return result;
}

function pascal(n){
    let result = new Array(n);
    for(let i = 1;i<=n;i++){
        result[i-1] = new Array(i);
        
    }
    
    result[0][0] = 1;
    
    
    for(let i = 1;i<n;i++){
        result[i][0] = 1;
        for(let j = 1;j<=i-1;j++){
            result[i][j] = result[i-1][j] + result[i-1][j-1];
        }
        result[i][i] = 1;
    }
    return result;
    
}

function prefixes(xs){
    let result = new Array(xs.length + 1);
    for (let i = 0; i <= xs.length; ++i)
    {
        result[i] = xs.slice(0, i);
    }
    return result;
}

function zeroSumSubarrays(xs){
        let result = [];
    for (let i = 0; i !== xs.length; ++i)
    {
        let acc = 0;
        for (let j = i; j < xs.length; ++j)
        {
            acc += xs[j];
            if (acc === 0)
            {
                result.push(xs.slice(i, j + 1));
            }
        }
    }
    return result;
}

function width(matrix){
    return matrix.length;
}
function height(matrix){
    return matrix[0].length;
}

function zeroMatrix(width, height){
    let arr = new Array(width);
    for(let i=0; i<width; i++){
        arr[i] = new Array(height);
        for(let j =0;j<height;j++){
            arr[i][j] = 0;
        }
    }
    
    return arr;
}

function identityMatrix(width, height){
    let result = zeroMatrix(width,height);
    
    if (width>height){
        for(let i=0;i<height;i++){
            result[i][i] = 1;
        }
    }else{
        for(let j=0;j<width;j++){
            result[j][j] = 1;
        }
    }
    return result;
}

function fallingBlocks(grid){
    for (let i = 0 ; i < grid.length; i++){
        fallingBlocks2(grid[i]);
    }
}

function fallingBlocks2(xs){
    let aantal = count(xs,1);
    for (let i = 0 ; i < xs.length - aantal ; i++){
        xs[i] = 0;
    }
    for (let i = xs.length - aantal ; i < xs.length ; i++){
        xs[i] = 1;
    }
}

function count(xs,x){
    let totaal = 0;
    for (let i = 0 ; i < xs.length; i++){
        if (xs[i] === x) totaal++;
    }
    return totaal;
}

function transpose(gridd){
    let result = zeroMatrix(gridd[0].length,gridd.length);
    
    for(let i = 0; i<result.length;i++){
        for(let j = 0;j<result[0].length;j++){
            result[i][j] = gridd[j][i];
        }
    }
    
    return result;
}

function rotate(gridd){
    let result = zeroMatrix(gridd[0].length,gridd.length);
    
    for(let i = 0; i<result.length;i++){
        for(let j = 0;j<result[0].length;j++){
            result[i][j] = gridd[j][i];
        }
    }
    
    let temp = new Array(result.length);
    
    for(let i=0;i<result.length;i++){
        temp.unshift(result[i]);
    }

    for(let i=0;i<temp.length;i++){
        if(!temp[i]){
            temp.splice(i,1);
            i--;
    }
    }
    return temp;
}

















