
class Slider {
    height = 0;
    currPosition = 0;
    direction = false;
    button = new PIXI.Graphics();
    constructor(height, currPosition, direction) {
        this.constructorHelper(height, currPosition, direction);
    }
    constructorHelper(height, currPosition, direction, buttonWidth, row3, rowHeight, onClick) {
        if (currPosition >= height) {
            currPosition = height;
            direction = false;
        } else
            if (currPosition <= 1) {
                currPosition = 1;
                direction = true;
            }
        this.height = height;
        this.currPosition = currPosition;
        this.direction = direction;

        // create the pixi graphic
        let button = new PIXI.Graphics();
           // position the object
            //         x	number	
            // The X coord of the top-left of the rectangle

            // y	number	
            // The Y coord of the top-left of the rectangle

            // width	number	
            // The width of the rectangle

            // height	number	
            // The height of the rectangle
        button.beginFill(0xff1515)
            .drawRect()
            .endFill();
        button.interactive = true;
        button.on('pointerdown', onClick);
        // position the object

        this.button = button;
    }

    Next() {
        // edge cases
        if (this.currPosition == this.height) {
            this.currPosition = this.currPosition - 1;
            this.constructorHelper(this.height, this.currPosition, false);
        } else if (this.currPosition == 1) {
            this.currPosition = this.currPosition + 1;
            this.constructorHelper(this.height, this.currPosition, true);
        } else {
            // in the middle of the slider
            if (this.direction) {
                this.currPosition = this.currPosition + 1;
                this.constructorHelper(this.height, this.currPosition, true);
            } else {
                this.currPosition = this.currPosition - 1;
                this.constructorHelper(this.height, this.currPosition, false);
            }
        }

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