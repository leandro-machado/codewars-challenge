function multiTable(number) {
 let string = ""
 for (let i = 1; i <= 10; i++) {
   string += `${i} * ${number} = ${i*number}`
   if(i < 10) string += '\n'
 }
 return string
}