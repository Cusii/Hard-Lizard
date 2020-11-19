let homePage = require('./homePage')
const sucursales = require("./sucursales")
const enCartelera = require('./enCartelera')

let movies = homePage.leerJSON()
let teatros = sucursales.leerJSON()
let cartelera=enCartelera.leerJSON()




module.exports = {
    homePage: function (req, res) {
        res.write("​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.")
        res.write("\n\n")
        res.write("---------")
        res.write("LA CANTIDAD DE PELICULAS QUE TENEMOS SON : " + movies.movies.length)
        res.write("---------")
        res.write("\n\n")
        
            movies.movies.sort(function (a, b) {
                if (a.title > b.title) {
                  return 1;
                }
                if (a.title < b.title) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              movies.movies.forEach(movie => {
              res.write("*" + movie.title + '\n\n')
            
         });
        res.write(`     
                       -En Cartelera(/en-cartelera)
                       -Mas Votadas(/mas-votadas)
                       -Sucursales(/sucursales)
                       -Contacto(/contacto)
                       -Preguntas Frecuentes(/preguntas-frecuentes)        
        `)
         
         

        res.end()
    },
    enCartelera: function (req, res) {
           res.write("En Cartelera")
           res.write("\n\n")
           res.write("Cantidad de pelicula "  +  movies.movies.length)
           res.write("\n\n")
           movies.movies.forEach(movie => {
            res.write("---------")
            res.write(movie.title)
            res.write("---------")
            res.write("\n\n")
            res.write(movie.overview + '\n')
            res.write("\n\n")
        });
           res.end()
    },

    sucursales: function (req, res) {
        teatros.theaters.forEach(teatro => {
            res.write(`${"·"}${teatro.name}${"·"}\n\n${"-"}${teatro.address}\n\n${"-"}${teatro.description}\n${teatro.total_rooms}\n\n`)


        })
        res.end()


    }
  
}
