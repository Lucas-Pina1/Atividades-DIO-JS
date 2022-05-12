function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if (typeof arr !== "object")
      throw new TypeError("Array precisa ser do tipo object");

    if (typeof num !== "number")
      throw new TypeError("Array precisa ser do tipo number");

    if (arr.length !== num) throw new RangeError("Tamanho inválido!");

    return arr;
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log("Esse erro é um ReferenceError");
      console.log(e.message);
    } else if (err instanceof TypeError) {
      console.log("Esse erro é um ReferenceError");
      console.log(e.message);
    } else if (err instanceof RangeError) {
      console.log("Esse erro é um RangeError");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado: " + err);
    }
  }
}

console.log(validaArray());
