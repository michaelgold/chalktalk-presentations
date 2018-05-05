// Set host for rest api

// use development server
let host = "http://localhost:3030";


// use production server
// let host = "http://localhost:3030";


var imageSequence = [];


function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  else return results[1];
}


var presentationID = getParam("play");
let presentationURL = host +
  "/slides?presentation_id=" +
  presentationID +
  "&$limit=100&$sort[order]=1";

$.ajax({
  url: presentationURL
}).then(function(result) {
  //work with data.item

  //console.log(result);
  data = result.data;
  //console.log(data);
  var keys = [];
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
        let ajaxUrl = host + "/images?_id=" + image;
        $.ajax({
          url: ajaxUrl
        })
          .then(function(result) {
            imageData = result.data[0]["pictures"][0]["src"];
            slide =
              slideText == null
                ? imageData
                : "caption:" + slideText + ";" + imageData;
          })
          .then(function(result) {
            window.imageSequence.push(slide);
          });
      }
    }
  }
  return slides;
});

console.log(imageSequence);
//console.log(result);
