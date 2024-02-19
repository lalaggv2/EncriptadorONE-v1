let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector('.tn-desencriptar');
let muneco = document.querySelector(".contenedorMuneco");
let contenedorEncrip = document.querySelector('.contenedor-parrafo');
let resultado = document.querySelector(".contenedorResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  ocultarAdelante();
  let cajaTexto = recuperarTexto()
  resultado.textContent = encriptarTexto(cajaTexto);
};

function desencriptar() {
  ocultarAdelante();
  let cajaTexto = recuperarTexto()
  resultado.textContent = desencriptarTexto(cajaTexto);
};

function recuperarTexto() {
  let cajaTexto = document.querySelector(".cajatexto")
  return cajaTexto.value
}

function ocultarAdelante() {
  muneco.classList.add("ocultar");
  contenedorEncrip.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'a') {
      textoFinal = textoFinal + 'ai'
    }
    else if (texto[i] == 'e') {
      textoFinal = textoFinal + 'enter'
    }
    else if (texto[i] == 'i') {
      textoFinal = textoFinal + 'imes'
    }
    else if (texto[i] == 'o') {
      textoFinal = textoFinal + 'ober'
    }
    else if (texto[i] == 'u') {
      textoFinal = textoFinal + 'ufat'
    }
    else {
      textoFinal = textoFinal + texto[i]
    }

  }
  return textoFinal;
}


function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'a') {
      textoFinal = textoFinal + 'a'
      i += 1;
    }
    else if (texto[i] == 'e') {
      textoFinal = textoFinal + 'e'
      i += 4;
    }
    else if (texto[i] == 'i') {
      textoFinal = textoFinal + 'i'
      i += 3;
    }
    else if (texto[i] == 'o') {
      textoFinal = textoFinal + 'o'
      i += 3;
    }
    else if (texto[i] == 'u') {
      textoFinal = textoFinal + 'u'
      i += 3;
    }
    else {
      textoFinal = textoFinal + texto[i]
    }

  }
  return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
  let contenido = document.querySelector(".texto-resultado").textContent;
  navigator.clipboard.writeText(contenido);
  console.log("copiado");
});

