# jquery.cnpj.js

CNPJ Validator on jQuery

## Usage:

```javascript
 $(document).ready(function(){
   $("#cnpj").cnpj(function(){
     alert('Invalid CNPJ'); // CallBack for invalid cases
   },function(){
     // callback for valid cases (remove error css classes, by example)
   });
 });
 ```
