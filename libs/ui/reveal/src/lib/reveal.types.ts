export type RevealSlideChangeEvent = Event & {
  target: HTMLDivElement
  currentSlide: HTMLDivElement
  previousSlide: HTMLDivElement
  indexh: number
  indexv: number
  returnvalue: boolean
}
