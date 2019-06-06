			cpuUsageValue = 0;
			var randomScalingFactor = function() {
				socket.on('message', function(data){
					//console.log('CPU usaga value every second', data)
					cpuUsageValue = data
					data2 = cpuUsageValue
					var data3 = parseFloat(data2).toPrecision(3);
					var num2string = data3.toString();
					document.getElementById("log").innerHTML = num2string + '%';//cpuUsageValue;
					document.getElementById("log2").innerHTML = num2string + '%';
					document.getElementById("log3").innerHTML = num2string + '%';
					document.getElementById("log4").innerHTML = num2string + '%';
					document.getElementById("log5").innerHTML = num2string + '%';
					document.getElementById("log6").innerHTML = num2string + '%';
					document.getElementById("log7").innerHTML = num2string + '%';
					document.getElementById("log8").innerHTML = num2string + '%';
					document.getElementById("log9").innerHTML = num2string + '%';
				})
				return cpuUsageValue;
			};