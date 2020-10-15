//总数据
let total = 100000;
//一次添加20条
let once = 20;
//总共渲染次数
let loopRender = Math.ceil(total / once);
//已经渲染次数
let countRender = 0;
const ul = document.createElement("ul");
function add() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < once; i++) {
    const li = document.createElement("li");
    li.innerHTML = Math.floor(Math.random() * total);
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
  countRender += 1;
  loop();
}

function loop() {
  if (loopRender > countRender) {
    window.requestAnimationFrame(add);
  }
}
