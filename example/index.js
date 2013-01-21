var h = require('h')
var modal = require('../')
var m
document.body.appendChild(
  h('div',
    modal(m = h('div',
      h('h1', 'hello there'),
      'this is in the modal...'
    ), {
      click: function (e) {
        console.log(e, this)
        if(this !== e.target) return
        e.target.parentElement.removeChild(e.target)
        m.parentElement.removeChild(m)        
      }
    }),
    (function () {
      var l = 1000
      var a = []
      while(l--) a.push('lorem ipsum')
      return a
    })()
  )
)
