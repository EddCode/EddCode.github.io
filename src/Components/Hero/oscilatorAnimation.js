Math.TWO_PI = Math.PI * 2
let ctx
const target = {}
let tendrils = []
const settings = {
  debug: false,
  friction: 0.5,
  trails: 30,
  size: 50,
  dampening: 0.25,
  tension: 0.98
}
const color = randomIntFromInterval(1, 2)

export const init = (event) => {
  document.removeEventListener('mousemove', init)
  document.removeEventListener('touchstart', init)

  document.addEventListener('mousemove', mousemove)
  document.addEventListener('touchmove', mousemove)
  document.addEventListener('touchstart', touchstart)

  mousemove(event)
  reset()
  loop()
}

export const reset = () => {
  tendrils = []

  for (let i = 0; i < settings.trails; i++) {
    tendrils.push(new Tendril({
      spring: 0.45 + 0.025 * (i / settings.trails)
    }))
  }
}

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const loop = () => {
  if (!ctx.running) return

  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = '#1D1D1D'
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.globalCompositeOperation = 'lighter'
  ctx.strokeStyle = 'hsla(346,98%,56%,0.25)'
  ctx.lineWidth = 1

  ctx.strokeStyle = color == 1
    ? 'hsla(346,98%,56%,0.25)'
    : 'hsla(171,98%,56%,0.25)'

  for (var i = 0, tendril; i < settings.trails; i++) {
    tendril = tendrils[i]
    tendril.update()
    tendril.draw()
  }

  ctx.frame++
  requestAnimFrame(loop)
}

export const resize = () => {
  ctx.canvas.width = window.innerWidth
  ctx.canvas.height = window.innerHeight
}

export const start = () => {
  if (!ctx.running) {
    ctx.running = true
    loop()
  }
}

export const stop = () => {
  ctx.running = false
}

export const mousemove = event => {
  if (event.touches) {
    target.x = event.touches[0].pageX
    target.y = event.touches[0].pageY
  } else {
    target.x = event.clientX
    target.y = event.clientY
  }
  event.preventDefault()
}

export const touchstart = event => {
  if (event.touches.length == 1) {
    target.x = event.touches[0].pageX
    target.y = event.touches[0].pageY
  }
}

const initOscilattor = () => {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
      window.setTimeout(fn, 1000 / 60)
    }
  })()

  ctx = document.getElementById('canvas').getContext('2d')

  ctx.running = true
  ctx.frame = 1

  hue = new Oscillator({
    phase: Math.random() * Math.TWO_PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285
  })

  document.addEventListener('mousemove', init)
  document.addEventListener('touchstart', init)
  document.body.addEventListener('orientationchange', resize)
  window.addEventListener('resize', resize)
  window.addEventListener('focus', start)
  window.addEventListener('blur', stop)

  resize()
}

function Oscillator (options) {
  this.init(options || {})
}

Oscillator.prototype = (function () {
  let value = 0

  return {
    init: function (options = {}) {
      this.phase = options.phase || 0
      this.offset = options.offset || 0
      this.frequency = options.frequency || 0.001
      this.amplitude = options.amplitude || 1
    },
    update: function () {
      this.phase += this.frequency
      value = this.offset + Math.sin(this.phase) * this.amplitude
      return value
    },
    value: function () {
      return value
    }
  }
})()

function Tendril (options) {
  this.init(options || {})
}

Tendril.prototype = (function () {
  function Node () {
    this.x = 0
    this.y = 0
    this.vy = 0
    this.vx = 0
  }

  return {
    init: function (options) {
      this.spring = options.spring + (Math.random() * 0.1) - 0.05
      this.friction = settings.friction + (Math.random() * 0.01) - 0.005
      this.nodes = []

      for (var i = 0, node; i < settings.size; i++) {
        node = new Node()
        node.x = target.x
        node.y = target.y

        this.nodes.push(node)
      }
    },
    update: function () {
      let spring = this.spring
      let node = this.nodes[0]

      node.vx += (target.x - node.x) * spring
      node.vy += (target.y - node.y) * spring

      for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
        node = this.nodes[i]

        if (i > 0) {
          prev = this.nodes[i - 1]

          node.vx += (prev.x - node.x) * spring
          node.vy += (prev.y - node.y) * spring
          node.vx += prev.vx * settings.dampening
          node.vy += prev.vy * settings.dampening
        }

        node.vx *= this.friction
        node.vy *= this.friction
        node.x += node.vx
        node.y += node.vy

        spring *= settings.tension
      }
    },
    draw: function () {
      let x = this.nodes[0].x
      let y = this.nodes[0].y
      let a, b

      ctx.beginPath()
      ctx.moveTo(x, y)

      for (let i = 1, n = this.nodes.length - 2; i < n; i++) {
        a = this.nodes[i]
        b = this.nodes[i + 1]
        x = (a.x + b.x) * 0.5
        y = (a.y + b.y) * 0.5

        ctx.quadraticCurveTo(a.x, a.y, x, y)
      }

      a = this.nodes[i]
      b = this.nodes[i + 1]

      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y)
      ctx.stroke()
      ctx.closePath()
    }
  }
})()

export default initOscilattor
