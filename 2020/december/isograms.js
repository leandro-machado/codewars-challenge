function isIsogram(str){
 const arrtxt = str.split('');
 let excludedArr = [];
 let result = true
 let hasRepeated = true;

 for (i = 0; i < arrtxt.length; i++) {
   excludedArr = arrtxt.filter((v, index) => index !== i)
   console.log(excludedArr)
   hasRepeated = excludedArr.find(e => e.toLowerCase().trim() === arrtxt[i].toLowerCase().trim())

   if (hasRepeated) {
     result = false
     break;
   }
 }
 
 return result
}