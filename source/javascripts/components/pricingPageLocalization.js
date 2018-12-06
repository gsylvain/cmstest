let curSym, curPrefix, curMult, values, slider, foreignPrefix, foreignSym, foreignMult;
$( document ).ready(function() {

  function handleResponse(data){
      curPrefix = foreignPrefix = data.geoplugin_currencySymbol_UTF8 ? data.geoplugin_currencySymbol_UTF8 : "$";
      curSym = foreignSym = data.geoplugin_currencyCode ? data.geoplugin_currencyCode : "USD" ;
      curMult = foreignMult = data.geoplugin_currencyConverter ? data.geoplugin_currencyConverter : 1;

      if (curSym != 'USD'){
          $('[name=currencySelector]').append('<option selected="selected">'+curSym+'</option>');

          $('[name=currencySelector] option').filter(function() { 
              return ($(this).text() == curSym); 
          }).prop('selected', true);
      }


      calculate(curSym,curPrefix,curMult);
  }

     $.ajax({
         dataType: "json",
         url:"https://ssl.geoplugin.net/json.gp?k=b9e14cb94ee69f0a",
         success: handleResponse,
         error: function(){ handleResponse({})},
         xhrFields: { anonymous: true }
      });

});

    $('[name=currencySelector]').on('change', function() {
        if (this.value == 'USD')
        {
          curPrefix = "$";
          curSym = "USD";
          curMult = 1;          
          calculate(curSym,curPrefix,curMult);
        } else {
          curPrefix = foreignPrefix
          curSym = foreignSym
          curMult = foreignMult
          calculate(curSym,curPrefix,curMult);
        }
        
   });

    function getPrefix(number) {
      if (String(number).match(/\d/g).length <= 6)
      {
       return unit = "k";
      }
      if (String(number).match(/\d/g).length > 6)
      {
        return unit = "mm";
      }
      if (String(number).match(/\d/g).length > 9)
      {
        return unit = "B";
      }
    }

    function getDiv(number) {
      if (String(number).match(/\d/g).length <= 6)
      {
       return [1000, 0];
      }
      if (String(number).match(/\d/g).length > 6)
      {
        return [1000000, 1];
      }
      if (String(number).match(/\d/g).length > 9)
      {
        return [1000000000,1];
      }
    }
function calculate(curSym,curPrefix,curMult){
  var zero = "Limited Lite plan";
    var oneLow = 0;
    var oneHigh = Math.round(20000*curMult);
    var one = curPrefix + oneLow + getPrefix(oneLow) + " - " + curPrefix + (oneHigh/getDiv(oneHigh)[0]).toFixed(getDiv(oneHigh)[1]) + getPrefix(oneHigh) + " " + curSym + " / month";

    var twoLow = Math.round(20000*curMult);
    var twoHigh = Math.round(80000*curMult);
    var two = curPrefix + (twoLow/getDiv(twoLow)[0]).toFixed(getDiv(twoLow)[1]) + getPrefix(twoLow) + " - " + curPrefix + (twoHigh/getDiv(twoHigh)[0]).toFixed(getDiv(twoHigh)[1]) + getPrefix(twoHigh) + " " + curSym + " / month";

    var threeLow = Math.round(80000*curMult);
    var threeHigh = Math.round(150000*curMult);
     var three = curPrefix + (threeLow/getDiv(threeLow)[0]).toFixed(getDiv(threeLow)[1]) + getPrefix(threeLow) + " - " + curPrefix + (threeHigh/getDiv(threeHigh)[0]).toFixed(getDiv(threeHigh)[1]) + getPrefix(threeHigh) + " " + curSym + " / month";

    var fourLow = Math.round(150000*curMult);
    var fourHigh = Math.round(300000*curMult);
    var four = curPrefix + (fourLow/getDiv(fourLow)[0]).toFixed(getDiv(fourLow)[1]) + getPrefix(fourLow) + " - " + curPrefix + (fourHigh/getDiv(fourHigh)[0]).toFixed(getDiv(fourHigh)[1]) + getPrefix(fourHigh) + " " + curSym + " / month";

    var fiveLow = Math.round(300000*curMult);
    var fiveHigh = Math.round(500000*curMult);
     var five = curPrefix + (fiveLow/getDiv(fiveLow)[0]).toFixed(getDiv(fiveLow)[1]) + getPrefix(fiveLow) + " - " + curPrefix + (fiveHigh/getDiv(fiveHigh)[0]).toFixed(getDiv(fiveHigh)[1]) + getPrefix(fiveHigh) + " " + curSym + " / month";

    var sixLow = Math.round(500000*curMult);
    var sixHigh = Math.round(1000000*curMult);
    var six = curPrefix + (sixLow/getDiv(sixLow)[0]).toFixed(getDiv(sixLow)[1]) + getPrefix(sixLow) + " - " + curPrefix + (sixHigh/getDiv(sixHigh)[0]).toFixed(getDiv(sixHigh)[1]) + getPrefix(sixHigh) + " " + curSym + " / month";

    var sevenLow = Math.round(1000000*curMult);
    var sevenHigh = Math.round(1500000*curMult);
    var seven = curPrefix + (sevenLow/getDiv(sevenLow)[0]).toFixed(getDiv(sevenLow)[1]) + getPrefix(sevenLow) + " - " + curPrefix + (sevenHigh/getDiv(sevenHigh)[0]).toFixed(getDiv(sevenHigh)[1]) + getPrefix(sevenHigh)+ " " + curSym + " / month";

    var eightLow = Math.round(1500000*curMult);
    var eightHigh = Math.round(2000000*curMult);
   var eight = curPrefix + (eightLow/getDiv(eightLow)[0]).toFixed(getDiv(eightLow)[1]) + getPrefix(eightLow) + " - " + curPrefix + (eightHigh/getDiv(eightHigh)[0]).toFixed(getDiv(eightHigh)[1]) + getPrefix(eightHigh) + " " + curSym + " / month";

    var nineHigh = Math.round(2000000*curMult);
       var nine = curPrefix + (nineHigh/getDiv(nineHigh)[0]).toFixed(getDiv(nineHigh)[1]) + getPrefix(nineHigh) + " " + curSym + " +";

   

// 0k -15k / month", "$15k - $80k / month",
//         "$80k - $150k / month", "$150k - $300k / month", "$300k - $500k / month", "$500k - $1mm / month",
//         "$1mm - $1.5mm / month","$1.5mm - $2mm / month", "$2mm + / month

    values =  [
       zero, one, two,three,four,five,six,seven,eight,nine
    ]

if(slider){slider.destroy()}
// pricing range slider
$("#priceSlider").ionRangeSlider({
    grid: false,
    // min: 0,
    // max: 10000,
    from: 1,
    values,
    hide_min_max: true,

  });
var $range = $("#priceSlider");
slider = $range.data("ionRangeSlider");

//calculate total monthly cost
$range.unbind("change");
$range.on("change", function () {
    var $this = $(this),
    value = $this.prop("value");
    var index = values.indexOf(value);

    var numvalue;
    if (index == 0)
    {
      numvalue = 0;
       $("#lite").html("<hr><h3>Lite Plan</h3><div class='statcard statcard-warning p-a-md m-b'><h5 class='statcard-number'>This plan is fixed priced and has <a href='#freeModal' data-toggle='modal' data-target='#freeModal'> limited functionality</a>. You can downgrade to this plan during your free trial of the Pro version.</h5></div>");
    }
    
    if (index == 1)
    {
      numvalue = 30;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
    if (index == 2)
    {
      numvalue = 70;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
    if (index == 3)
    {
      numvalue = 120;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
    if (index == 4)
    {
      numvalue = 220;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
    if (index == 5)
    {
      numvalue = 320;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
    if (index == 6)
    {
      numvalue = 370;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
     if (index == 7)
    {
      numvalue = 420;
      $("#lite").html("<h3>Pro Plan</h3>");
    }
    if (index == 8)
    {
      numvalue = 470;
      $("#lite").html("<h3>Pro Plan</h3>");
    }

    var total = "$"+ (29+numvalue) + " USD / month";

    if (index == 9)
    {
      total = "<h3><b>Email us - Hello@ordermetrics.io</b></h3>";
      $("#lite").html("");
    }

    
    $("#totalCostDiv").html(total);



    });
} 
// end calculate function

// Pricing matrix:
// $29 +
// "$0 - $15,000 / month" - $30
// "$15,000 - $50,000 / month" - $120
// "$50,000 - $100,000 / month" - $220
// "$100,000 - $200,000 / month" - $320
// "$200,000 - $500,000 / month" - $470
// "$500,000 - $1mm / month" - $570
// "$1mm - $1.5mm / month" - $670 
// "$1.5mm  - $2mm / month" - $970
// "$2mm + / month" - call us

//change currency selector