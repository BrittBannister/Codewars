function animal(obj) {
 let string = `This ${obj.color + ' ' + obj.name} has ${obj.legs} legs.`

 console.log('object: ', obj, 'string: ', string)

 return string
}
