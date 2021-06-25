const fs = require('fs');
const path = require('path');
// Se lee el archivo quotes.json
const data = fs.readFileSync(path.resolve(__dirname, 'quotes.json'));
const quotes = JSON.parse(data);

//Mediante filter, se depura la información por 'brand' y por 'company' que será utilizada
const filterQuotes = quotes.filter(function (el) {
    return  (el.brand == 'Ford' ||
             el.brand == 'Chevrolet' ||
             el.brand == 'Dodge' ||
             el.brand == 'GMC' ||
             el.brand == 'Honda'
            ) &&
            (el.company >= 'Seguros Atlas' ||
             el.company >= 'Qualitas' ||
             el.company >= 'MAPFRE'
            )
  });

module.exports = filterQuotes