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
for(let item of objeto){
    console.log(`O ${item.nome} possui: `+ item.habilidades.join());
};
};

frase(usuarios);
