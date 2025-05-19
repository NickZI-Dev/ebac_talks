AOS.init();

const dataDoEvento = new Date('May 23, 2025 18:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const time = setInterval(function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

  document.getElementById('count').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

  if(distanciaAteOEvento < 0) {
    clearInterval(time);
    document.getElementById('count').innerHTML = 'Evento expirado'
  }

}, 1000)