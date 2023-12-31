// function outputsize() {
//  let side_width = side_menu.offsetWidth;
//  side_width=side_width+'px';
//  console.log(side_width);
//  document.getElementById("v-pills-tabContent").style.marginLeft  = side_width;

//  }
//  outputsize()
 
//  new ResizeObserver(outputsize).observe(side_menu);

   
//  Side Bar Toggle
document.getElementById("logo_click").addEventListener("click", responsive_bar);
function responsive_bar() {  
  document.getElementById('side_menu').classList.toggle('active');
  document.getElementById('v-pills-tabContent').classList.toggle('active'); 
  document.getElementById('page-topbar').classList.toggle('active');
  document.getElementById('lg-module').classList.toggle('active');
}

// Date Picker
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.getElementById('curnt-date').innerHTML=today;
document.getElementById('curnt-date-1').innerHTML=today;

// Calender
$(document).ready(function(){
  $('#dashboard-calendar').datepicker({  
    inline:true,  
    firstDay: 1,  
    showOtherMonths:true,  
    dayNamesMin:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']  
  }); 
  
  $('#attendance-calendar').datepicker({  
    inline:true,  
    firstDay: 1,  
    showOtherMonths:true,  
    dayNamesMin:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']  
  });
});

// Date Picker for Input Fields
$(function() {
  $( "#start_date_picker" ).datepicker({
      defaultDate:"06/12/2023"
  });
});

$(function() {
  $( "#end_date_picker" ).datepicker({
      defaultDate:"06/12/2023"
  });
});


google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');
      data.addColumn('number', 'Cats');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }