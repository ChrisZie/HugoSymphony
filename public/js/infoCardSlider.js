// Design by Catalin V. (@hiskio https://twitter.com/hiskio) 
// https://dribbble.com/shots/3408986-Info-Card-Daily-UI-045

const slideElements = ['.back__slide', '.infoCard__slide', '.infoCardContent__slide'];
let inProgress = false;

const goToSlide = (slideElements, index) => {
  if (!inProgress){
    inProgress = true;
    
    $('.active').addClass('exit');
    $('.active').removeClass('active');
    slideElements.forEach( elem => {
      $(`${elem}:nth-child(${index})`).addClass('active');
    })
    
    const evenSlide = index % 2 === 0;
    if (evenSlide)
      $('.infoCardContent__ping').addClass('infoCardContent__ping--right');
    else
      $('.infoCardContent__ping').removeClass('infoCardContent__ping--right');
    $('.infoCardContent__ping--noanimation').removeClass('infoCardContent__ping--noanimation');
    
    setTimeout(() => $('.exit').removeClass('exit'), 1000);
    setTimeout(() => inProgress = false, 2000);
  }
}

$('.infoCardContent__slide:nth-child(1) .button').on('click', () => goToSlide(slideElements, 2) );
$('.infoCardContent__slide:nth-child(2) .button').on('click', () => goToSlide(slideElements, 3) );
$('.infoCardContent__slide:nth-child(3) .button').on('click', () => goToSlide(slideElements, 4) );
$('.infoCardContent__slide:nth-child(4) .button').on('click', () => goToSlide(slideElements, 1) );

//setTimeout( () => goToSlide(slideElements, 2), 2000 );
//setTimeout( () => goToSlide(slideElements, 1), 6000 );

// let amount = 0;
// let slide = 0;

// const progress = () => {
//   amount++
//   $('.active .progress').css('transform', `scaleX(${amount/400})`)
//   if (amount >= 400){
//     amount = 0;
//     $('.active .progress').css('transform', `scaleX(${amount/400})`)
//     slide = (slide + 1) % 2 ;
//     goToSlide(slideElements, slide + 1);
//     clearInterval(progressInterval);
//     setTimeout(()=>{ 
//       progressInterval = setInterval(progress,20); 
//       $('.back__slide:not(.active) .progress').css('transform', 'scaleX(0)')
//     }, 2000);
//   }
// }

// let progressInterval = setInterval(progress,20);