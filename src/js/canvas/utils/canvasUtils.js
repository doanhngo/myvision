import IS_FIREFOX from '../../tools/utils/browserType';

let canvasElement1Displaying = true;
let oldCanvas = null;
let canvas = null;
let canvasElement1 = null;
let canvasElement2 = null;
let timeoutMilliseconds = 0;

function assignTimeoutMillisecondsDependingOnBrowser() {
  timeoutMilliseconds = IS_FIREFOX ? 12 : 0;
}

function assignCanvasForUtils(canvasObj) {
  canvas = canvasObj;
  canvas.randomProperty = 'test';
  canvasElement1 = document.getElementById('canvas-absolute-container-1');
  canvasElement2 = document.getElementById('canvas-absolute-container-2');
  assignTimeoutMillisecondsDependingOnBrowser();
}

function enableActiveObjectsAppearInFront() {
  canvas.preserveObjectStacking = false;
}

function assignNewCanvasForUtils(newCanvasObj) {
  oldCanvas = canvas;
  canvas = newCanvasObj;
}

function preventActiveObjectsAppearInFront() {
  if (canvas) {
    canvas.preserveObjectStacking = true;
  }
}

function switchCanvasWrapperInnerElementsDisplay() {
  setTimeout(() => {
    if (canvasElement1Displaying) {
      canvasElement1.style.display = 'none';
      canvasElement2.style.display = '';
      canvasElement1.style.left = '50%';
      canvasElement1.style.top = '50%';
      canvasElement1Displaying = false;
    } else {
      canvasElement1.style.display = '';
      canvasElement2.style.display = 'none';
      canvasElement2.style.left = '50%';
      canvasElement2.style.top = '50%';
      canvasElement1Displaying = true;
    }
    oldCanvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
    oldCanvas.clear();
  }, timeoutMilliseconds);
}

export {
  assignCanvasForUtils, enableActiveObjectsAppearInFront, assignNewCanvasForUtils,
  preventActiveObjectsAppearInFront, switchCanvasWrapperInnerElementsDisplay,
};
