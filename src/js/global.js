const nowversion = "1.0.0";
let dnytitle;
let canupgradeapp = 0;
let lang = window.zh_cn;
let langchange_arr = ["home-title-bar","home-quick-start-upgrade","home-quick-start-version"];
const lang_ = navigator.language
const now = new Date();
const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const seconds = ('0' + now.getSeconds()).slice(-2);


const formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;





document.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.bg');
    const shapesCount = 10 + Math.floor(Math.random() * 15); // 随机生成10-25个形状

    const colorVariants = [
    '#E6E6FA', '#D8BFD8', '#DDA0DD',
    '#EED2EE', '#F0E6FF', '#F5F0FF'
    ];

    for (let i = 0; i < shapesCount; i++) {
    const shape = document.createElement('div');
    shape.className = 'shape';

    const size = 50 + Math.random() * 150;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const initialRotation = Math.random() * 360; // Initial rotation
    const color = colorVariants[Math.floor(Math.random() * colorVariants.length)];
    const borderRadius = 5 + Math.random() * 30;

    shape.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        border-radius: ${borderRadius}px;
        background: ${color};
        left: ${left}%;
        top: ${top}%;
        transform: rotate(${initialRotation}deg); 
    `;
    // Note: initial transform is set via style. Animation will be additive or override based on how it's defined.
    // For simplicity, the animation keyframes will define the full transform including rotation.

    bg.appendChild(shape);

    // --- JavaScript controlled animation ---
    const randomDuration = 120000 + Math.random() * 90000; // 30s to 70s
    const animationDelay = Math.random() * 15000; // 0 to 15s delay

    // Max travel distance for this shape's animation cycle
    const maxTravel = 80 + Math.random() * 120; // 80px to 200px

    // Random translation points for the animation path
    // Values are relative to the shape's starting point (0,0 in translate terms)
    const tX1 = (Math.random() - 0.5) * 2 * maxTravel; // Random x for 25%
    const tY1 = (Math.random() - 0.5) * 2 * maxTravel; // Random y for 25%
    const rot1 = initialRotation + (70 + Math.random() * 40); // Rotate further

    const tX2 = (Math.random() - 0.5) * 2 * maxTravel; // Random x for 50%
    const tY2 = (Math.random() - 0.5) * 2 * maxTravel; // Random y for 50%
    const rot2 = initialRotation + (160 + Math.random() * 40);

    const tX3 = (Math.random() - 0.5) * 2 * maxTravel; // Random x for 75%
    const tY3 = (Math.random() - 0.5) * 2 * maxTravel; // Random y for 75%
    const rot3 = initialRotation + (250 + Math.random() * 40);

    // Ensure final rotation is a multiple of 360deg from initial for smooth looping
    const finalRot = initialRotation + ( (Math.floor(Math.random() * 2) + 1) * 360 );


    const dynamicKeyframes = [
        { transform: `translate(0px, 0px) rotate(${initialRotation}deg)` }, // Start at initial rotation
        { transform: `translate(${tX1}px, ${tY1}px) rotate(${rot1}deg)` },
        { transform: `translate(${tX2}px, ${tY2}px) rotate(${rot2}deg)` },
        { transform: `translate(${tX3}px, ${tY3}px) rotate(${rot3}deg)` },
        { transform: `translate(0px, 0px) rotate(${finalRot}deg)` } // Return to origin, complete full spins
    ];

    shape.animate(dynamicKeyframes, {
        duration: randomDuration,
        iterations: Infinity,
        easing: 'ease', // For smooth transitions
        delay: animationDelay
    });
    }
});

