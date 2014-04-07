this.addEventListener('message', function(e) {
    var data = e.data;
    var numero = parseInt(data);
    var nums = [];

    var esPrimo = function(numero){
        for (var i = 2; i < numero; i++) {
            if(numero%i==0)
                return false;
        }
        return true;
    };

    for (var i = 2; i<= numero; i++) {
        if(esPrimo(i)){
            nums.push(i);
        }
    }

    this.postMessage(JSON.stringify(nums));
}, false);

