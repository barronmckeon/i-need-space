let credentials =
  "access_token=pk.eyJ1IjoiYnBtMjAyMiIsImEiOiJjbDF1eWV5anoyZGNmM2xtam0xbWJndGZwIn0.UNKA2BS8CkB9K8L2e8n2TQ";

let addressSearch = document.getElementById("address");
let norad = document.getElementById("norad");
let apiUrl = encodeURI(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressSearch}.json?` +
    credentials
);

//end point??  search text??
//Reference to the form1
let searchButton = document.getElementById("search");

searchButton.addEventListener("click", function () {
  console.log("submit");
  console.log(addressSearch.value);
  console.log(norad.value);

  console.log(apiUrl);
  //api fetch?
  //   let data1 = [];
  getData();
  async function getData() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    // data1 === data;
    console.log(data.features[0].center[0]);
    console.log(data.features[0].center[1]);
  }
});

//  81 W Market St #2526, Corning, NY 14830

//// const body = document.querySelector("body");

// const parent = document.createElement("div");
// parent.className = "parent";

// const child = document.createElement("div");
// child.className = "child";

// parent.appendChild(child);
// body.appendChild(parent);

// for (i = 0; i < 100; i++) {}

// title.addEventListener("click", function () {
//   getData();
//   async function getData() {
//     let url =
//       "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";

//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);

//     let storyUrl = "https://hacker-news.firebaseio.com/v0/";
//     let singleStory = getData[i] + ".json?print=pretty";
//     // let fullStory = storyUrl + singleStory
//   }
//   for (let i = 0; i < getData.length; i++) {
//     fetch(storyUrl + singleStory).then((data) => data.json());
//   }
// });

//   fetch(url).then((data) => data.json());
// }.then(function (data) {
//   dataArray.push(data);
//   console.log(dataArray);
// });

// async function getData() {
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);

//     .then(function (httpResponse) {
//       return httpResponse.json();
//     })

//     .then(function (data) {
//       //   dataArray.push(data);
//       console.log(data.id);
//       //   for (i = 0; dataArray.length < 100; i++) {
//       // console.log(dataArray);
//     });
// });

// // for (i = 0; i < 100; i++) {

// //data is the function created and used
// //   story.src = data.url; // key is the .message from json response

// //   let city = document.querySelector("#userCity");

// //   let cityButton = document.querySelector("#cityButton");

// //   let url = "https://goweather.herokuapp.com/weather/";

// //   cityButton.addEventListener("click", function () {
// //     fetch(url + city.value)
// //       .then(function (httpResponse) {
// //         return httpResponse.json();
// //       })

// //       .then(function (data) {
// //         console.log(data);
// //         document.getElementById("temp").innerHTML = data.temperature;

// //         document.getElementById("wind").innerHTML = data.wind;
// //       });
// //   });

// //   //get element by id doesnt need the #
// //   // querySelector can pick tag, class, still require # and .
