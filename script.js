const contentSpans = document.querySelectorAll('#content > div > div');
const contentButtons = document.querySelectorAll('#content > div > button');
const sliderSushiImages = document.querySelectorAll('#slider > div > img');
const sliderButtons = document.querySelectorAll('#slider > div > button');

const menuDropdownFunction = function menuDropdownFunction() {
    const spanVisible = function spanVisible(i) {
        contentSpans[i].style.visibility = 'visible';
    };

    const spanHidden = function spanHidden(i) {
        contentSpans[i].style.visibility = 'hidden';
    };

    const spanVisiblityController = function spanVisiblityController() {
        for (let i = 0; i < contentButtons.length; i += 1) {
            contentButtons[i].addEventListener('mouseenter', () => {
                spanVisible(i);
            });

            contentButtons[i].addEventListener('mouseleave', () => {
                spanHidden(i);
            });
        }
    };

    spanVisiblityController();
};

menuDropdownFunction();

const imageSliderFunction = function imageSliderFunction() {
    let i = 0;

    const nextImageFunction = function nextImageFunction() {
        i += 1;
        if (i >= sliderSushiImages.length) {
            console.log(i);
            i = 0;
        }
        sliderSushiImages.forEach((img) => {
            img.style.visibility = 'hidden';
            sliderSushiImages[i].style.visibility = 'visible';
        });
        // const fooTimeout = setTimeout(nextImageFunction, 10000); every single time this function is invoked it is creating a new scope of nextImageFunction
        // That is the reason it keeps doing the setTimeout(nextImageFunction, 10000) over and over.
    };

    const previousImageFunction = function previousImageFunction() {
        i -= 1;
        if (i < 0) {
            console.log(i);
            i = sliderSushiImages.length - 1;
        }
        sliderSushiImages.forEach((img) => {
            img.style.visibility = 'hidden';
            sliderSushiImages[i].style.visibility = 'visible';
        });
        // clearTimeout(setTimeout(nextImageFunction, 5000));
    };

    // const timeoutControl = function timeoutControl() {
    //     return setTimeout(nextImageFunction, 5000);
    // };

    const sliderController = (function sliderController() {
        sliderButtons[0].addEventListener('click', () => {
            previousImageFunction();
            // clearTimeout(timeoutControl);
        });
        sliderButtons[1].addEventListener('click', () => {
            nextImageFunction();
            // timeoutControl();
        });
    })();

    setInterval(nextImageFunction, 10000);
};

imageSliderFunction();

const imageChooserFunction = function imageChooserFunction() {
    const clickRenderSushiImage = function clickRenderSushiImage(i) {
        sliderSushiImages.forEach((img) => {
            img.style.visibility = 'hidden';
            sliderSushiImages[i].style.visibility = 'visible';
        });
    };

    for (
        let b = 2, i = 0;
        b < sliderButtons.length, i < sliderSushiImages.length;
        b += 1, i += 1
    ) {
        sliderButtons[b].addEventListener('click', () => {
            clickRenderSushiImage(i);
        });
    }
};
imageChooserFunction();
