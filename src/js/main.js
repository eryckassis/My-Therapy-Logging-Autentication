document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado!");

  // Loading Animation
  const counter3 = document.querySelector(".counter-3");

  // Gerar números para o contador 3
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }
  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  // Animações do contador
  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);

  // Animações das barras de loading
  gsap.to(".digit", {
    top: "-150px",
    stagger: {
      amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
  });

  gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2.inOut",
  });

  gsap.from(".loader-2", {
    width: 0,
    duration: 6,
    delay: 1.9,
    ease: "power2.inOut",
  });

  gsap.to(".loader", {
    background: "none",
    delay: 6,
    duration: 0.1,
  });

  gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
  });

  gsap.to(".loader-2", {
    x: -75,
    y: 75,
    duration: 0.5,
    delay: 6,
  });

  gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
  });

  gsap.to(".loader", {
    rotate: 45,
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
  });

  gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut",
  });

  gsap.to(".header .h1 h1", {
    delay: 7,
    y: -80,
    duration: 1.5,
    ease: "power4.inOut",
    stagger: {
      amount: 0.1,
    },
  });

  const signupButton = document.querySelector(".btn-signup");
  const loginPanel = document.getElementById("login-panel");
  const closePanelBtn = document.getElementById("close-panel-btn");

  // Função para gerar dígitos dos outros contadores
  function generateCounterDigits(counter) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        counter.appendChild(div);
      }
    }
    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter.appendChild(finalDiv);
  }

  // Gerar dígitos para os outros contadores
  generateCounterDigits(document.querySelector(".counter-1"));
  generateCounterDigits(document.querySelector(".counter-2"));

  console.log("Botão encontrado:", signupButton);
  console.log("Painel encontrado:", loginPanel);
  console.log("Botão fechar encontrado:", closePanelBtn);

  // Custom Dual Cursor Animation with GSAP
  const circle = document.querySelector(".circle");
  const circleFollow = document.querySelector(".circle-follow");

  function moveCircle(e) {
    // Círculo pequeno - movimento rápido
    gsap.to(circle, {
      duration: 0.3,
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out",
    });

    // Círculo grande - movimento mais lento
    gsap.to(circleFollow, {
      duration: 0.7,
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out",
    });
  }

  function hoverFunc() {
    gsap.to(circle, {
      duration: 0.3,
      opacity: 1,
      scale: 0,
    });
    gsap.to(circleFollow, {
      duration: 0.3,
      scale: 3,
    });
  }

  function unhoverFunc() {
    gsap.to(circle, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });
    gsap.to(circleFollow, {
      duration: 0.3,
      scale: 1,
    });
  }

  // Adiciona o evento de movimento do mouse
  window.addEventListener("mousemove", moveCircle);

  // Efeitos hover nos botões e links
  const buttons = document.querySelectorAll(
    ".btn, .button-submit, .close-panel-btn, a, .span"
  );

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", hoverFunc);
    button.addEventListener("mouseleave", unhoverFunc);
  });
  if (signupButton && loginPanel) {
    // Abrir painel
    signupButton.addEventListener("click", () => {
      console.log("Botão clicado! Adicionando classe active...");
      loginPanel.classList.add("active");
      console.log(
        "Classe active adicionada:",
        loginPanel.classList.contains("active")
      );

      // Efeito especial no cursor quando o painel abre
      hoverFunc();
      setTimeout(unhoverFunc, 600);
    }); // Fechar painel
    if (closePanelBtn) {
      closePanelBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Previne submit do form se necessário
        console.log("Botão fechar clicado! Removendo classe active...");
        loginPanel.classList.remove("active");
        console.log(
          "Classe active removida:",
          !loginPanel.classList.contains("active")
        );
      });
    }
  } else {
    console.error("Elementos não encontrados!");
  }
});
