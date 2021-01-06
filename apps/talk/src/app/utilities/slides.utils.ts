export function schedule(time: number, fn: Function) {
  return window.setTimeout(() => fn(), time)
}
