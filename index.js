// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
const bttn = document.getElementById('save_lincoln')
console.log(bttn)
// const interval = document.getElementById('interval')
// console.log(parseInt(interval))

const hiddenDiv = document.getElementById('hidden-message')

bttn.addEventListener('click', function() {
  const interval = document.getElementById('interval').value
console.log(parseInt(interval));

  fadeOutEffect(interval*0.01)
  hiddenDiv.style="position: relative; margin-left: 30px; font-family: Optima, ‘Lucida Grande’;"
})

function fadeOutEffect(interval) {
  const foreGround = document.getElementById('foreground')
    var fadeEffect = setInterval(function () {
        if (!foreGround.style.opacity) {
            foreGround.style.opacity = 1;
        }
        if (foreGround.style.opacity < 0.01) {
            clearInterval(fadeEffect);
        } else {
            foreGround.style.opacity -= 0.01;
        }
    }, interval);
}
