const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true,
});

app.renderer.backgroundColor = 0x081411;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
//-----all above instantiates the app-----//

// get the device dimensions
function getX(x) {
    return window.innerWidth * x;
}

function getY(y) {
    return window.innerHeight * y;
}

function getH(y) {
    return window.innerHeight * y;
}

function getW(y) {
    return window.innerWidth * y;
}


class Slider {
    height = 0;
    currPosition = 0;
    direction = false;
    button = new PIXI.Graphics();
    constructor(height, currPosition, direction) {
        const button = new PIXI.Graphics();
        button.interactive = true;
        
        this.height = height;
        this.currPosition = currPosition;
        this.direction = direction;
        this.button = button;
    }
    
    
    Next() {
        // edge cases
        if (this.currPosition == this.height) {
            this.currPosition = this.currPosition - 1;
            this.height, this.currPosition, false;
        } else if (this.currPosition == 1) {
            this.currPosition = this.currPosition + 1;
            this.height, this.currPosition, true;
        } else {
            // in the middle of the slider
            if (this.direction) {
                this.currPosition = this.currPosition + 1;
                this.height, this.currPosition, true;
            } else {
                this.currPosition = this.currPosition - 1;
                this.height, this.currPosition, false;
            }
        }
        
        button.on('pointerdown', this.Next);
        // Add some more code to change the position (x,y,w,h) 
    }

}

class Stage {
    listOfSliders = [];
    constructor(listOfSliders) {
        if (listOfSliders.Count < 2) {
            console.log('invalid game. less than 2 sliders present.')
        }
        this.listOfSliders = listOfSliders;
    }
    ExecuteTurn = function (index) {
        for (let i = 0; i < this.listOfSliders.Count; i++) {
            if (index != i) {
                this.listOfSliders[i].Next();
            }
        }
    }
    IsWinning() {
        let firstCurrPosition = this.listOfSliders[0].currPosition;
        let isWinning = true;
        for (let i = 1; i < this.listOfSliders.Count; i++) {
            if (firstCurrPosition != this.listOfSliders[i].currPosition) {
                isWinning = false;
                return isWinning;
            }
        }
        return isWinning;
    }
}

function drawButton(numberOfSliders, sliderNum, slider) {
    // x and width are determined by 

    let x = getX((1 / numberOfSliders) * (sliderNum - 1));
    let y = getY(0.9 - (0.9 / 10) * slider.currPosition);
    let w = getW(1 / numberOfSliders);
    let h = getH(0.1);
    // y and height are determined by this sliders currPosition

    slider.button.beginFill(0xff1515)
        .drawRect(x, y, w, h)
        .endFill();
}

let slider = new Slider(10, 1, true);


app.stage.addChild(slider.button);


drawButton(5, 1, slider);