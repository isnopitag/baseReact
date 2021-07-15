describe("Pruebas del archivo demo.test.js", () => {
  test("Deben de ser iguales los string", () => {
    //1.-Inicializacion
    const mensaje = "Hola Mundo";

    //2.- estimulo
    const mensaje2 = `Hola Mundo`;

    //3.= Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
