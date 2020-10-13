
export const commaInRupee = (x) =>{
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

export function addClassToNearestPlace(inputText) {
    var words = [];
    function isNumber(n) {
      return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }
    var json = inputText.split(' ');
    json.forEach(function(e) {
      words.push(
        e
          .replace(/\'/g, '')
          .split(/(\d+)/)
          .filter(Boolean)
      );
    });
  
    let markupString = '';
  
    words.forEach(word => {
      word.forEach(e => {
        if (isNumber(e) || e === 'kms' || e === 'Kms') {
          markupString += `<span class="font-greyish-brown">${e}</span>`;
        } else {
          markupString += ' ' + e + ' ';
        }
      });
    });
  
    return markupString;
  }
  
  
  export function addClassToOfferText(inputText) {
    var words = [];
    function isNumber(n) {
      return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }
    var json = inputText.split(' ');
    json.forEach(function(item) {
      words.push(
        item
          .replace(/\'/g, '')
          .split(/(\d+)/)
          .filter(Boolean)
      );
    });
  
    let markupString = '';
  
    words.forEach(word => {
      word.forEach(e => {
        if (isNumber(e)||e===',') {
          markupString += `<span class="font-greenish">${e}</span>`;
        }else if(e==='LOGIN'){
          markupString += ' '+`<span class="font-water-blue">${e}</span>`+' ';
        } else {
          markupString += ' ' + e + ' ';
        }
      });
    });
  
    return markupString;
  }