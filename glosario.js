function glosario() {
        this.Termino = "";
        this.Definicion = "";

        this.getTermino = function() {
            return this.Termino;
        };

        this.getDefinicion = function() {
            return this.Definicion;
        };

        this.setTermino = function(termi) {
            this.Termino = termi;
        };

        this.setDefinicion = function(defi) {
            this.Definicion = defi;
        };

    }

function salida() {

    var obj = new glosario();

    var termi = document.getElementById("TERMINO").value;
    var defi = document.getElementById("DEFINICION").value;

    obj.setTermino(termi);
    obj.setDefinicion(defi);

    var n1 = obj.getTermino();
    var n2 = obj.getDefinicion();

    localStorage.setItem('termino', n1);
    localStorage.setItem('definicion', n2);
}




