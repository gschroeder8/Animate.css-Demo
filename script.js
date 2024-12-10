// ENSURES REUSABILITY OF ANIMATION FUNCTIONS DO NOT MODIFY THIS FUNCTION!
function toggleAnimation(element, animationClass) {
    // remove the animation class if it's already applied
    element.classList.remove(animationClass);
    // trigger reflow to restart the animation
    void element.offsetWidth;
    // reapply the animation class
    element.classList.add(animationClass);
}

// TODO: finish logic

function bounceAnimation() {
    const bounceText = document.querySelector('.animate__bounce');
    // TODO: add bounce logic here

    // ^^^^^^
}

function flipAnimation() {
    const flipText = document.querySelector('.animate__flip');
    // TODO: add flip logic here

    // ^^^^^^
}

function wobbleAnimation() {
    const wobbleText = document.querySelector('.animate__wobble');
    // TODO: add wobble logic here

    // ^^^^^^
}
