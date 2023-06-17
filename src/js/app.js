anime({
    targets: '#me',  // Target the img element with the id of 'me'
    scale: [0.1, 1],  // Start small and grow to full size
    duration: 2000,   // Duration of 2000ms, or 2 seconds
    easing: 'easeOutCubic' // Speed curve for the animation
});

anime({
    targets: '#canada-flag-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});


// Assign your timeline to the 'photosAnimation' variable
let photosAnimation = anime.timeline({
    targets: '.photos img',
    easing: 'easeOutElastic(1, .8)',  // Easing function for bounce effect
    delay: anime.stagger(200)
    
})
    .add({
        translateY: ['-100%', '0%'],
        easing: 'easeOutBounce'  // Add bounce effect here
    })
    .add({
        scale: [1, 1.1, 1]
    });

// Pause the animation initially
photosAnimation.pause();

// Create an Intersection Observer
const photosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // When the '.photos' div comes into view
            photosAnimation.play();  // Start the anime.js timeline
        }
    });
}, { threshold: 0.1 });  // Adjust the threshold according to when you want the animation to start

// Start observing the '.photos' div
photosObserver.observe(document.querySelector('.photos'));

//make hand wave less often
// Create the hand animation outside of the waveHand function
const handAnimation = anime({
    targets: '.fa-hand',
    rotate: [{ value: '-25deg' }, { value: '15deg' }, { value: '-15deg' }, { value: '0deg' }],
    duration: 700,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: false,
});

// Define the waveHand function to play and pause the animation
function waveHand() {
    handAnimation.play();
    setTimeout(() => handAnimation.pause(), 700);
}

// Call waveHand every 10 seconds
setInterval(waveHand, 10000);
console.log(document.querySelector('#canada').getTotalLength());


