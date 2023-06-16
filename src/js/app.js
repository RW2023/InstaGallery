
anime({
    targets: '#me',  // Target the img element with the id of 'me'
    scale: [0.1, 1],  // Start small and grow to full size
    duration: 2000,   // Duration of 2000ms, or 2 seconds
    easing: 'easeOutCubic' // Speed curve for the animation
});

anime.timeline({
    targets: '.photos img',
    easing: 'easeOutElastic(1, .8)',  // Easing function for bounce effect
    delay: anime.stagger(200)
})
    .add({
        translateY: ['-100%', '0%'],
    })
    .add({
        scale: [1, 1.1, 1]
    });

anime({
    targets: '.fa-hand',
    rotate: [{ value: '-25deg' }, { value: '15deg' }, { value: '-15deg' }, { value: '0deg' }],
    duration: 700,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
});