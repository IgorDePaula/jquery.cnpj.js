/**
 * Plugin para validação de cnpj em jquery. Olhar arquivo index.html para exemplo
 * Data: 11/08/2015
 * Base do código: http://www.geradorcnpj.com/javascript-validar-cnpj.htm. Acesso: 11/08/2015
 */
(function ($) {
    $.fn.cnpj = function (callback) {

        $(this).on('blur', function () {
            var val = $(this).val().replace(/[^\d]+/g, '');
            if (val.length === 14) {
                if (!isValid(val)) {
                    return callback();
                }
            }
        });

        var isValid = function (cnpj) {
            if (cnpj === '')
                return false;

            if (cnpj.length !== 14)
                return false;

            // Elimina CNPJs invalidos conhecidos
            if (cnpj === "00000000000000" ||
                    cnpj === "11111111111111" ||
                    cnpj === "22222222222222" ||
                    cnpj === "33333333333333" ||
                    cnpj === "44444444444444" ||
                    cnpj === "55555555555555" ||
                    cnpj === "66666666666666" ||
                    cnpj === "77777777777777" ||
                    cnpj === "88888888888888" ||
                    cnpj === "99999999999999")
                return false;

            // Valida DVs
            numeros = cnpj.substring(0, 12);
            digitos = cnpj.substring(12);
            soma = 0;
            pos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
            for (i = 0; i < 12; i++) {
                soma += parseInt(numeros[i]) * parseInt(pos[i]);
            }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (parseInt(resultado) !== parseInt(digitos[0])) {
                return false;
            } else {
                numeros = cnpj.substring(0, 13);
                soma = 0;
                pos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                for (i = 0; i < 13; i++) {
                    soma += parseInt(numeros[i]) * parseInt(pos[i]);
                }
                resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
                if (parseInt(resultado) !== parseInt(digitos[1]))
                    return false;

                return true;

            }


        };
    };
})(jQuery);
