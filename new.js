<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Animating in Code!</title>
  <style>
    body {
      background-color: #FFF;
      margin: 30px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    #contentContainer {
      width: 550px;
      height: 350px;
      border: 5px black solid;
      overflow: hidden;
      background-color: #DFF2FF;
      display: flex;
      align-items: center;
    }

    #circle {
      width: 200px;
      height: 200px;
      background-color: #20A6FF;
      border-radius: 50%;
    }

    #move {
      background-color: gold;
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
      border: 5px solid #333;
      outline: none;
    }
    #move:hover {
      background-color: coral;
    }
    #move:active {
      background-color: yellowgreen;
    }
  </style>
</head>

<body>
  <div id="contentContainer">
    <div id="circle"></div>
  </div>

  <input id="move" type="button" value="move"></input>

  <script>
    var circle = document.querySelector("#circle");

    var button = document.querySelector("#move");
    button.addEventListener("click", animate, false);

    var xPos = 0;

    function animate() {
      xPos += 10;

      circle.style.transform = `translate3d(${xPos}px, 0, 0)`;

      if (Math.abs(xPos) >= 900) {
        xPos = -500;
      }
    }
  </script>
</body>

</html>