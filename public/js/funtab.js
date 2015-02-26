var sharkVideos = [
"http://media.giphy.com/media/iYvqm0yxUDdK0/giphy.mp4",
"http://media.giphy.com/media/jsROB8A2xxoVa/giphy.mp4",
"http://media.giphy.com/media/11NVDFdtTMAqIM/giphy.mp4",
"http://media.giphy.com/media/mGrMsZohJUbi8/giphy.mp4"
  ];



function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * sharkVideos.length));
  $("#fun").attr("src", sharkVideos[randomIndex]);
  $("#video")[0].load();
};