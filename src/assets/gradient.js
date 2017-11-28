import { hsv2rgb } from '../assets/hsv2rgb.js'

let generateGradient = () => {
  const canvas = document.getElementById('gradientBlock')
  const ctx = canvas.getContext('2d')
  const grad = ctx.createLinearGradient(0, 0, 0, 320)
  let color = getRandomColor()
  grad.addColorStop(0, color[0])
  grad.addColorStop(1, color[1])
  ctx.fillStyle = grad
  ctx.rect(0, 0, 320, 320)

  ctx.fill()
}

let getRandomColor = () => {
  let Hue = Math.random() * 360
  return [hsv2rgb([Hue, 0.5, 1]), hsv2rgb([(Hue + 30) % 360, 0.5, 1])]
}

export {
  generateGradient
}
