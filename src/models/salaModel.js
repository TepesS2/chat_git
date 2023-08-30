function listarSalas(){
    return[
        {
            "_id":{
                "$oid":"64ece43ea"
            },
            "nome":"guerreiros da infoCimol",
            "tipo":"publica"
        },
        {
            "_id":{
                "$oid":"8fsfjsjna20afj"
            },
            "nome":"só os confirmados",
            "tipo":"privada",
            "chave":"at8q4haw"
        },
        {
            "_id":{
                "$oid":"wiur892029vcxz"
            },
            "nome":"guerreiros da info",
            "tipo":"publico"
        }
    ];
}
module.exports={listarSalas}