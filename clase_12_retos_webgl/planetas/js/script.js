window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;
                tamanoTierra = 27;
                tamanoMercurio = 10;
                tamanoVenus = 25;
                tamanoMarte = 14;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: 'img/jupiter.jpg'
							  }),

		escalaJupiter = true;
        var tierra = crearPlaneta({
									tamano 	: tamanoTierra,
									imagen	: 'img/tierra.jpg'
							  }),
                escalaTierra = true;
	var mercurio = crearPlaneta({
									tamano 	: tamanoMercurio,
									imagen	: 'img/mercurio.jpg'
							  }),
                escalaMercurio= true;
        var venus = crearPlaneta({
									tamano 	: tamanoVenus,
									imagen	: 'img/venus.jpg'
							  }),

		escalaVenus = true;
        var marte = crearPlaneta({
									tamano 	: tamanoMarte,
									imagen	: 'img/marte.jpg'
							  }),

		escalaMarte = true;
                                                          
	escena.add(jupiter);
        escena.add(tierra);
	escena.add(mercurio);
        escena.add(venus);
        escena.add(marte);
        var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
        tierra.position.x=-20;
        mercurio.position.x=-250;
        venus.position.x=-150;
        marte.position.x=70;
	escena.add(camara);
	function renderizar()
	{
		jupiter.rotation.y += 0.001;
                tierra.rotation.y += 0.09;
                mercurio.rotation.y += 0.5;
                venus.rotation.y += 0.02;
                marte.rotation.y += 0.1;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
