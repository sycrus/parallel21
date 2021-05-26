//Culture studies:  Terri, Kennis, May, Chel

var instructionActive = true;
var xCount = 0;

AFRAME.registerComponent('manager', {
  init: function () { 
    const sceneEl = this.el;

    //AR ui
    const marker = document.querySelector('#marker');
    // document.querySelector("#instructionBox").style.display = 'none';
    
    sceneEl.addEventListener('loaded', function (e) {
        console.log("Scene loaded");
    }, {once:true});
    
    sceneEl.addEventListener('markerFound', function (e) {
        console.log("Marker found");
        marker.emit('A'); 
    }, {once:true});
    
    sceneEl.addEventListener('markerLost', function (e) {
        console.log("Marker lost");
    });
  },
});

AFRAME.registerComponent('button-controller', {
  init:function() {

    const marker = document.querySelector('#marker');
    const nextButton = document.querySelector('#nextButton');
    const prevButton = document.querySelector("#prevButton");
    const backButton = document.querySelector("#backButton");
    const infoButton = document.querySelector("#infoButton");
    const instructionXButton = document.querySelector("#instruction1-X");
    const instruction1 = document.querySelector("#instruction1");
    const instruction2 = document.querySelector("#instruction2");

    infoButton.addEventListener("click", function(e) {
      instructionActive = true; xCount = 0;
    });
    
    instructionXButton.addEventListener("click", function(e) {
      if(xCount < 3) { xCount++;} else {xCount = 0;}
    });
  },
    tick: function() {
    //html ui
    const infoButton = document.querySelector("#infoButton");
    const instructionXButton = document.querySelector("#instruction1-X");
    const instruction1 = document.querySelector("#instruction1");
    const instruction2 = document.querySelector("#instruction2");
    
    const nextButton = document.querySelector('#nextButton');
    const prevButton = document.querySelector("#prevButton");
    const backButton = document.querySelector("#backButton");

    if(instructionActive) {
      if(xCount > 1) {
        instructionActive = false;
      } 
      if (xCount == 0) {
        infoButton.style.display = 'none'; instruction1.style.display = 'block'; instructionXButton.style.display = 'block'; instruction2.style.display = 'none'; 
      } 
      if (xCount == 1) {
        infoButton.style.display = 'none'; instruction1.style.display = 'none'; instructionXButton.style.display = 'block'; instruction2.style.display = 'block';
      }
    } else {
      infoButton.style.display = 'block'; instructionXButton.style.display = 'none'; instruction1.style.display = 'none'; instruction2.style.display = 'none';
    }
  },
});

AFRAME.registerComponent("link-handler", { 
  init: function() {
    //AR ui
    const marker = document.querySelector('#marker');
    
    //thumbnails
    const terri = document.querySelector("#terri_tn");
    const kennis = document.querySelector("#kennis_tn");
    const may = document.querySelector("#may_tn");
    const chel = document.querySelector("#chel_tn");

    terri.addEventListener("click", function() { 
      marker.emit("D");
      window.addEventListener("animationtimelinecomplete", function() {
        window.open("https://terri-page.glitch.me/");
      },{once:true});
    });
    
    kennis.addEventListener("click", function() { 
      marker.emit("D");
      window.addEventListener("animationtimelinecomplete", function() {
        window.open("https://kennis-page.glitch.me/");
      },{once:true});
    });
    
    may.addEventListener("click", function() { 
      marker.emit("D");
      window.addEventListener("animationtimelinecomplete", function() {
        window.open("https://may-page.glitch.me/");
      },{once:true});
    });
    
    chel.addEventListener("click", function() { 
      marker.emit("D");
      window.addEventListener("animationtimelinecomplete", function() {
        window.open("https://chel-page.glitch.me/");
      },{once:true});
    });
  
  },
});


