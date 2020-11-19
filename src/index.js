let homePage = require('./homePage')
const sucursales = require("./sucursales")
let movies = homePage.leerJSON()
let teatros =sucursales.leerJSON()


module.exports = {
    homePage : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){

    },
    sucursales : function (req,res){
         teatros.theaters.forEach(teatro =>{
          res.write  (`${"·"}${teatro.name}${"·"}\n\n${"-"}${teatro.address}\n\n${"-"}${teatro.description}\n${teatro.total_rooms}\n\n`)
        

        })
        res.end ()


        } }