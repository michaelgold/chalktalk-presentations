var imageSequence = [];
var slides = [];
var images = [];

function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  else return results[1];
}

var presentationID = getParam("play");
let presentationURL =
  apiHost +
  "/slides?presentation_id=" +
  presentationID +
  "&$limit=100&$sort[order]=1";

$.ajax({
  url: presentationURL
})
  .then(function(result) {
    //work with data.item

    //console.log(result);
    data = result.data;
    for (var key in data) {
      window.slides.push(data[key]);
    }
    //console.log(data);
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        let image = data[key]["image_id"];
        if (image != null) {
          let ajaxUrl = apiHost + "/images?_id=" + image;
          $.ajax({
            url: ajaxUrl
          }).then(function(result) {
            //console.log(result.data);
            for (var key in result.data) {
              id = result.data[key]["_id"];
              data = result.data[0]["pictures"][0]["src"];
              window.images[id] = data;
              console.log(window.images);
            }
          }).done(function(){
            updateImageSequence();
          });
        }
      }
    }
  })

function updateImageSequence() {
  console.log("updatating imagesequence");
  window.imageSequence = [];
  //console.log(result);
  data = window.slides;

  //console.log(data);
  var slides = [];
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      let caption = data[key]["caption"];
      let title = data[key]["title"];
      let image = data[key]["image_id"];
      let slide = "";
      let slideText = "";
      if (title != null) {
        slideText = title;
        if (caption != null) {
          slideText += "\n" + caption;
        }
      } else if (caption != null) {
        slideText += caption;
      }
      if (image == null) {
        slide = "title:" + slideText;
        window.imageSequence.push(slide);
      } else {
        imageData = window.images[image];
        slide =
          slideText == null
            ? imageData
            : "caption:" + slideText + ";" + imageData;
        window.imageSequence.push(slide);
      }
    }
  }
}

//console.log(result);
