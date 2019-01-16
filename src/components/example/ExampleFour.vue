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
          <h2 class="display-1 text-sm-center pb-3">Como manipular manipular el DOM?</h2>
          <h2 class="display-1 text-sm-justify pb-3">GetElementById</h2>
          <p class="headline text-xs-justify">La primera función que nos provee el DOM a través del objeto document es: 
            <h1> document.getElementById("nombre del Id de la marca HTML") </h1>
          </p>
          <p class="headline text-xs-justify">Nos retorna una referencia a la marca en sí misma. Con esta referencia podemos acceder a sus 
            propiedades como puede ser su contenido, color, fuente, etc. Por ejemplo para cambiar el color de un texto: </p>
        </v-flex>
        <p class="headline text-xs-justify"> En el cuerpo del archivo HTML </p>
    <pre class="language-html">
      <code style="box-shadow: none;">
        &lt;h1 id="titulo">Este es un título dinámico&lt;/h1> 
        &lt;input type="button" value="Cambiar Color" onClick="cambiarColor()">
      </code>
    </pre>
        <p class="headline text-xs-justify"> En el archivo JavaScript </p>
    <pre class="language-html">
      <code style="box-shadow: none;">
        &lt;h1 id="titulo">Este es un título dinámico&lt;/h1> 
        &lt;input type="button" value="Cambiar Color" onClick="cambiarColor()">
      </code>
    </pre>
      </v-flex>
    </v-layout>
  </v-container>
</template>
