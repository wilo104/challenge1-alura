function ocultar() {
    var div1 = document.getElementById("muneco-div");
    var div2 = document.getElementById("div-oculto");
    var textarea1 = document.getElementById("texto1");
    if (textarea1.value != "") {
      div1.style.display = "none";
      div2.style.display = "flex";
    } else {
      div1.style.display = "flex";
      div2.style.display = "none";
    }
  }

  function encriptarPalabra() {
    ocultar();
    let palabra=document.getElementById("texto1").value;
   
    console.log(palabra);
        const llave = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Convertir la palabra a minúsculas
    palabra = palabra.toLowerCase();

    // Encriptar la palabra
    let palabraEncriptada = '';
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        palabraEncriptada += llave[letra] || letra;
    }
    console.log(palabraEncriptada);
    document.getElementById("texto2").innerHTML =palabraEncriptada;
    document.getElementById("texto1").value="";
    
  }
  
  function desencriptarPalabra() {
    ocultar(); // Función ocultar, si existe, debería estar definida

    const llaveinversa = {
        'enter':'e',
        'imes':'i',
        'ai':'a',
        'ober':'o',
        'ufat':'u'
    };
    
    // Obtener el valor de la palabra encriptada desde el elemento de formulario
    let palabraencriptada = document.getElementById("texto2").value;

    // Verificar que la palabra encriptada no sea nula o indefinida
    if (!palabraencriptada) {
        console.error('La palabra encriptada está vacía o indefinida.');
        return;
    }

    // Desencriptar la palabra
    let palabrasEncriptadas = palabraencriptada.split(/(enter|imes|ai|ober|ufat)/g);
    let palabraOriginal = '';
    for (let i = 0; i < palabrasEncriptadas.length; i++) {
        const palabra = palabrasEncriptadas[i];
        palabraOriginal += llaveinversa[palabra] || palabra;
    }

    // Mostrar la palabra original en el elemento de formulario
    document.getElementById("texto1").value = palabraOriginal;
}
  
  function copiar() {
    var textarea2 = document.getElementById("texto2");
    navigator.clipboard.writeText(textarea2.value).then(
      () => {
        console.log("exitoso");
      },
      () => {
        console.log("error");
      }
    );
  }