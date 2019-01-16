<template>
  <v-container grid-list-md text-xs-center >
    <v-layout row wrap my-5>
      <v-flex xs12>
        <h1 class="text-md-center display-4">
          Concepto y Definición
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs12 md8>
        <v-card>
          <v-card-text class="px-2">
            <p>
              Este término inicio a fines de los años 90 y principios de los 2000 para describir cualquier tipo de funcionalidad
              que de alguna manera fuera ámbito de la navegación regular de sitios web. La definición de DHTML (HTML Dinámico), 
              podría ser que es “HTML que puede cambiar incluso despues de que una página se haya cargado en un navegador”. 
              En su momento esta era una palabra de moda difícil de definir e inconcebible de hacer.
            </p>
            </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card dark color="primary">
            <v-img src="https://vignette.wikia.nocookie.net/inciclopedia/images/a/a3/Canciones-anos-90.jpg/revision/latest?cb=20170620020927" height="300px">90´S</v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs12 md3>
        <v-card dark color="primary">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px">ABAJO JS</v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-card-text class="px-2">
            <p>
              Las últimas tendencias en desarrollo de aplicaciones web están relacionadas con DHTML. 
              En la antigüedad este concepto era muy complejo ya que se buscaba que el sitio siguiera siendo funcional sin JavaScript. 
              En la actualidad se han producido múltiples avances en las tecnologías front-end, como CSS3, HTML5, JQuery, etc.., 
              el primer innovador de esta herramienta fue Google con Gmail.
            </p>
            </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card>
            <v-img src="https://cde.peru.com//ima/0/1/3/6/5/1365618/611x458/gmail.jpg" height="300px" aspect-ratio="2" contain></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-2">
            <p>
              Se está busca la fusión de todos los elementos de frontend, los desarrollos actuales con React y Vue se asemejan al 
      Código DHTML de 1999, antes hacías todo con JavaScript porque se podía, pero ahora se hace porque tiene sentido.
            </p>
            </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card >
            <v-img aspect-ratio="2" contain src="https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" height="300px"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card dark>
          <v-img aspect-ratio="2" contain src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png" height="300px"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card>
          <v-img aspect-ratio="2" contain src="https://cdn-images-1.medium.com/max/1600/1*ieROYZuCX-w0p9V7UswJbQ.png" height="300px"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card dark>
            <v-img aspect-ratio="2" contain src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png" height="300px"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-2">
            <p>
              Se está perdiendo un poco la estructura de hojas de estilo en cascada que definan todos los aspectos de nuestra 
      aplicación, ahora solo definen el cuerpo de nuestro sitio y los estilos de los componentes se realizan en línea, a 
      su vez se está perdiendo el uso de pseudo selectores como hover y estos efectos se están realizando por JavaScript.
            </p>
            </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 offset-md4 md4>
          <v-text-field
            v-model="last"
            label="Last Name"
            outline
          ></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn @click="StarWars()">Regreso al futuro: un desplazador DHTML desde 2001</v-btn>
  </v-container>
</template>
<script>
  export default {
    methods:{
      StarWars: function(){
        let http_request = new XMLHttpRequest();
        http_request.overrideMimeType('text/xml');
        http_request.open('GET', 'http://www.example.org/algun.archivo', true);
        http_request.send();
        console.log(http_request)
        alert('hey')
      }
    }

  }
</script>