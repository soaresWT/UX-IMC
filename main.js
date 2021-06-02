function imc(){
    var mop = document.getElementById("para")
    var pes = document.getElementById("peso")
    var alt = document.getElementById("altura")
    var a = Number(pes.value)
    var b =Number(alt.value)
    var altot=b*b
    var total=a/altot
    total = total.toFixed(2)
    var k = 20*altot
    k = k.toFixed(2)
   

   
    
    if(total<18.5){
        mop.innerHTML=`<b>Magreza</b>, quando o resultado é menor que 18,5 kg/m2, seu resultado foi ${total}<br><b>Atenção</b> seu peso ideial é:${k}Kg`
        
        }
    if(total>18.5 && total<24.9){
        mop.innerHTML=` <b>Normal</b>, quando o resultado está entre 18,5 e 24,9 kg/m2, seu resultado foi ${total}<br><b>Parabéns, você está no seu peso ideal</b>`
    }
    if(total>24.9 && total<30){
        mop.innerHTML=`<b>Sobrepeso</b>, quando o resultado está entre 24,9 e 30 kg/m2, seu resultado foi ${total}<br><b>atenção</b> seu peso ideial é:${k}Kg`
    }
    if(total>30){
        mop.innerHTML=`<b>Obesidade</b>, quando o resultado é maior que 30 kg/m2, seu resultado foi ${total}<br><b>Cuidado</b> seu peso ideial é:${k}Kg`
    }




}
function limpa(){
    var pa = document.getElementById("para")
    var pes = document.getElementById("peso")
    var alt = document.getElementById("altura")
    pa.innerHTML=`<p id="para"> IMC significa Índice de Massa Corporal e trata-se de uma medida do peso de cada pessoa,
           sendo uma relação entre a massa da pessoa e a sua altura ao quadrado. A partir desse cálculo 
           é possível avaliar se a pessoa está com um peso ideal ou se está abaixo ou acima do peso.</p>`
    pes.value=""
    alt.value=""

}