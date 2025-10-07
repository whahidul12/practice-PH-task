const jsonWithDate = '{"name":"John","birthDate":"2000-01-01"}';

const obj = JSON.parse(jsonWithDate, (key, value) => {
  // 2nd parameter = reviver (transform values while parsing)
  if (key === "birthDate") {
    return new Date(value); // Convert string to Date object
  }
  return value;
});

console.log(obj.birthDate instanceof Date);