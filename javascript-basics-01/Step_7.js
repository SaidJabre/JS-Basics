function MultOperations (){
    var sShoe= document.getElementById("shoe_size").value;
    var bYear= document.getElementById("year").value;
    var result = sShoe * 2;
    result = result + 5;
    result = result * 50;
    result = result - bYear;
    result = result + 1766;
    alert("Result: " + result);
}