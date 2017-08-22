function populateRefSelector(refSelector, inputId) {
  document.querySelectorAll(refSelector).forEach(node => node.innerHTML = el(inputId).value)
}

function goToStep(n) {
  document.querySelectorAll('[id^="step"]').forEach(node => node.style.display = 'none')
  el(`step-${n}`).style.display = 'block'
  scrollTo(document.body, 0, 300)
}

function dontUnderstandStep() {
  alert('follow the steps as best u can now, and we\'ll talk about it later')
}

function el(id) {
  return document.getElementById(id)
}

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}
