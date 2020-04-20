import { getMovableObjectsState } from '../../../tools/stateMachine';

function setAllObjectsToUneditable(canvas) {
  canvas.forEachObject((iteratedObj) => {
    if (iteratedObj.shapeName !== 'tempPoint' && iteratedObj.shapeName !== 'firstPoint') {
      if (iteratedObj.shapeName !== 'bndBox') {
        iteratedObj.perPixelTargetFind = false;
      }
      iteratedObj.selectable = false;
      iteratedObj.hoverCursor = 'crosshair';
    }
  });
}

function setDrawCursorMode(canvas) {
  canvas.discardActiveObject();
  setAllObjectsToUneditable(canvas);
  canvas.defaultCursor = 'crosshair';
  canvas.hoverCursor = 'crosshair';
  canvas.renderAll();
}

function resetObjectCursors(canvas) {
  if (getMovableObjectsState()) {
    canvas.forEachObject((iteratedObj) => {
      iteratedObj.hoverCursor = null;
    });
  } else {
    canvas.forEachObject((iteratedObj) => {
      iteratedObj.hoverCursor = 'default';
    });
  }
  canvas.renderAll();
}

function waitingForLabelCursorMode(canvas) {
  canvas.forEachObject((iteratedObj) => {
    iteratedObj.hoverCursor = 'default';
  });
  canvas.defaultCursor = 'default';
}

export { setDrawCursorMode, resetObjectCursors, waitingForLabelCursorMode };
