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

//levelParams [buttons, rows]
let direction;
const levelParams = [7, 5];
const startParams = [9, 4, 4, 3, 2, 2, 4, 9];
const buttonWidth = window.innerWidth / levelParams[0];
const bottomBound = Math.floor(window.innerHeight * .9);
const rowHeight = bottomBound / levelParams[1];
console.log('bottomBouns is ' + bottomBound, 'rowheight is' + rowHeight);

// row handler start
function rowCreate(numOfRows) {
    let row = [];
    for (let i = 0; i < numOfRows; i++) {
        row.push(rowHeight * i);
    }
    console.log(row)
    return row;
}

// row positions
const positionArr = rowCreate(levelParams[1]);
// row handler end


function buttonCreator(numOfButtons) {
    buttonArr = [];
    for (let i = 0; i < numOfButtons; i++) {
        buttonArr[i] = new PIXI.Graphics();
        return buttonArr;
    }
}

const button = buttonCreator(levelParams[0]);
console.log(button);


function stageSpawn(butNum) {
    direction = Math.floor(Math.random() * 2);
    console.log(direction + 'd');
    let buttonContainer = [];
    for (let i = 0; i < butNum; i++) {
        buttonContainer.push(i);

        console.log('button' + i);
        button[0].beginFill(0xff1515)
            // x,y,width,height of button in that order
            .drawRect(buttonWidth * i, positionArr[startParams[i]], buttonWidth, rowHeight)
            .endFill();
        onClick()

    }
    console.log(buttonContainer[0]);

    app.stage.addChild(button[0]);
    button[0].interactive = true;
    button[0].on('pointerdown', onClick);
}

//--------------------------------------
stageSpawn(levelParams[0], startParams,);
//--------------------------------------



function createDividers(divNum) {
    let divideArr = [];
    for (let i = 0; i < divNum; i++) {
        divideArr.push(i - 1);
    }
}
const divider = new Graphics();
divider.lineStyle(2, 0x05d6362, 1)
    .moveTo(buttonWidth - 1, 0)
    .lineTo(buttonWidth, bottomBound);

createDividers();







function onClick() {

}




const adFrame = new Graphics();
divider.lineStyle(2, 0x05d6362, 1)
    .moveTo(0, window.innerHeight * .1 * 9)
    .lineTo(window.innerWidth, bottomBound);

app.stage.addChild(divider);


const adTextStyle = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 24,
    fill: 0x05d6362
});

const adText = new PIXI.Text('AD goes here', adTextStyle);

app.stage.addChild(adText);
adText.anchor.set(0.5);
adText.x = window.innerWidth / 2;
adText.y = window.innerHeight * .95;


