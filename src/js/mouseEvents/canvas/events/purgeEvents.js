function purgeCanvasMouseEvents(canvas) {
  if (canvas.__eventListeners) {
    canvas.__eventListeners['mouse:down'] = [];
    canvas.__eventListeners['mouse:over'] = [];
    canvas.__eventListeners['mouse:out'] = [];
    canvas.__eventListeners['mouse:move'] = [];
    canvas.__eventListeners['mouse:up'] = [];
    canvas.__eventListeners['object:moving'] = [];
  }
}

export { purgeCanvasMouseEvents as default };
