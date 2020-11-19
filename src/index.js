const homePage = require('./homePage')
const sucursales = require("./sucursales")
const enCartelera = require ('./enCartelera')
let movies = homePage.leerJSON()
let teatros =sucursales.leerJSON()
let cartelera = enCartelera.leerJSON()


module.exports = {
    homePage : function(req,res){
        res.write ("Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn."+"\n"+"\n")
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){
        res.write ("En Cartelera"+"\n"+"\n")
        res.write ("Cantidad de peliculas" + " = " + movies.movies.length + "\n"+ "\n")
        cartelera.movies.forEach(moviesC =>{
            res.write(`${"Peliculas"} ${moviesC.title} \n\n${"reseña"} ${moviesC.vote_average}\n\n`)
        })
        res.end()

    },
    sucursales : function (req,res){
        res.write ("Nuestras Salas"+"\n"+"\n")

         teatros.theaters.forEach(teatro =>{
        
         res.write  (`${"·"}${teatro.name}${"·"}\n\n${"-"}${teatro.address}\n\n${"-"}${teatro.description}\n\n${"total de salas"} ${teatro.total_rooms}\n\n`)
        

        })
        res.end ()


        } }