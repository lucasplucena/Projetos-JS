var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function frase(objeto){
for(var a=0;a<objeto.length;a++){
    console.log(`O ${objeto[a].nome} possui: `+ objeto[a].habilidades.join());
};
};

frase(usuarios);
