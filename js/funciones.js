
new Vue({
    el: 'main',
    data: {
      mostar: '',
      buscarT:'',
      busqueda:'',
        minimo:15,
      
        juegos:[{
        titulo:'Cafe',
        genero: 'Cafe, Canela, Azucar',
        tamaño:'Grande',
        precio:20,
    },
    {
      titulo:'Cafe Frio',
        genero: 'Cafe, Canela, Azucar, Hielos',
        tamaño:'Grande',
        precio:25,
  },
  {
      titulo:'Malteada de Fresa',
        genero: 'Fresa, Azucar, Hielos ',
        tamaño:'Grande',
        precio:20,
  },
    {
      titulo:'Malteada de Chocolate',
        genero: 'Chocolate, Azucar, Hielos ',
        tamaño:'Grande',
        precio:20,
  },
  {
    titulo:'Té helado.',
    genero: 'Té negro, Azucar, Hielo',
    tamaño:'Mediano',
    precio:17,
  },
  {
    titulo:'Té Caliente',
    genero: 'Hervabuena, Azucar,',
    tamaño:'Mediano',
    precio:15,
  },
  {
      titulo:'Jugo de Naranja',
        genero: 'Naranja Natural',
        tamaño:'Chico',
        precio:12,
  },
  {
      titulo:'Jugos de Zanahoria',
        genero: 'Zanahoria Natural',
        tamaño:'Chico',
        precio:15.50,
  },
  {
      titulo:'Jugos de Arandano',
        genero: 'Arandano Natural',
        tamaño:'Mediano',
        precio:20,
}],
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego)=> juego.precio >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego)=> juego.titulo.includes(this.busqueda));
            
        },
    }

})