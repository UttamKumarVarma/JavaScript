        let result = 0;
        let value1;
        let value2;

        
        document.getElementById("Add").onclick = add;
        document.getElementById("Sub").onclick = sub;
        document.getElementById("Mul").onclick = mul;
        document.getElementById("Div").onclick = div;

        function updateValues() {
            value1 = parseFloat(document.getElementById("val1").value);
            value2 = parseFloat(document.getElementById("val2").value);
        }

        function add() {
            updateValues();
            result = value1 + value2;
            document.getElementById("Result").innerHTML = result;
        }

        function sub() {
            updateValues();
            result = value1 - value2;
            document.getElementById("Result").innerHTML = result;
        }

        function mul() {
            updateValues();
            result = value1 * value2;
            document.getElementById("Result").innerHTML = result;
        }

        function div() {
            updateValues();
            result = value1/value2;
            console.log(result);
            document.getElementById("Result").innerHTML = result;
        }

