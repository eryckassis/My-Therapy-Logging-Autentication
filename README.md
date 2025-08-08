# Projeto de Autenticação - My Therapy

## Visão Geral

Este projeto tem como objetivo a construção de uma interface de autenticação moderna, responsiva e animada, utilizando práticas avançadas de desenvolvimento front-end e princípios de clean code. O sistema está em desenvolvimento contínuo, com foco em escalabilidade, manutenibilidade e experiência do usuário em nível profissional.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Estilização avançada, uso de variáveis, custom properties e animações.
- **JavaScript (ES6+)**: Lógica de interação, manipulação de DOM e integração de bibliotecas.
- **GSAP (GreenSock Animation Platform)**: Animações fluidas e profissionais para elementos de interface e transições.
- **Lottie (dotlottie-wc)**: Integração de animações vetoriais de alta performance.
- **Google Fonts**: Tipografia customizada para identidade visual.

## Decisões de Projeto

- **Clean Programming**: O código é estruturado para máxima legibilidade, modularidade e reutilização. Funções são pequenas, com responsabilidade única, e a separação de preocupações é rigorosa entre lógica, estilo e estrutura.
- **Componentização**: Elementos de interface são organizados em componentes reutilizáveis, facilitando manutenção e expansão.
- **Responsividade**: Todo o layout é projetado para se adaptar a diferentes tamanhos de tela, utilizando flexbox, media queries e unidades relativas.
- **Acessibilidade**: Estrutura semântica e navegação por teclado são priorizadas.
- **Animações Profissionais**: Uso de GSAP e Lottie para criar experiências visuais sofisticadas, sem comprometer a performance.

## Arquitetura do Projeto

```
/ (raiz)
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── css/
│   │   ├── style.css
│   │   └── variables.css
│   ├── js/
│   │   ├── main.js
│   │   └── utils.js
│   └── pages/
│       └── index.html
├── tests/
├── package.json
├── README.md
└── create-structure.js
```

### Organização dos Arquivos

- **src/assets**: Recursos estáticos (imagens, fontes, ícones)
- **src/components**: Componentes reutilizáveis de UI
- **src/css**: Folhas de estilo globais e variáveis
- **src/js**: Scripts de lógica, animação e utilidades
- **src/pages**: Estruturas de página
- **tests**: Scripts e arquivos de teste

## Arquitetura de Software

- **Separação de Camadas**: Interface, lógica de apresentação e manipulação de dados são separadas para facilitar testes e manutenção.
- **Reutilização**: Funções utilitárias e componentes são projetados para uso em múltiplos contextos.
- **Escalabilidade**: Estrutura preparada para expansão de funcionalidades e integração com backend.

## Bibliotecas e Frameworks

- **GSAP**: Utilizado para animações de entrada, transição de telas, loading e interações de cursor, proporcionando fluidez e controle avançado.
- **Lottie (dotlottie-wc)**: Permite a inclusão de animações vetoriais otimizadas, melhorando a experiência visual sem impactar a performance.
- **Google Fonts**: Padronização e personalização tipográfica.

## Responsividade e Animações

- O projeto utiliza flexbox, unidades relativas e media queries para garantir adaptação a diferentes dispositivos.
- Animações são implementadas com GSAP e Lottie, garantindo transições suaves e interações modernas.
- O sistema de loading, custom cursor e efeitos visuais são integrados de forma desacoplada, facilitando manutenção e evolução.

## Clean Code e Boas Práticas

- **Nomenclatura clara** para variáveis, funções e classes CSS.
- **Funções puras** e sem efeitos colaterais sempre que possível.
- **Evita duplicidade** de código e repetições desnecessárias.
- **Comentários objetivos** apenas onde necessário.
- **Estrutura modular** e fácil de navegar.

## Status do Projeto

O projeto encontra-se em desenvolvimento ativo. Novas funcionalidades, integrações e melhorias de usabilidade estão sendo implementadas continuamente. O código está em constante refatoração para garantir aderência às melhores práticas de desenvolvimento front-end e clean code.

---

Para dúvidas, sugestões ou contribuições, consulte a documentação interna ou entre em contato com o responsável técnico do projeto.
