


function insert(num) {
    
    
    var a = document.form.textview;

    a.value += num;
// <<<<<<< HEAD
   
// =======
    
//     // histor += num;
// >>>>>>> added history function to the calculator
    
}
function opt(amd) {
    
    
    var view = document.form.textview;
    if (view.value != "") {
        view.value += amd;
// <<<<<<< HEAD
        
// =======
//         // histor += amd;
// >>>>>>> added history function to the calculator
        
    }
}
function zero() {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += '0';
    }
}
var histor = [];
function equal() {
    
// <<<<<<< HEAD
   
// =======
//     // var button = document.getElementsByClassName('none');
// >>>>>>> added history function to the calculator
    var a = document.form.textview;
    var exp = a.value;
    

    if (exp) {
// <<<<<<< HEAD
//         try {a.value = math.evaluate(exp);}
//        catch (e) {
// =======
// <<<<<<< Updated upstream
//         try {a.value = math.evaluate(exp);}
//         catch (e) {
// =======
        try {a.value = a.value +'=' + math.evaluate(exp);
        histor.push(a.value)
        hist();
        }
       catch (e) {
// >>>>>>> Stashed changes
// >>>>>>> added history function to the calculator
            alert ("Syntax Error!");
            document.form.textview.value = 'Syntax Error!';
            none();
        }
    }
    if (a.value == 0) {
        a.value = "";
    }
    if(a.value == 'Infinity'){
        document.form.textview.value = "Can't divide by Zero!";
       
       alert('Can\'t divide by Zero!')
       none();
    }
}
function none() {
    alert('Press the Clear button!');
} 
function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
// <<<<<<< HEAD
function sinFunc(){
    var a = document.form.textview.value;
    
    document.form.textview.value = Math.sin(a);
}
function sqrFunc(){
    var a = document.form.textview.value;
    
    document.form.textview.value = Math.sqrt(a);
}

// =======
// <<<<<<< Updated upstream
// =======
// function sinFunc(){
//     var a = document.form.textview.value;
    
//     document.form.textview.value = Math.sin(a);
// }
// function sqrFunc(){
//     var a = document.form.textview.value;
    
//     document.form.textview.value = Math.sqrt(a);
// }
function hist()
{
    var i;
    for (i = 0; i < histor.length; i++) {
        
            // if (histor[i] == histor[(histor.length)-i] ){
            //     continue;
                
            // }
        
        document.getElementById('result').innerHTML += histor[i] + '<br>';
        document.getElementById('result').innerHTML += '   ';
        histor = [];

        
      
       
    }
    
}
// >>>>>>> Stashed changes
// >>>>>>> added history function to the calculator
