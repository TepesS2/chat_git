
const db= require("./db");
function listarSalas(){
    return db.findAll("sala");
}

let listarSalas= async()=>{
let salas= await db.findAll("salas");
return salas;
};

let buscarSala= async (idsala)=>{
    return db.findOne("salas",idsala);
}

let atualizarMensagens=async(sala)=>{
    return await db.updateOne("salas",sala,{_id:sala._id});
}

let buscarMensagens= async(idsala, Timestamp)=>{
    let sala= await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg) =>{
            if(msg.Timestamp >= Timestamp){
                msg.push(msg);
            }
        });
        return msgs;
    }
    return[];
}

module.exports={listarSalas,buscarSala,atualizarMensagens,buscarMensagens}