window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;
		tamanoMarte = 10;
		tamanoTierra = 20;
		tamanoVenus = 20;
		tamanoMercurio = 7;
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
	escena.add(jupiter);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	escena.add(camara);
	function renderizar()
	{
		jupiter.rotation.y += 0.001;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();



	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var tierra = crearPlaneta({
									tamano 	: tamanoTierra,
									imagen	: 'img/tierra.jpg'
							  }),
		escalaTierra = true;
	escena.add(tierra);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(tierra.position);
	tierra.position.x = -30;
	escena.add(camara);
	function renderizar()
	{
		//tierra.rotation.y += 0.001;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();



	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var marte = crearPlaneta({
									tamano 	: tamanoMarte,
									imagen	: 'img/marte.jpg'
							  }),
		escalaMarte = true;
	escena.add(marte);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(marte.position);
	marte.position.x = 80;
	escena.add(camara);
	function renderizar()
	{
		//marte.rotation.y += 0.001;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();


	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var venus = crearPlaneta({
									tamano 	: tamanoVenus,
									imagen	: 'img/venus.jpg'
							  }),
		escalaVenus = true;
	escena.add(venus);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(venus.position);
	venus.position.x = -140;
	escena.add(camara);
	function renderizar()
	{
		//venus.rotation.y += 0.001;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();



	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var mercurio = crearPlaneta({
									tamano 	: tamanoMercurio,
									imagen	: 'img/mercurio.jpg'
							  }),
		escalaMercurio = true;
	escena.add(mercurio);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(mercurio.position);
	mercurio.position.x = -250;
	escena.add(camara);
	function renderizar()
	{
		//mercurio.rotation.y += 0.001;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();

};
