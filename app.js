window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  let lineWidth = 10;
  let brushColor = 'black';
  document.getElementById('color').addEventListener('change', function() {
    brushColor = this.value;
  });


  document.getElementById('brush').addEventListener('change', function() {
    lineWidth = this.value;
  });




  //resizing the canvas

  canvas.height = window.innerHeight / 1.2;
  canvas.width = window.innerWidth;

  canvas.style.background = 'white'



  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finshedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = lineWidth;

    ctx.lineCap = 'round';


    ctx.lineTo(e.clientX, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.strokeStyle = brushColor;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY - canvas.offsetTop);

  }
  // event listeners


  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finshedPosition);
  canvas.addEventListener('mousemove', draw);


  alert('adjust brush size and change colour')
})