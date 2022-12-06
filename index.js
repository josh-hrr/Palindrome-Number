let isPalindrome = function(x) { 
    let newXArray = `${x}`.split(''); 
    let newXReverse = newXArray.reverse();
    let newXReverseJoin = newXReverse.join('');

    if(x == newXReverseJoin){
        return true;
    }else{ 
        return false;
    }

};



let x = -121;

console.log(isPalindrome(x));