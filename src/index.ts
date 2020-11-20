export default (object: any) => {
  let json = JSON.stringify(object)

  for (var i = 0, hashed = 0; i < json.length; i++) {
    hashed = (Math.imul(31, hashed) + json.charCodeAt(i)) | 0
  }

  return hashed
}
