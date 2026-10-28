/* MEDITÉ - funciones (plantas, carrito, recetario, opiniones, menú) */
const NUMERO = "59172857796";
/* img = foto grande | icono = imagen pequeña redonda de la esquina (código aparte, pon otra foto aquí)*/
const plantas = [
 {id:1,nombre:"Hierba Buena",cientifico:"Mentha spicata",categoria:"Digestivas",precio:15,img:"hierbabuena.jpeg",icono:"img/icono-hierbabuena.jpg",
  desc:"Planta aromática de la familia de las mentas, muy usada en la cocina y en la medicina casera andina. Su aceite esencial (rico en carvona) le da el aroma fresco y un efecto suave sobre el estómago.",
  propiedades:["Ayuda a aliviar gases y cólicos","Favorece la digestión después de comer","Relaja suavemente el músculo del intestino","Refresca el aliento"],
  precaucion:"Puede aumentar la acidez en personas con reflujo. Consulta antes de dársela a bebés."},
 {id:2,nombre:"Cedrón",cientifico:"Aloysia citrodora",categoria:"Relajantes",precio:15,img:"cedron.jpeg",icono:"img/icono-cedron.jpg",
  desc:"Arbusto de intenso aroma a limón, también llamado hierba luisa. Se usa tradicionalmente en infusión para calmar los nervios y las molestias digestivas leves.",
  propiedades:["Ayuda a relajarse y conciliar el sueño","Alivia molestias digestivas leves","Uso tradicional para el nerviosismo","Aroma cítrico agradable"],
  precaucion:"Evita el uso prolongado y consulta si estás embarazada o en lactancia."},
 {id:3,nombre:"Boldo",cientifico:"Peumus boldus",categoria:"Digestivas",precio:15,img:"boldo.jpeg",icono:"img/icono-boldo.jpg",
  desc:"Árbol originario de Chile cuyas hojas contienen boldina, un alcaloide con acción antioxidante. Se usa tradicionalmente para la digestión de comidas pesadas y el malestar del hígado.",
  propiedades:["Ayuda a digerir comidas grasosas","Uso tradicional para el malestar hepático","Contiene boldina, antioxidante natural","Estimula suavemente la bilis"],
  precaucion:"No usar con cálculos u obstrucción de las vías biliares, ni en embarazo o lactancia. No es para consumo diario prolongado."},
 {id:4,nombre:"Malva",cientifico:"Malva sylvestris",categoria:"Antiinflamatorias",precio:15,img:"malva.jpeg",icono:"img/icono-malva.jpg",
  desc:"Planta rica en mucílagos, una sustancia gelatinosa que forma una capa protectora sobre las mucosas. Por eso se usa tradicionalmente para la garganta irritada y la tos seca.",
  propiedades:["Suaviza la garganta irritada","Calma la tos seca","Efecto emoliente y antiinflamatorio suave","Alivia la irritación de las mucosas"],
  precaucion:"Si tomas medicamentos, sepáralos una hora de la malva: sus mucílagos pueden retrasar su absorción."},
 {id:5,nombre:"Menta",cientifico:"Mentha piperita",categoria:"Digestivas",precio:15,img:"menta.jpeg",icono:"img/icono-menta.jpg",
  desc:"Híbrido natural de hierba buena y menta de agua, rico en mentol. Es una de las plantas más estudiadas para la pesadez y el malestar digestivo.",
  propiedades:["Alivia gases y malestar estomacal","Refresca y ayuda a despejar la nariz","Ayuda con la tensión y el dolor de cabeza leve","Efecto antiespasmódico"],
  precaucion:"Puede empeorar el reflujo. No se recomienda en bebés ni niños muy pequeños."},
 {id:6,nombre:"Paico",cientifico:"Dysphania ambrosioides",categoria:"Digestivas",precio:15,img:"paico.jpeg",icono:"img/icono-paico.jpg",
  desc:"Hierba aromática muy usada en los Andes, en infusión y en la cocina, para el dolor de estómago y los cólicos. Su aroma intenso se debe a un aceite esencial que debe usarse con moderación.",
  propiedades:["Uso tradicional para cólicos y gases","Ayuda en la digestión","Uso tradicional contra parásitos intestinales","Aroma intenso y característico"],
  precaucion:"No usar en embarazo ni lactancia. En cantidades altas o por tiempo prolongado puede ser tóxico: tómalo poco y por pocos días."},
 {id:7,nombre:"Perejil",cientifico:"Petroselinum crispum",categoria:"Depurativas",precio:15,img:"perejil.jpeg",icono:"img/icono-perejil.jpg",
  desc:"Hierba culinaria rica en vitaminas C y K y en antioxidantes (flavonoides y apiol). En infusión se usa tradicionalmente como diurético suave.",
  propiedades:["Diurético suave: favorece eliminar líquidos","Aporta vitaminas C y K","Rico en antioxidantes","Refresca el aliento"],
  precaucion:"Evita cantidades altas en el embarazo. Consulta si tomas anticoagulantes o tienes problemas renales."},
 {id:8,nombre:"Orégano",cientifico:"Origanum vulgare",categoria:"Respiratorias",precio:15,img:"oregano.jpeg",icono:"img/icono-oregano.jpg",
  desc:"Planta rica en carvacrol y timol, compuestos con acción antimicrobiana. En infusión se usa tradicionalmente para la tos, el resfrío y los cólicos.",
  propiedades:["Ayuda a aliviar tos y resfrío","Favorece la digestión y alivia gases","Contiene carvacrol y timol, antimicrobianos naturales","Aporta antioxidantes"],
  precaucion:"En el embarazo evita tomarlo en cantidad. Puede causar alergia en personas sensibles a la menta o la albahaca."},
 {id:9,nombre:"Diente de León",cientifico:"Taraxacum officinale",categoria:"Depurativas",precio:15,img:"dientedeleon.jpeg",icono:"img/icono-dientedeleon.jpg",
  desc:"Planta muy común cuyas hojas se usan en infusión como depurativas. Aportan potasio y compuestos amargos que estimulan el apetito y la digestión.",
  propiedades:["Diurético natural (aporta potasio)","Estimula la digestión y el apetito","Apoyo tradicional para el hígado","Rica en vitaminas A, C y K"],
  precaucion:"No usar con obstrucción biliar. Puede dar alergia si eres sensible a margaritas o manzanilla. Consulta si tomas diuréticos."},
 {id:10,nombre:"Sawinto",cientifico:"Clinopodium bolivianum",categoria:"Digestivas",precio:15,img:"sawinto.jpeg",icono:"img/icono-sawinto.jpg",
  desc:"Planta aromática andina de la familia de las mentas, usada en la medicina tradicional de los valles de Bolivia, sobre todo para el estómago.",
  propiedades:["Uso tradicional para gases y cólicos","Ayuda en la digestión","Aroma fresco, tipo menta andina","Tradicional de los valles andinos"],
  precaucion:"Planta de uso tradicional con poca investigación científica: consúmela con moderación."},
 {id:11,nombre:"Eucalipto",cientifico:"Eucalyptus globulus",categoria:"Respiratorias",precio:15,img:"eucalipto.jpeg",icono:"img/icono-eucalipto.jpg",
  desc:"Árbol cuyas hojas contienen eucaliptol (1,8-cineol), un compuesto estudiado por su efecto expectorante. Se usa tradicionalmente para el resfrío y la congestión.",
  propiedades:["Ayuda a despejar las vías respiratorias","Favorece la expulsión de flemas","Su vapor reconforta en los resfríos","Efecto antiséptico suave"],
  precaucion:"Solo en infusión y en poca cantidad; nunca tomes su aceite esencial. No para niños pequeños ni en embarazo; evítalo con problemas hepáticos."},
 {id:12,nombre:"Hoja de Naranja",cientifico:"Citrus sinensis",categoria:"Relajantes",precio:15,img:"hojanaranja.jpg.jpeg",icono:"img/icono-hojanaranja.jpg",
  desc:"Las hojas del naranjo tienen un aroma cítrico suave y se usan tradicionalmente para calmar los nervios y ayudar a descansar por la noche.",
  propiedades:["Efecto relajante suave","Ayuda a conciliar el sueño","Alivia el nerviosismo","Sabor dulce y aromático"],
  precaucion:"Si tomas medicamentos sedantes, consulta antes de combinarlos."},
 {id:13,nombre:"Hoja de Guayaba",cientifico:"Psidium guajava",categoria:"Digestivas",precio:15,img:"hojadeguayaba.jpeg",icono:"img/icono-hojaguayaba.jpg",
  desc:"Sus hojas contienen taninos y flavonoides. Se usan tradicionalmente para la diarrea leve y las molestias de estómago; también se ha estudiado su efecto sobre el azúcar en la sangre.",
  propiedades:["Uso tradicional para la diarrea leve","Astringente por sus taninos","Antioxidante y antiinflamatorio","Apoyo en molestias de estómago"],
  precaucion:"Si usas medicamentos para la diabetes, consulta: puede bajar el azúcar. Si la diarrea dura más de 2 días, busca atención médica."},
 {id:14,nombre:"Muña",cientifico:"Minthostachys mollis",categoria:"Digestivas",precio:15,img:"muña.jpeg",icono:"img/icono-muña.jpg",
  desc:"Planta aromática de los Andes, usada desde tiempos ancestrales para la digestión y para el mal de altura (soroche). Tiene un sabor intenso, mentolado.",
  propiedades:["Alivia gases y cólicos","Uso tradicional para el soroche","Ayuda a despejar la nariz","Aroma mentolado"],
  precaucion:"En el embarazo consulta antes de tomarla."},
 {id:15,nombre:"Romero",cientifico:"Salvia rosmarinus (Rosmarinus officinalis)",categoria:"Antiinflamatorias",precio:15,img:"romero.jpeg",icono:"img/icono-romero.jpg",
  desc:"Arbusto mediterráneo rico en ácido rosmarínico y carnosol, antioxidantes estudiados por su efecto antiinflamatorio. En infusión se usa para la digestión y como estimulante suave.",
  propiedades:["Antioxidante (ácido rosmarínico)","Favorece la digestión","Estimulante suave: ayuda a la concentración","Uso tradicional para la circulación"],
  precaucion:"Evítalo en el embarazo; si tienes presión alta o epilepsia, consulta antes. Mejor no tomarlo de noche."},
 {id:16,nombre:"Coca",cientifico:"Erythroxylum coca",categoria:"Digestivas",precio:15,img:"coca.jpeg",icono:"img/icono-coca.jpg",
  desc:"Hoja sagrada de los Andes, de uso ancestral para el soroche, el cansancio y la digestión. El mate de coca es un consumo tradicional en Bolivia.",
  propiedades:["Tradicional para el mal de altura","Ayuda a la digestión","Energizante suave","Reduce la sensación de cansancio"],
  precaucion:"Contiene alcaloides: evítala en embarazo, lactancia, hipertensión y problemas del corazón. Puede dar positivo en pruebas antidoping."},
 {id:17,nombre:"Manzanilla",cientifico:"Matricaria chamomilla",categoria:"Relajantes",precio:15,img:"manzanilla.jpeg",icono:"img/icono-manzanilla.jpg",
  desc:"Flor muy estudiada, con apigenina y bisabolol. Es una de las infusiones más usadas del mundo para calmar el estómago y ayudar al descanso.",
  propiedades:["Calma el estómago y alivia gases","Ayuda a relajarse y dormir","Efecto antiinflamatorio suave","Alivia cólicos leves"],
  precaucion:"Puede dar alergia en personas sensibles a margaritas, ambrosía o crisantemos."},
 {id:18,nombre:"Toronjil",cientifico:"Melissa officinalis",categoria:"Relajantes",precio:15,img:"toronjil.jpeg",icono:"img/icono-toronjil.jpg",
  desc:"También llamado melisa o bálsamo de limón; contiene ácido rosmarínico y citral. Se usa tradicionalmente para el nerviosismo, la ansiedad leve y el insomnio.",
  propiedades:["Calma los nervios y la ansiedad leve","Ayuda a dormir mejor","Alivia molestias digestivas de origen nervioso","Aroma cítrico"],
  precaucion:"Puede dar somnolencia. Si tomas medicamentos para la tiroides, consulta antes."}
];
/* RECETARIO: [minutos de reposo, cuándo tomarlo, consejo]*/ 
const recetas = {
 1:[5,"Después de las comidas, para la digestión.","Agrega unas gotas de limón."],
 2:[5,"Por la tarde o antes de dormir.","Queda muy bien con una cucharadita de miel."],
 3:[5,"Después de comer.","Tómalo sin endulzar y no más de 2 tazas al día."],
 4:[7,"Cuando la garganta esté irritada.","Con miel tibia suaviza aún más."],
 5:[5,"Después de comer o cuando tengas dolor de cabeza.","También puedes tomarla fría, con hielo."],
 6:[5,"Después de comer.","Úsalo en poca cantidad y evítalo en el embarazo."],
 7:[5,"Por la mañana.","Combina bien con unas gotas de limón."],
 8:[5,"Cuando haya tos o frío.","Con miel y limón es más reconfortante."],
 9:[8,"Por la mañana, antes del desayuno.","Tómalo sin endulzar para sentir su sabor natural."],
 10:[5,"Después de comer.","Puedes mezclarlo con un sobre de hierba buena."],
 11:[5,"Cuando tengas resfrío o congestión.","Inhala un poco el vapor antes de tomarlo."],
 12:[5,"Por la tarde o noche, para relajarte.","Con un poco de miel tiene un sabor suave y dulce."],
 13:[7,"Cuando tengas malestar de estómago.","Tómalo tibio y sin azúcar."],
 14:[5,"Después de comer o cuando estés en altura.","Queda muy bien combinada con manzanilla."],
 15:[5,"Por la mañana o al mediodía.","Evítalo por la noche y durante el embarazo."],
 16:[5,"Después de comer o en zonas de altura.","Consumo tradicional; evítalo en el embarazo o con presión alta."],
 17:[5,"Antes de dormir.","Con una cucharadita de miel es perfecta para la noche."],
 18:[5,"Por la tarde o noche, cuando estés con nervios.","Unas gotas de limón realzan su sabor cítrico."]
};

/* PRESENTACIÓN A GRANEL: edita nombre, precio e imagen */
const granel = [
 {id:101,nombre:"Frascos",precio:18,img:"granel-50.jpeg"}
];
const FALLA = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23e8f5e9'/><text x='50' y='64' font-size='46' text-anchor='middle'>🌿</text></svg>";
const $ = id => document.getElementById(id);
let carrito = [], actual = null;

/* Tarjetas */
function cargarPlantas(){
  $('grid-plantas').innerHTML = plantas.map(p => `
  <div class="card" data-cat="${p.categoria}">
    <div class="foto">
      <img src="${p.img}" class="grande" alt="${p.nombre}" onerror="this.onerror=null;this.src=FALLA">
      <img src="${p.icono}" class="icono-esquina" alt="Detalle ${p.nombre}" onerror="this.onerror=null;this.src='${p.img}'">
    </div>
    <h3>${p.nombre}</h3>
    <p class="precio">${p.precio} Bs</p>
    <ul class="propiedades">${p.propiedades.slice(0,3).map(x=>`<li>${x}</li>`).join('')}</ul>
    <div class="botones-card">
      <button class="btn-desc" onclick="verDescripcion(${p.id})">Descripción</button>
      <button class="btn-rec" onclick="verReceta(${p.id})">Recetario</button>
      <button class="btn-agregar" id="ag${p.id}" onclick="agregar('p${p.id}','${p.nombre}',${p.precio});marcar(${p.id})">🛒 Agregar</button>
    </div>
  </div>`).join('');
}
function marcar(id){const b=$('ag'+id);b.classList.add('agregado');b.textContent='✓ Agregado';setTimeout(()=>{b.classList.remove('agregado');b.textContent='🛒 Agregar'},1200)}

/* Franja horizontal de categorías (se duplica para movimiento continuo) */
function cargarFranja(){
  const cats = ['Todas', ...new Set(plantas.map(p=>p.categoria))];
  const html = cats.map(c=>`<button class="burbuja${c==='Todas'?' activa':''}" data-f="${c}" onclick="filtrar('${c}')">${c}</button>`).join('');
  $('pista').innerHTML = html + html;
}
function filtrar(cat){
  document.querySelectorAll('.burbuja').forEach(b=>b.classList.toggle('activa',b.dataset.f===cat));
  document.querySelectorAll('.card').forEach(c=>c.style.display=(cat==='Todas'||c.dataset.cat===cat)?'':'none');
  $('plantas').scrollIntoView();
}

/* Descripción */
function verDescripcion(id){
  actual = plantas.find(p=>p.id===id);
  $('modal-img').src = actual.img; $('modal-img').onerror = function(){this.onerror=null;this.src=FALLA};
  $('modal-titulo').textContent = actual.nombre;
  $('modal-cientifico').textContent = actual.cientifico;
  $('modal-categoria').textContent = 'Categoría: ' + actual.categoria;
  $('modal-desc').textContent = actual.desc;
  $('modal-prec').innerHTML = '<b>Precauciones:</b> ' + actual.precaucion;
  $('modal-propiedades').innerHTML = actual.propiedades.map(x=>`<li>${x}</li>`).join('');
  $('modal-precio').textContent = actual.precio + ' Bs';
  $('btn-modal-agregar').onclick = ()=>{agregar('p'+actual.id,actual.nombre,actual.precio);cerrarModal()};
  $('modal').classList.add('activo');
}
function cerrarModal(){$('modal').classList.remove('activo')}

/* A granel */
function cargarGranel(){
  $('sel-granel').innerHTML = plantas.map(p=>`<option>${p.nombre}</option>`).join('');
  $('fila-granel').innerHTML = granel.map(g=>`
    <div class="granel-card">
      <img src="${g.img}" alt="${g.nombre}" onerror="this.onerror=null;this.src=FALLA">
      <b>${g.nombre}</b><span>${g.precio} Bs</span>
      <button onclick="agregarGranel(${g.id})">🛒 Agregar</button>
    </div>`).join('');
}
function agregarGranel(id){
  const g = granel.find(x=>x.id===id), planta = $('sel-granel').value;
  agregar('g'+id+planta, planta+' a granel', g.precio);
}
function irA(id){$(id).scrollIntoView({behavior:'smooth'})}

/* Recetario */
function verReceta(id){
  const p = plantas.find(x=>x.id===id), r = recetas[id];
  $('rec-titulo').textContent = 'Té de ' + p.nombre;
  $('rec-sub').textContent = 'Recetario · ' + p.cientifico;
  $('rec-ing').innerHTML = ['1 sobre MEDITÉ de ' + p.nombre, '1 taza de agua (200 ml)', 'Opcional: miel o limón, a tu gusto'].map(x=>`<li>${x}</li>`).join('');
  $('rec-pasos').innerHTML = ['Calienta el agua hasta que hierva.', 'Coloca el sobre en la taza y vierte el agua caliente.', `Tapa y deja reposar ${r[0]} minutos.`, 'Retira el sobre y toma el té tibio.'].map(x=>`<li>${x}</li>`).join('');
  $('rec-cuando').textContent = r[1];
  $('rec-extra').textContent = r[2];
  $('rec-agregar').onclick = ()=>{agregar('p'+p.id,p.nombre,p.precio);cerrarReceta()};
  $('modal-receta').classList.add('activo');
}
function cerrarReceta(){$('modal-receta').classList.remove('activo')}

/* Carátula */
function entrar(){
  document.body.classList.remove('bloqueado');
  $('caratula').classList.add('salir');
  const v = $('bg-video'); if(v) v.play().catch(()=>{});
  window.scrollTo(0,0);
}

/* Opiniones: las estrellas y el comentario se envían al WhatsApp de la dueña */
/* Para mostrar opiniones reales en la página, agrégalas aquí: {nombre:"Ana",estrellas:5,texto:"Excelente"} */
const opiniones = [];
let nota = 0;
function cargarOpiniones(){
  $('estrellas').innerHTML = [1,2,3,4,5].map(n=>`<button type="button" aria-label="${n} estrellas" onclick="poner(${n})">★</button>`).join('');
  $('op-lista').innerHTML = opiniones.map(o=>`<div class="op-item"><div class="st">${'★'.repeat(o.estrellas)}${'☆'.repeat(5-o.estrellas)}</div><p>${o.texto}</p><b>${o.nombre}</b></div>`).join('');
}
function poner(n){nota = n; [...$('estrellas').children].forEach((b,i)=>b.classList.toggle('on',i<n))}
function enviarOpinion(){
  const txt = $('op-texto').value.trim(), nom = $('op-nombre').value.trim() || 'Anónimo';
  if(!nota) return alert('Elige tu calificación con las estrellas.');
  if(!txt) return alert('Escribe tu comentario.');
  const msg = `⭐ Nueva opinión para MEDITÉ\nNombre: ${nom}\nCalificación: ${'★'.repeat(nota)}${'☆'.repeat(5-nota)} (${nota}/5)\nComentario: ${txt}`;
  window.open(`https://wa.me/${NUMERO}?text=${encodeURIComponent(msg)}`, '_blank');
  $('op-texto').value = ''; $('op-nombre').value = ''; poner(0);
}

/* Carrito */
function agregar(key,nombre,precio){
  const it = carrito.find(c=>c.key===key);
  it ? it.qty++ : carrito.push({key,nombre,precio,qty:1});
  pintar();
}
function cambiar(key,d){
  const it = carrito.find(c=>c.key===key); it.qty += d;
  if(it.qty<=0) carrito = carrito.filter(c=>c.key!==key);
  pintar();
}
function pintar(){
  $('lista-carrito').innerHTML = carrito.length ? carrito.map(c=>`
    <div class="it"><span>${c.nombre}</span>
    <span><button onclick="cambiar('${c.key}',-1)">−</button> ${c.qty} <button onclick="cambiar('${c.key}',1)">+</button></span>
    <b>${c.qty*c.precio} Bs</b></div>`).join('') : '<p style="color:#888">Tu carrito está vacío.</p>';
  $('contador').textContent = carrito.reduce((s,c)=>s+c.qty,0);
  $('total').textContent = carrito.reduce((s,c)=>s+c.qty*c.precio,0);
  const cajas = carrito.filter(c=>c.key[0]==='p').reduce((s,c)=>s+c.qty,0), g = Math.floor(cajas/5);
  $('gratis').innerHTML = g ? `<div class="gratis">🎁 Te corresponde <b>${g}</b> caja(s) GRATIS de un té a elección. Indícalo en tu pedido.</div>` : '';
}
function toggleCarrito(){$('carrito').classList.toggle('activo')}
function enviarWhatsApp(){
  if(!carrito.length) return alert('Agrega al menos un producto a tu selección.');
  const lineas = carrito.map(c=>`- ${c.nombre} x${c.qty} = ${c.qty*c.precio} Bs`).join('\n');
  const cajas = carrito.filter(c=>c.key[0]==='p').reduce((s,c)=>s+c.qty,0), g = Math.floor(cajas/5);
  const msg = `Hola MEDITÉ, quiero hacer este pedido:\n${lineas}\n${g?`Promoción: ${g} caja(s) gratis (té a elegir: ___)\n`:''}Total: ${$('total').textContent} Bs`;
  window.open(`https://wa.me/${NUMERO}?text=${encodeURIComponent(msg)}`,'_blank');
}

cargarPlantas(); cargarFranja(); cargarGranel(); cargarOpiniones(); pintar();

/* ===== TUS ARCHIVOS: cambia aquí los nombres y listo ===== */
const MEDIA = {
  videoInicio:   "video1.mp4",       // video de fondo detrás de "Pequeños sobres, grandes beneficios"
  imagenInicio:  "img/inicio.jpg",   // imagen de fondo del inicio (se ve si no hay video)
  fotoCaratula:  "img/caratula.jpg", // foto circular de la carátula (donde dice MEDITÉ)
  fondoCaratula: "fondo2.jpeg"       // imagen de fondo de la carátula
};
(function(){
  const v = document.getElementById('bg-video'), hi = document.getElementById('hero-img'), cf = document.querySelector('.car-foto');
  v.querySelector('source').src = MEDIA.videoInicio; v.poster = MEDIA.imagenInicio; v.load();
  hi.style.display = ''; hi.src = MEDIA.imagenInicio;
  cf.style.display = ''; cf.src = MEDIA.fotoCaratula;
  document.documentElement.style.setProperty('--car-fondo', `url('${MEDIA.fondoCaratula}')`);
})();

/* Menú, barra fija y animaciones al desplazar */
const nav = document.getElementById('nav'), burger = document.getElementById('burger'), enlaces = document.getElementById('navLinks');
const barra = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', barra, {passive:true}); barra();
burger.onclick = () => { burger.classList.toggle('active'); enlaces.classList.toggle('open'); };
enlaces.querySelectorAll('a').forEach(a => a.onclick = () => { burger.classList.remove('active'); enlaces.classList.remove('open'); });
const aparecer = document.querySelectorAll('.card,.granel-card,.titulo-seccion,.sub-seccion,.combo-banner,.sobre-texto,.sobre-img,.op-caja,.ubicacion-badge,.como-llegar,.cab-beneficio');
aparecer.forEach(e => e.classList.add('reveal'));
if('IntersectionObserver' in window){
  const io = new IntersectionObserver(en => en.forEach(x => { if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target); } }), {threshold:.12});
  aparecer.forEach(e => io.observe(e));
} else aparecer.forEach(e => e.classList.add('in'));