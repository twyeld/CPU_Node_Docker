

//var outputFromPackage = require("./osutilsexpressgauge.js");

// var randomScalingFactor = function() {
// 		 return Math.round(Math.random() * 100);
// 		};

		Chart.defaults.global.defaultFontFamily = "Verdana";

		var config = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [randomScalingFactor()],
			backgroundColor: 'rgb(255, 0, 0)',
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "CPU ave use"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};

		window.onload = function() {
		 var ctx = document.getElementById("chart-area").getContext("2d");
		 var ctx2 = document.getElementById("chart-area2").getContext("2d");
		 var ctx3 = document.getElementById("chart-area3").getContext("2d");
		 var ctx4 = document.getElementById("chart-area4").getContext("2d");
		 var ctx5 = document.getElementById("chart-area5").getContext("2d");
		 var ctx6 = document.getElementById("chart-area6").getContext("2d");
		 var ctx7 = document.getElementById("chart-area7").getContext("2d");
		 var ctx8 = document.getElementById("chart-area8").getContext("2d");
		 var ctx9 = document.getElementById("chart-area9").getContext("2d");
		 window.myRadialGauge = new Chart(ctx, config);
		 window.myRadialGauge2 = new Chart(ctx2, config);
		 window.myRadialGauge3 = new Chart(ctx3, config);
		 window.myRadialGauge4 = new Chart(ctx4, config);
		 window.myRadialGauge5 = new Chart(ctx5, config);
		 window.myRadialGauge6 = new Chart(ctx6, config);
		 window.myRadialGauge7 = new Chart(ctx7, config);
		 window.myRadialGauge8 = new Chart(ctx8, config);
		 window.myRadialGauge9 = new Chart(ctx9, config);
		};

		setInterval(function () {document.getElementById("randomizeData").click();}, 300);
		document.getElementById("randomizeData").addEventListener("click", function() {

		 config.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 window.myRadialGauge.update();
		 window.myRadialGauge2.update();
		 window.myRadialGauge3.update();
		 window.myRadialGauge4.update();
		 window.myRadialGauge5.update();
		 window.myRadialGauge6.update();
		 window.myRadialGauge7.update();
		 window.myRadialGauge8.update();
		 window.myRadialGauge9.update();
		});
