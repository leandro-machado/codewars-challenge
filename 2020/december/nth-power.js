function index(array, n){
  if (n > array.length) return -1
  const res = Math.pow(array[n], n)
  return isNaN(res) ? -1 : res
}