const qrImage = document.getElementById('qrImage');
const qrMissing = document.getElementById('qrMissing');

qrImage.addEventListener('error', function () {
  qrImage.style.display = 'none';
  qrMissing.style.display = 'flex';
});

qrImage.addEventListener('load', function () {
  qrImage.style.display = 'block';
  qrMissing.style.display = 'none';
});
