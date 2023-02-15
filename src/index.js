
// You should implement your task here.

module.exports = function towelSort (matrix) {
  arr = []
  if (matrix===undefined){
    return []
  }
    matrix.forEach(function (item,index){
      if (index%2!=0) {
        item = item.reverse()
        arr=arr.concat(item)
      } else {
      arr = arr.concat(item)}

    })

  return arr;
}
