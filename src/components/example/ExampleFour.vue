<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="display-2 pb-2 text-xs-center">Como modificar el DOM, y agregar elementos con JavaScript</h2>
      </v-flex>
      <v-flex pt-4 xs12>
        <p class="headline text-xs-justify">
          Para poder aplicar los conceptos de DHTML debemos conocer el DOM (Document Object Model - Modelo Objeto Documento)
        </p>
        <v-layout row wrap>
          <v-flex xs6 pr-4>
            <h2 class="display-1 text-sm-justify pb-3">Qué es el DOM?</h2>
            <p class="headline text-xs-justify">
              El DOM es otra forma de ver el contenido de la página web. Con el DOM, todos los elementos HTML se insertan en un árbol 
              cuyos nodos son las marcas HTML y las hojas, los valores propiamente dichos de las marcas. Por medio de JavaScript podemos 
              acceder y modificar este árbol de marcas y hacer que la página varíe luego que ya se haya mostrado en el navegador.
            </p>
          </v-flex>
          <v-flex xs6>
            <img style="width: 450px;" src="@/../public/img/dom.jpg">
          </v-flex>
        </v-layout>
        <v-flex xs12>
          <h2 class="display-1 text-sm-center pb-3">Formas básicas de manipular el DOM</h2>
          <h2 class="display-1 text-sm-justify pb-3">GetElementById</h2>
          <p class="headline text-xs-justify">La primera función que nos provee el DOM a través del objeto document es: 
             document.getElementById("nombre del Id de la marca HTML") 
          </p>
          <p class="headline text-xs-justify">Nos retorna una referencia a la marca en sí misma. Con esta referencia podemos acceder a sus 
            propiedades como puede ser su contenido, color, fuente, etc. Por ejemplo para cambiar el color de un texto: </p>
        </v-flex>
        <v-flex>
          <p class="headline text-xs-justify"> En el cuerpo del archivo HTML </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;h1 id="titulo">Este es un título dinámico&lt;/h1> 
      &lt;input type="button" value="Cambiar Color" onClick="cambiarColor()">
    </code>
  </pre>
          <p class="headline text-xs-justify"> En el archivo CSS </p>
  <pre class="language-css">
    <code style="box-shadow: none;">
      #titulo {
        text-align:center;
      }
      #boton1 {
        text-align:center;
        width:200px;
      }
    </code>
  </pre>
        <p class="headline text-xs-justify"> En el cuerpo del archivo de JavaScript </p>
  <pre class="language-javascript">
    <code style="box-shadow: none;">
      function cambiarColor()
      {
        var tit=document.getElementById('titulo');
        tit.style.color='#ff0000';
      }
    </code>
  </pre>
      </v-flex>
        <p class="headline text-xs-justify"> Ejemplo: </p>
      <v-flex>
        <h1 id="titulo">Este es un título dinámico</h1>
        <div class="text-xs-center py-5">
          <input id="btnExample" type="button" value="Cambiar Color" class="input-button grey darken-1 white--text" @click="cambiarColor()">
        </div>
      </v-flex>
      <v-flex>
        <h2 class="display-1 text-sm-justify py-3">childNodes</h2>
          <p class="headline text-xs-justify">El DOM provee a cada nodo de un vector que almacena la referencia a cada nodo hijo,
            dicha propiedad se llama childNodes.
          </p>
          <p class="headline text-xs-justify">En este ejemplo el nodo body tiene 4 hijos, la marca h1 tiene 1 hijo, lo 
            mismo cada marca li tienen un hijo. Los nodos que no tienen descendientes son los nodos hoja.
          </p>
          <p class="headline text-xs-justify"> En el cuerpo del archivo HTML </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;div id="bloque">
        &lt;p>Este es el primer párrafo&lt;/p>
        &lt;p>Este es el segundo párrafo&lt;/p>
        &lt;p>Este es el tercer párrafo&lt;/p>
      &lt;/div>
      &lt;input type="button" value="Cantidad de Hijos del DIV" onClick="cantidadHijos()">
    </code>
  </pre>
          <p class="headline text-xs-justify"> En el cuerpo del archivo de JavaScript </p>
  <pre class="language-javascript">
    <code style="box-shadow: none;">
      function cantidadHijos(){
        var lista=document.getElementById('bloque');
        alert('La cantidad de hijos del nodo div es:'+lista.childNodes.length);  
        var cadena="";
        for(var x=0;x&lt;lista.childNodes.length;x++){
          if (lista.childNodes[x].nodeType &#61;= Node.TEXT_NODE){
            cadena = cadena+&#8220;Nodo tipo Texto \n&#8221;;}
          if (lista.childNodes[x].nodeType == Node.ELEMENT_NODE)
            cadena=cadena+&#8220;Nodo tipo Elemento\n&#8221;;
        }
        alert(cadena);
      }
    </code>
  </pre>
        <p class="headline text-xs-justify"> Ejemplo: </p>
        <v-flex>
          <div id="bloque">
            <p>Este es el primer párrafo</p>
            <p>Este es el segundo párrafo</p>
            <p>Este es el tercer párrafo</p>
          </div>
          <div class="text-xs-center py-3">
            <input type="button" class="boton1 input-button grey darken-1 white--text" value="Contar los hijos del nodo DIV" @click="cantidadHijos()">
          </div>
        </v-flex>
      </v-flex>
      <v-flex>
        <h2 class="display-1 text-sm-justify py-3">parentNode</h2>
        <p class="headline text-xs-justify">Si tenemos la referencia a un nodo podemos obtener fácilmente 
          la referencia del nodo padre mediante la propiedad parentNode.
        </p>
        <p class="headline text-xs-justify">Veamos un ejemplo sencillo donde obtenemos la referencia de un 
          párrafo contenido en un div. Luego por medio de esta referencia obtenemos la referencia al div y 
          cambiamos el color de fondo del div.
        </p>
        <p class="headline text-xs-justify"> En el cuerpo del archivo HTML </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;div>
        &lt;p id="parrafo1">Este es el primer párrafo&lt;/p>
        &lt;p>Este es el segundo párrafo&lt;/p>
        &lt;p>Este es el tercer párrafo&lt;/p>
      &lt;/div>
      &lt;input type="button" value="Cambiar color de fondo del div" onClick="cambiarColor()">
    </code>
  </pre>
          <p class="headline text-xs-justify"> En el cuerpo del archivo de JavaScript </p>
  <pre class="language-javascript">
    <code style="box-shadow: none;">
      function cambiarColor(){
        var puntero=document.getElementById('parrafo1');
        var padre=puntero.parentNode;
        padre.style.backgroundColor='#ff0000';
      }
    </code>
  </pre>
        <p class="headline text-xs-justify"> Ejemplo: </p>
        <v-flex>
          <div>
            <p id="parrafo1">Este es el primer párrafo</p>
            <p>Este es el segundo párrafo</p>
            <p>Este es el tercer párrafo</p>
          </div>
          <div class="text-xs-center py-3">
            <input type="button" class="input-button grey darken-1 white--text" value="Cambiar color de fondo del div" @click="cambiarColorFondo()">
          </div>
        </v-flex>
      </v-flex>
      <v-flex>
        <h2 class="display-1 text-sm-justify py-3">appendChild - createTextNode</h2>
        <p class="headline text-xs-justify">Para la creación de un nodo de texto disponemos del siguiente 
          método de la clase document: <br> var nt= document.createTextNode('Texto del nodo');
        </p>
        <p class="headline text-xs-justify">Para añadirlo luego a un párrafo por ejemplo debemos llamar al 
          método appendChild posteriormente de que recuperemos el id del nodo padre: <br> var 
          nparrafo=document.getElementById('parrafo'); <br> nparrafo.appendChild(nt);
        </p>
        <p class="headline text-xs-justify">Veamos un ejemplo en el que cada vez que se presione un botón se 
          añada un nodo de texto a un párrafo mostrando cuántos nodos de texto se han añadido:
        </p>
        <p class="headline text-xs-justify"> En el cuerpo del archivo HTML </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;p id="parrafo">Texto inicial:&lt;/p>
      &lt;input type="button" value="Agregar nodo de texto" OnClick="agregar()">
    </code>
  </pre>
          <p class="headline text-xs-justify"> En el cuerpo del archivo de JavaScript </p>
  <pre class="language-javascript">
    <code style="box-shadow: none;">
      var contador=1;
      function agregar()
      {
        var nt=document.createTextNode('Nuevo texto '+contador+'-');
        var nparrafo=document.getElementById('parrafo');
        nparrafo.appendChild(nt);
        contador++;
      }
    </code>
  </pre>
        <p class="headline text-xs-justify"> Ejemplo: </p>
        <v-flex>
          <p id="parrafo">Texto inicial:</p>
          <div class="text-xs-center py-3">
            <input type="button" class="input-button grey darken-1 white--text" value="Agregar nodo de texto" @click="agregar()">
          </div>
        </v-flex>
      </v-flex>
      <v-flex>
        <h2 class="display-1 text-sm-justify py-3">removeChild</h2>
        <p class="headline text-xs-justify">Para eliminar un nodo de tipo elemento disponemos del método removeChild, 
          este método lo llamamos a partir del nodo padre. Veamos un ejemplo que permita eliminar el primer o último nodo elemento: 
        </p>
        <p class="headline text-xs-justify"> En el cuerpo del archivo HTML </p>
  <pre class="language-html">
    <code style="box-shadow: none;">
      &lt;div id="parrafos">&lt;/div>
      &lt;input type="button" value="Agregar nodo tipo elemento" onClick="agregar()">
      &lt;input type="button" value="Eliminar primer nodo tipo elemento" onClick="eliminarPrimero()">
      &lt;input type="button" value="Eliminar último nodo tipo elemento" onClick="eliminarUltimo()">
    </code>
  </pre>
          <p class="headline text-xs-justify"> En el cuerpo del archivo de JavaScript </p>
  <pre class="language-javascript">
    <code style="box-shadow: none;">
      var contador=1;
      function agregar()
      {
        var nuevoelemento=document.createElement("p"); 
        var nuevotexto=document.createTextNode("Hola Mundo " + contador + " - ");
        contador++;
        nuevoelemento.appendChild(nuevotexto);
        var puntero=document.getElementById("parrafos");
        puntero.appendChild(nuevoelemento);
      }

      function eliminarPrimero()
      {
        var puntero=document.getElementById("parrafos");
        if (puntero.childNodes.length>0) 
          puntero.removeChild(puntero.childNodes[0]);  
      }

      function eliminarUltimo()
      {
        var puntero=document.getElementById("parrafos");
        if (puntero.childNodes.length>0) 
          puntero.removeChild(puntero.childNodes[puntero.childNodes.length-1]);  
      }
    </code>
  </pre>
        <p class="headline text-xs-justify"> Ejemplo: </p>
        <v-flex>
          <div id="parrafos"></div>
          <div class="text-xs-center pt-3">
            <input type="button" class="input-button grey darken-1 white--text" value="Agregar nodo" @click="agregarTwo()">
          </div>
          <div class="text-xs-center">
            <input type="button" class="input-button grey darken-1 white--text" value="Eliminar primer nodo" @click="eliminarPrimero()">
          </div>
          <div class="text-xs-center pb-3">
            <input type="button" class="input-button grey darken-1 white--text" value="Eliminar último nodo" @click="eliminarUltimo()">
          </div>
        </v-flex>
        <p class="headline text-xs-justify pt-4"> Existen diversas propiedades que podemos utilizar para modifiar el DOM, 
          el limite siempre sera nuestra imaginación...
        </p>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      contador : 1, //Verificar por que esta variable no puede estar afuera...
      contadort : 1
    }
  },
  methods: {
    cambiarColor(){
      var tit=document.getElementById('titulo');
        tit.style.color='#ff0000';
    },
    cantidadHijos(){
      var lista=document.getElementById('bloque');
      alert('La cantidad de hijos del nodo div es:'+lista.childNodes.length);  
      var cadena="";
      for(var x=0;x<lista.childNodes.length;x++) 
      {
        if (lista.childNodes[x].nodeType==Node.TEXT_NODE)
          cadena=cadena+"Nodo tipo Texto\n";
        if (lista.childNodes[x].nodeType==Node.ELEMENT_NODE)
          cadena=cadena+"Nodo tipo Elemento\n";
      }
      alert(cadena);
    },
     cambiarColorFondo(){
       var puntero=document.getElementById('parrafo1');
      var padre=puntero.parentNode;
      padre.style.backgroundColor='#ff0000';
    },
    agregar()
    {
      var nt=document.createTextNode(' Nuevo texto '+this.contador+' - ');
      var nparrafo=document.getElementById('parrafo');
      nparrafo.appendChild(nt);
      this.contador++;
    },
    agregarTwo(){
      var nuevoelemento=document.createElement("p"); 
      var nuevotexto=document.createTextNode("Hola Mundo " + this.contadort + " - ");
      this.contadort++;
      nuevoelemento.appendChild(nuevotexto);
      var puntero=document.getElementById("parrafos");
      puntero.appendChild(nuevoelemento);
    },
    eliminarPrimero() {
      var puntero=document.getElementById("parrafos");
      if (puntero.childNodes.length>0) 
        puntero.removeChild(puntero.childNodes[0]);  
    },
    eliminarUltimo() {
      var puntero=document.getElementById("parrafos");
      if (puntero.childNodes.length>0) 
        puntero.removeChild(puntero.childNodes[puntero.childNodes.length-1]);  
    }

  },
}
</script>
<style>
  #titulo {
    text-align:center;
  }
  #boton1 {
    text-align:center;
    width:200px;
  }

</style>

