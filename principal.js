const cores = ["AliceBlue" ,"AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
"Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
"Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
"DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue",
"DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
"FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow",
"HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon",
"LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
"LightSalmon" ,"LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
"Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple",
"MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue",
"MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed",
"Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink",
"Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown",
"SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
"SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]


var coresBR = ["Azul Alice", "Branco Antigo", "Aqua", "Agua-marinho", "Azuis",
    "Bege", "Bisque", "Preto", "Amendoa", "Azul", "Azul Violeta", "Marrom", "Madeira", "Azul Cadete", "Verde Paris",
    "Chocolate", "Coral", "Azul Flor de Milho", "Milho Claro", "Carmesim",
    "Ciano", "Azul Escuro", "Ciano Escuro", "Dourado Escuro", "Cinza Escuro",
    "Verde Escuro", "Caqui Escuro", "Magenta Escuro", "Oliva Escura", "Laranja Escuro",
    "Orquidea Escura", "Vermelho Escuro", "Salmao Escuro", "Verde Mar Escuro", "Azul Ardosia Escuro",
    "Cinza Ardosia Escuro", "Turquesa Escura", "Violeta Escuro", "Rosa Escuro", "Azul Ceu Escuro",
    "Cinza Fosco", "Azul Furtivo", "Tijolo", "Branco Floral", "Verde Floresta",
    "Fuchsia", "Cinza Medio", "Branco Fantasma", "Ouro", "Dourado",
    "Cinza", "Verde", "Amarelo Esverdeado", "Mana", "Rosa Forte",
    "Vermelho indiano", "Índigo", "Marfim", "Caqui", "Lavanda",
    "Lavanda Avermelhada", "Verde Grama", "Limao Chiffon", "Azul Claro", "Coral Claro",
    "Ciano Claro", "Amarelo Ouro Claro", "Cinza Claro", "Verde Claro", "Rosa Claro",
    "Salmao Claro", "Verde Mar Claro", "Azul Ceu Claro", "Cinza Ardosia Claro", "Azul Metalico Claro",
    "Amarelo Claro", "Lima", "Verde Lima", "Linho", "Magenta",
    "Bordo", "Agua-Marinha Media", "Azul Medio", "Orquidea Media", "Purpura Media",
    "Verde Mar Medio", "Azul Ardosia Medio", "Verde Primavera Medio", "Turquesa Media", "Vermelho Violeta Medio",
    "Azul Meia-Noite", "Creme de Menta", "Rosa Embacado", "Mocassim", "Branco Navajo",
    "Naval", "Renda Antiga", "Oliva", "Oliva Parda", "Laranja",
    "Jambo", "Orquidea", "Dourado Palido", "Verde Palido", "Turquesa Palida",
    "Vermelho Violeta Palido", "Mamao Batido", "Pessego", "Pardo", "Rosa",
    "Ameixa", "Azul Polvora", "Purpura", "Purpura Rebecca", "Vermelho",
    "Marrom Rosado", "Azul Real", "Marrom Sela", "Salmao", "Marrom Amarelado",
    "Herbal", "Concha", "Siena", "Prata", "Azul Ceu",
    "Azul Ardosia", "Cinza Ardosia", "Neve", "Verde Primavera", "Azul Metalico",
    "Castanho Claro", "Verde-Azulado", "Cardo", "Tomate", "Turquesa",
    "Violeta", "Trigo", "Branco", "Branco Fumaca", "Amarelo",
    "Verde Amarelado"];

function escolheCor() {
    return cores[Math.floor(Math.random() * cores.length)];
}

var color_options = [];

var right_choice = escolheCor();
color_options.push(right_choice);

while (color_options.length < 10) {
    let new_color = escolheCor();

    if (color_options.indexOf(new_color) == -1) {
        color_options.push(new_color);    
    }   
}
color_options.sort();

function check(guess) {
    if (color_options.includes(guess)){
        return true;
    }
    return false;
}

function start(){

    while (true){

        let guess = prompt("Você consegue advinhar em qual dessas cores eu estou pensando ? \n\n" + color_options[0] 
         + ", " + color_options[1]  + '\n' + color_options[2]  + ', ' + color_options[3] + '\n' + color_options[4]
         + ', ' + color_options[5] + '\n' + color_options[6] + ', ' + color_options[7] + '\n' + color_options[8]
         + ', ' + color_options[9]);

        if (guess == 'stop'){
            return false;
        
        } 
        
        if (right_choice == guess) {
            document.body.style.backgroundColor = right_choice;
            alert("Certa Resposta !!!");
            alert("Essa é a cor que eu pensei")
            
            return true;
        }
        
        if (!check(guess)){
            alert("Ops, essa não é uma escolha válida"); 
        } else if (guess > right_choice) {
            alert('Errou !!   A cor que eu escolhi começa com uma letra MENOR !' );
        } else if (guess < right_choice){
            alert('Errou !!   A cor que eu escolhi começa com uma letra MAIOR !')
        }
        
    }
    

}

console.log(color_options);
console.log(right_choice);
