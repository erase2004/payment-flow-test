export function resetReactiveObject(reactiveObj) {
  Object.keys(reactiveObj).forEach(key => {
    reactiveObj[key] = undefined
  })

  return reactiveObj
}