function stopWatch(options) {
  var displayElm = document.getElementsByClassName("display")[0];
  var timer = null;
  var startButton = document.getElementsByClassName("startButton")[0];

  startButton.addEventListener("click", function () {
    if (timer === null) {
      console.log("start:" + timer);
      var seconds = 0;
      timer = setInterval(function () {
        seconds++;
        displayElm.innerText = seconds;
        console.log(seconds);
      }, 1000);

      addMessage("開始");
    }
  });

  var stopButton = document.getElementsByClassName("stopButton")[0];
  stopButton.addEventListener("click", function () {
    if (timer !== null) {
      console.log("stop:" + timer);
      clearInterval(timer);
      timer = null;

      addMessage("終了");
    }
  });

  var logElm = document.querySelector(".log");

  function addMessage(message) {
    var messageElm = document.createElement("div");
    var now = new Date();
    messageElm.innerText =
      now.getHours() +
      "時間" +
      now.getMinutes() +
      "分" +
      now.getSeconds() +
      "秒" +
      message;
    messageElm.classList = ["message"];
    logElm.appendChild(messageElm);
  }

  options = options || {};
  var color = options.color || "lightbule";
  var backgroundColor = options.backgroundColor || "black";
  var displayElm = document.getElementsByClassName("display")[0];
  displayElm.getElementsByClassName.color = color;
  displayElm.getElementsByClassName.backgroundColor = backgroundColor;
}

var options = {
  color: "limegreen",
  backgroundColor: "#333",
};
stopWatch(options);
