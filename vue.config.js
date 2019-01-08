module.exports = {
  //Configuracion para al momento de correr el npm run build ajustar el sitio al que apuntara
  baseUrl: process.env.NODE_ENV === 'production'
    ? './dist/'
    : '/',
  //Esta configuracion sirve para generar el index.html en la raiz
  indexPath: process.env.NODE_ENV === 'production'
    ? '../index.html'
    : 'index.html'
}