function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}
 let index = 0;
        function moveSlide(step) {
            const slides = document.querySelector('.carousel-inner');
            const totalSlides = document.querySelectorAll('.carousel-item').length;
            index = (index + step + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        window.onload = function () {
            const leftImg = document.getElementById("leftImg");
            const rightImg = document.getElementById("rightImg");
            
            setTimeout(() => {
                leftImg.style.transform = "translateX(100%)";
                rightImg.style.transform = "translateX(-100%)";
            }, 2000);
        
        };
    
        document.getElementById("copyright").innerText = 
        `© ${new Date().getFullYear()} My Website - All Rights Reserved`;

        function buttonClicked() {
            alert('Your Order Is Booked');
          }

          const imageElement = document.getElementById("image");
          const images = [
             
              "Images/Raya_Eco_6.jpg",
              "Images/Raya_Eco_7.jpg",
              "Images/Raya_flux_7.jpg",
              "Images/Raya_flux_8.jpg",
              "Images/Raya_Eco_5.jpg",
              
              
          ];
          
          let currentIndex = 0;
          
          function changeImage() {
              // Fade out
              imageElement.style.opacity = 0;
          
              setTimeout(() => {
                  currentIndex = (currentIndex + 1) % images.length;
                  imageElement.src = images[currentIndex];
                  // Fade in
                  imageElement.style.opacity = 1;
              }, 1000);
          }
          
          // Change image every 3 seconds
          setInterval(changeImage, 1000);

          

        