const fs = require("fs-extra");
const path = require("path");

const structure = {
  src: {
    assets: {
      images: {},
      fonts: {},
      icons: {},
    },
    css: {
      "style.css": "",
      "variables.css": "",
    },
    js: {
      "main.js": "",
      "utils.js": "",
    },
    components: {},
    pages: {
      "index.html":
        '<!DOCTYPE html>\n<html>\n<head>\n  <title>Projeto</title>\n  <link rel="stylesheet" href="../css/style.css">\n</head>\n<body>\n  <script src="../js/main.js"></script>\n</body>\n</html>\n',
    },
  },
  tests: {},
  "README.md": "# Projeto HTML, CSS, JS\n\nEstrutura inicial do projeto.",
  ".gitignore": "node_modules/\ndist/\n.env\n",
  "package.json":
    '{\n  "name": "projeto-html-css-js",\n  "version": "1.0.0"\n}\n',
};

function criarPastas(basePath, structure) {
  Object.entries(structure).forEach(([name, content]) => {
    const fullPath = path.join(basePath, name);
    if (typeof content === "object") {
      fs.ensureDirSync(fullPath);
      criarPastas(fullPath, content);
    } else {
      fs.ensureFileSync(fullPath);
      if (content) {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

criarPastas(".", structure);
console.log("Estrutura de pastas criada com sucesso!");
