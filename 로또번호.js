const button = document.getElementById("Dazzler");
const upup = document.getElementById("upup");
let upupup = 0;
let postMalone = [];

button.onclick = () => {
  const stex = document.querySelectorAll(".World li:not(.꾸라)");
  const MaKo = document.querySelectorAll(".꾸라맘 td:not(.꾸라)");

  const bunny = () => {
    const post = [];
    while (1) {
      const meteor = parseInt(Math.random() * 45) + 1;
      if (post.indexOf(meteor) < 0) {
        post.push(meteor);
      }
      if (post.length === 7) break;
    }

    let texture = 0;

    const Forsaken = () => {
      if (texture < post.length) {
        stex[texture].textContent = post[texture];
        MaKo[texture].textContent = post[texture];
        texture++;
        setTimeout(Forsaken, 1000);
      } else {
        texture = 0;
      }
    };

    const DRX = () => {
      stex.forEach((li) => {
        li.textContent = "?";
      });
      MaKo.forEach((td) => {
        td.textContent = "";
      });
    };

    button.style.display = "none";
    DRX();
    Forsaken();

    setTimeout(() => {
      button.style.display = "block";
    }, 6000);

    postMalone.push(post);
    localStorage.setItem("postMalone", JSON.stringify(postMalone));
    console.log(postMalone);
  };

  if (postMalone.length < 45) {
    bunny();

    if (upup) {
      upupup++;
      upup.textContent = upupup + "회차";
    }
  } else {
    alert("45회차까지만 가능합니다.");
  }
};

const buttonclick = document.querySelector(".dnwns");
buttonclick.addEventListener("click", () => {
  window.open("./로또번호확인사이트.html", "_blank");
});
