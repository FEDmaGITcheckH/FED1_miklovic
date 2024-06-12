function count() {
    let amount = document.getElementById('amount');
    let currency = document.getElementById('currency');
    let output = document.getElementById('amountConverted');
  
    let sum = parseFloat(amount.value);
    let curr = currency.options[currency.selectedIndex].text;
  
    let k = {
      USD: 1.23,
      GBP: 0.89,
      JPY: 132.15,
      CZK: 23.68,
      PLN: 4.5
    };
  
    let res = sum * k[curr];
  
    output.textContent = Math.abs(res).toFixed(2);
  
    let resultKurz = document.getElementById('result');
    resultKurz.textContent = "1 EUR = " + k[curr] + " " + curr;
}
  