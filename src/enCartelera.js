const fs = require ('fs')

module.exports = {
    leerJSON : function(){
        let enCarteleraJSON = fs.readFileSync ("./data/movies.json","utf-8");
        let enCarteleraParseado = JSON.parse (enCarteleraJSON)
        return enCarteleraParseado
    }
}