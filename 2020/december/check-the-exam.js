function checkExam(array1, array2) {
 let total = 0
 array2.filter((v, i) => {
   if (!v) return;
   if (array1[i] == v) return total += 4
   return total += - 1
 }); 
 return total < 0 ? 0 : total
}