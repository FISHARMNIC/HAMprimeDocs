
window.addEventListener('load', function () {

var template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="resources/mandatory/template.css">
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/lato" type="text/css"/>
    <link rel="stylesheet" href="resources/stylesheet.css">
</head>
<body style="background-color: rgb(73, 73, 73);">
    <div class="sidenav">
        <a href="index.html">Home</a>
        <a href="test.html">test</a>
<!-- !IN_NAV -->
    </div>
      
      <div id="__main__">

      </div>
</body>
</html>`
var oldBody = document.body.innerHTML
document.write(template)
document.getElementById("__main__").innerHTML = oldBody

})
