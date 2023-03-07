window.addEventListener('keydown', function(e){
   // console.log(e.keyCode)

   // * Estamos buscando y realizando el share en la variable (audio), de las
   // * etiquetas (audio) que cuenten con una propiedad (data-key) en la cual
   // * su valor sea al que está enviando el evento.
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

   // * Hacemos lo mismo para las teclas en el maquetado. Ésto con el fin de 
   // * alpicarle animación al momento de precionarlas.
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   
   // * Con esta línea validamos si llega el caso de que se oprima una tecla 
   // * la cual no tenga asignada una etiqueta (audio) con su (data-key) 
   // * asignada. Al momento de entontrar esa coincidencia para la función.
   if (!audio) return;

   // * Con este métdo eliminamos la espera mientras el audio se acaba de 
   // * reproducir y así, poder realizar el spam de la misma tecla varias
   // * veces.
   audio.currentTime = 0;

   // ? Utilizamos el método (play()) para ejecutar el audio de la variable
   // ? encontrada.
   audio.play();


   key.classList.add('playing');
});