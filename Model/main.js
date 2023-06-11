var index = 0;
function mudarH(opcao) {
  var nomeH = document.getElementById("nomeH");
  var descricaoH = document.getElementById("descricaoH");
  var imagemH = document.getElementById("imagemH");

  var arrayDeHabilidades = [JavaScript, Java, html, css, Jira, Suporte, Qa];

  if (index < arrayDeHabilidades.length && index >= 0) {
    nomeH.innerHTML = arrayDeHabilidades[index].nomeH;
    descricaoH.innerHTML = arrayDeHabilidades[index].descricaoH;
    imagemH.src = arrayDeHabilidades[index].scr;
  }

  if (opcao == "proxima") {
    index++;
    if (index >= arrayDeHabilidades.length) {
      index = 0; // Volta ao início do carrossel
    }
  } else if (opcao == "anterior") {
    index--;
    if (index < 0) {
      index = arrayDeHabilidades.length - 1; // Vai para o final do carrossel
    }
  }

  console.log(index);
  console.log(arrayDeHabilidades.length);
}
window.addEventListener("load", function () {
  mudarH(); // Chama a função mudarH() ao carregar a página
  escreverTexto();
});

// Habilidades
var Node = {
  nomeH: "NodeJS",
  descricaoH:
    "Node.js é um ambiente de execução JavaScript com o qual você pode escrever aplicações e módulos em JavaScript.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
};

var JavaScript = {
  nomeH: "JavaScript",
  descricaoH:
    "JavaScript é uma linguagem de programação de alto nível e interpretada, amplamente usada para desenvolvimento web. Ela permite adicionar interatividade e dinamismo aos sites, manipular elementos HTML, responder a eventos e interações do usuário. Além disso, também pode ser executada no lado do servidor com o Node.js, possibilitando a criação de aplicativos web completos. Esse site por exemplo utliliza javascript para suas interações.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};
var html = {
  nomeH: "HTML",
  descricaoH:
    "HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para estruturar e apresentar conteúdo na web. É a espinha dorsal de qualquer página da web e fornece a estrutura básica e os elementos necessários para exibir informações na forma de texto, imagens, links, vídeos e muito mais.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};
var css = {
  nomeH: "Css",
  descricaoH:
    "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a aparência e o formato de um documento HTML. Ela define como os elementos HTML devem ser exibidos na página, incluindo cores, fontes, espaçamento, layout, animações e muito mais.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
};

var Java = {
  nomeH: "Java",
  descricaoH:
    "Java é uma linguagem de programação de alto nível, orientada a objetos e amplamente utilizada para o desenvolvimento de software. Foi criada na década de 1990 pela Sun Microsystems (agora pertencente à Oracle Corporation) e desde então tem sido uma das linguagens mais populares e influentes no campo da programação.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
};

var Jira = {
  nomeH: "Jira",
  descricaoH:
    "O Jira é uma plataforma de gerenciamento de projetos e problemas amplamente utilizada por equipes de desenvolvimento de software. Desenvolvido pela Atlassian, o Jira permite que equipes organizem, acompanhem e priorizem suas tarefas e projetos de forma eficiente.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
};

var Suporte = {
  nomeH: "Suporte Técnico",
  descricaoH:
    "Um agente de suporte é um profissional responsável por fornecer assistência e solucionar problemas para os clientes de uma empresa. Eles atuam como ponto de contato direto entre os clientes e a equipe de suporte técnico, buscando entender e resolver as necessidades e preocupações dos clientes.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
};

var Qa = {
  nomeH: "Quality Assurance (Selenium)",
  descricaoH:
    "Um profissional de QA (Garantia de Qualidade) ou testador de qualidade é responsável por garantir que os produtos ou serviços de uma empresa atendam aos padrões de qualidade definidos. Sua principal função é testar e verificar a funcionalidade, usabilidade, desempenho e segurança de um software, aplicativo, site ou sistema.",
  scr: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
};

//Animação da apresntação

const apresentacao =
  "Tenho 20 anos e ao longo das atividades que me proponho a realizar sempre busco me especializar em conhecimento teórico e empírico para a melhor execução delas com agilidade e eficiência 😊";
const delay = 20; // Tempo de espera entre a adição de cada caractere (em milissegundos)
let j = 0;

function escreverTexto() {
  const elementoTexto = document.getElementById("apresentacao");
  if (j < apresentacao.length) {
    elementoTexto.innerHTML += apresentacao.charAt(j);
    j++;
    setTimeout(escreverTexto, delay);
  }
}
