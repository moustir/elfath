console.log('Hello World!');
let i =document.querySelector(".fa-bars")
let ix =document.querySelector(".x")
let hero =document.querySelector(".hero")
let act =document.querySelector("#act")
function button() {
  // Tab to edit
  let ulli=document.querySelector(".ulli")

  ulli.style.display="block"
i.style.display="none"
ix.style.display="block"
hero.style.filter="blur(3px)"
  
}

function buttonx() {
  // Tab to edit
  let ulli=document.querySelector(".ulli")

  ulli.style.display="none"
i.style.display="block"
ix.style.display="none"
hero.style.filter="blur(0)"
}


let currentImageIndex = 1;
let totalImages = 3; // تغيير هذا الرقم حسب عدد الصور الخاصة بك

function showImage(index) {
  let imageElement = document.getElementById('image');
  imageElement.src = `${index}.jpg`; // تغيير اسماء الصور حسب تسميتها الخاصة بك
}

function prevImage() {
  currentImageIndex = (currentImageIndex === 1) ? totalImages : currentImageIndex - 1;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex === totalImages) ? 1 : currentImageIndex + 1;
  showImage(currentImageIndex);
  
    act.innerHTML=`صورة #${currentImageIndex}`
  
   }

  
// عرض الصورة الأولى عند تحميل الصفحة
showImage(currentImageIndex);
