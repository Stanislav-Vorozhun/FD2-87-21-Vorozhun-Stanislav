let poly = 1221;
let ylop = 0;
let isPalindrome = false;

while(poly>0){
  let rest = Math.floor(poly%10);
      ylop=(ylop*10+rest);
      poly=Math.floor(poly/10);
      
  if(ylop===poly){
    isPalindrome=true;
    }
}
console.log(isPalindrome);