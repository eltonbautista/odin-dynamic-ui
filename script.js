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
    };
    const fooTimeout = setTimeout(nextImageFunction, 5000);
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

    const sliderController = (function sliderController() {
        sliderButtons[0].addEventListener('click', previousImageFunction);
        sliderButtons[1].addEventListener('click', nextImageFunction);
    })();
};

imageSliderFunction();
