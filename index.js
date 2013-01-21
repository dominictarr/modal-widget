//given an element, insert
var h = require('h')

module.exports = function (element, options) {
  if('function' === typeof options)
    options = {click: options}

  var el = h('div', {style:{opacity: 1}}, element.element || element)
  var z = el.style.zIndex
//  if(!z || z == 1)
  //  el.style.setProperty('z-index', z = 2)

  el.style.setProperty('position', 'absolute')
  el.style.setProperty('background', 'white')

  var shadow = h('div', {style: {
      position: 'absolute', 
      width: '100%',
      height: '100%',
      //use background instead of opacity,
      //because it's not inherited.
      'background-color': 'rgba(0,10,0,0.6)',
      marin: '0px',
      padding: '0px',
      'z-index': 1,
      left: '0px',
      top: '0px'
    }
  }, options) 

/*  process.nextTick(function () {
    console.log('el', el, el.parentElement)
    var parent = el.parentElement
    if(parent) {
      parent.appendChild(shadow)
      function resize() {
        shadow.style.width = parent.clientWidth + 'px'
        shadow.style.height = parent.clientHeight + 'px'
      }
      window.addEventListener('resize', resize, false)
      resize()
    } else {
      if(console)
        console.log('cannot append shadow')
    }
  }) */

  shadow.appendChild(el)
  return shadow

  return el
}
