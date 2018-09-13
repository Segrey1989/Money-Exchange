// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
if(currency <= 0)
return {};

if(currency > 10000){
  var obj = {};
  obj.error = "You are rich, my friend! We don't have so much coins for exchange";
  return obj;
}

var myMap = {};
currency = count_money(50, myMap, currency);
currency =  count_money(25, myMap, currency);
currency = count_money(10, myMap, currency);
currency = count_money(5, myMap, currency);
currency = count_money(1, myMap,currency);
return myMap;
}

function count_money(num, obj, currency){
    var count = 0;
    while(currency >= num){
      currency -= num;
      count += 1;
  }
  if(count > 0)
  switch(num){
      case 50:
       obj.H = count; break;
      case 25:
       obj.Q = count; break;
      case 10:
      obj.D = count; break;
      case 5:
      obj.N = count; break;
      case 1:
       obj.P = count; break;
  }
  return currency;
}
