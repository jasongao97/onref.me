let hsv2rgb = (hsv) => {
  let rgb = []
  // 引入H
  for (let offset = 240, i = 0; i < 3; i++, offset -= 120) {
    let x = Math.abs((hsv[0] + offset) % 360 - 240)
    if (x <= 60) rgb[i] = 255
    else if (x > 60 && x < 120) rgb[i] = ((1 - (x - 60) / 60) * 255)
    else rgb[i] = 0
  }

  // 引入S.V
  for (let i = 0; i < 3; i++) {
    rgb[i] += (255 - rgb[i]) * (1 - hsv[1])
    rgb[i] *= hsv[2]
    rgb[i] = Math.round(rgb[i])
  }
  return 'rgb(' + rgb.join(',') + ')'
}

export {
  hsv2rgb
}
