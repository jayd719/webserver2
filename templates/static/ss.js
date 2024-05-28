// function POST(data, url) {
//   let jsonData = JSON.stringify(data);
//   $.ajax({
//     type: "POST",
//     url: url, 
//     data: jsonData,
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     success: function (response) {
//       console.log("Data sent successfully:", response);
//     },
//     error: function (error) {
//        console.log("COULD NOT SAVE DATA");
//     },
//   });
// }

// // Function to fetch user's location using Geolocation API and IP Geolocation API
// function fetchPreciseLocation() {
//   // Check if Geolocation is supported by the browser
//   if ("geolocation" in navigator) {
//     // Use Geolocation API to get precise coordinates
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log(position);
//         let dataValues = {'data':[latitude,longitude]};
//         POST(dataValues,'locationFromCords/',)
//       },
//       (error) => {
//         console.error("Error getting geolocation:", error);
//         // Handle geolocation error
//       }
//     );
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//     // Handle lack of Geolocation support
//   }
// }

// // Call the fetchPreciseLocation function to get the user's precise location
// fetchPreciseLocation();
