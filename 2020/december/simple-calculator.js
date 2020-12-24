function calculator(a,b,sign){
 if (
   (sign !== '+' && sign !== '-' && sign !== '/' && sign !== '*') || 
   typeof a === 'string' || typeof b === 'string'
 ) {
   return 'unknown value'
 }

 const join = String(a) + String(sign) + String(b)

 return eval(join.replace(/[^-()\d/*+.]/g, ''))
}