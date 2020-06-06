onResize();

window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false)

document.documentElement.addEventListener('touchmove', function (ev) {
  const e = ev || window.event;

  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, false)

window.addEventListener('resize', onResize, false);

function onResize () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';
}
