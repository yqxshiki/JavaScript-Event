window.addEventListener(
  "scroll",
  function () {
    //当前视口高度
    const clientHeight = document.documentElement.clientHeight;
    //滚动条高度
    const scrollTop = document.documentElement.scrollTop;
    //网页内容实际高度
    const scrollHeight = document.documentElement.scrollHeight;
    if (clientHeight + scrollTop >= scrollHeight) {
      // 检测到滚动至页面底部，进行后续操作
      // ...
    }
  },
  false
);
