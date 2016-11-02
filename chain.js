var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

document.getElementById("output").innerHTML = integers.sort(function(a,b){return b-a}).filter(function(c){return c<20}).map(function(d){return d*1.5-1}).reduce(function(previous_value, current_value){return previous_value + current_value});
