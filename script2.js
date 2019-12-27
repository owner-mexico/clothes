var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Owner",
                headlineSecondLine: "",
                sublineFirstLine: "100% Mexicana",
                sublineSecondLine: "Owner",
                bgImg: "ownergorra.jpg",
                //rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg"
				headlineFirstLine1:"Owner"
            },
            {
                headlineFirstLine: "La compañía Owner se encuentra bajo el giro Industrial-Comercial, debido a quenosotros consumimos materia prima y la convertimos en un producto terminadotrabajando en conjunto con la parte comercial para proceder a su distribución y venta.",
                headlineSecondLine: "",
                sublineFirstLine: "100% Mexicana",
                sublineSecondLine: "Owner",
               bgImg: "ownerpolo.jpg",
               // rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
			   headlineFirstLine1:"Quienes Somos"
            },
            {
                headlineFirstLine: "OWNER surgió mediante a una previa investigación sobre la moda, tendencia o un nuevocambio a la vestimenta la cual trata de lograr una combinación de ropa básica-casual-formal para los tipos de ocasiones a presentarse, a momento de tener en mente un diseñose trabaja en él mediante la siguiente frase “ropa para ir a trabajar en oficina y sentirtecómodo usando la misma en una reunión.",
               
                headlineSecondLine: "Ultricies",
                sublineFirstLine: "100% Mexicana",
                sublineSecondLine: "Owner",
               
				   bgImg: "ownercamisa.jpg",
				   headlineFirstLine1:"Mision"
                //rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})