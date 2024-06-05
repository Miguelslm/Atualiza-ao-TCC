// let slideIndex = 0;
// showSlides();


// document.getElementById('Prev-Card').addEventListener('click', function() {
//     plusSlides(-1);
// });

// document.getElementById('Next-Card').addEventListener('click', function() {
   
//     if (slideIndex < 2) {
//         plusSlides(1);
//     }
// });

// function plusSlides(n) {
//   slideIndex += n;
//   showSlides();
// }

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("box-two");
//   if (slideIndex >= slides.length) {slideIndex = 0}
//   if (slideIndex < 0) {slideIndex = slides.length - 4} 
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = slideIndex; i < slideIndex + 4; i++) {
//       if (i < slides.length) {
//           slides[i].style.display = "block";
//       }
//   }
// }