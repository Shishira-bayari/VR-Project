AFRAME.registerComponent("clickable", {
  init: function () {
    var el = this.el;

    
    var colors = ["white", "red", "green", "blue", "yellow", "purple", "cyan", "magenta"];
    var colorIndex = 0;

    //  event listener for click
    el.addEventListener("click", function (event) {
      
      var nextColor = colors[colorIndex];

      
      el.setAttribute("color", nextColor);

      
      colorIndex = (colorIndex + 1) % colors.length;
    });
  },
});

  