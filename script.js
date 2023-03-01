
const maindiv=document.createElement('div')
maindiv.setAttribute("class","totaldiv")
const div1 = document.createElement('div');
const input=document.createElement('input')
input.className="display"
input.setAttribute("id","total-output")
input.placeholder="0"
input.setAttribute("onkeyup","keypressing(this);")
div1.append(input)
maindiv.append(div1)
const div2 = document.createElement('div')
div2.style="display:flex; justify-content:space-between"
const button1 = document.createElement('button')
button1.innerText="1"
button1.className="number"
button1.setAttribute("onclick","output('1')")
div2.append(button1)
const button2 = document.createElement('button')
button2.innerText="2"
button2.className="number"
button2.setAttribute("onclick","output('2')")
div2.append(button2)
const button3 = document.createElement('button')
button3.innerText="3"
button3.className="number"
button3.setAttribute("onclick","output('3')")
div2.append(button3)
const button4 = document.createElement('button')
button4.innerText="4"
button4.className="number"
button4.setAttribute("onclick","output('4')")
div2.append(button4)
maindiv.append(div2)

const div3 = document.createElement('div')
div3.style="display:flex; justify-content:space-between"
const button5 = document.createElement('button')
button5.innerText="5"
button5.className="number"
button5.setAttribute("onclick","output('5')")
div3.append(button5)
const button6 = document.createElement('button')
button6.innerText="6"
button6.className="number"
button6.setAttribute("onclick","output('6')")
div3.append(button6)
const button7 = document.createElement('button')
button7.innerText="7"
button7.className="number"
button7.setAttribute("onclick","output('7')")
div3.append(button7)
const button8 = document.createElement('button')
button8.innerText="8"
button8.className="number"
button8.setAttribute("onclick","output('8')")
div3.append(button8)
maindiv.append(div3)


const div4 = document.createElement('div')
div4.style="display:flex; justify-content:space-between"
const button9 = document.createElement('button')
button9.innerText="9"
button9.className="number"
button9.setAttribute("onclick","output('9')")
div4.append(button9)
const button0 = document.createElement('button')
button0.innerText="0"
button0.className="number"
button0.setAttribute("onclick","output('0')")
div4.append(button0)
const buttonmultiple = document.createElement('button')
buttonmultiple.innerText="*"
buttonmultiple.className="number"
buttonmultiple.setAttribute("onclick","output('*')")
div4.append(buttonmultiple)
const buttondivide = document.createElement('button')
buttondivide.innerText="/"
buttondivide.className="number"
buttondivide.setAttribute("onclick","output('/')")
div4.append(buttondivide)
maindiv.append(div4)


const div5 = document.createElement('div')
div5.style="display:flex; justify-content:space-between"
const buttonadd = document.createElement('button')
buttonadd.innerText="+"
buttonadd.className="number"
buttonadd.setAttribute("onclick","output('+')")
div5.append(buttonadd)
const buttonsub = document.createElement('button')
buttonsub.innerText="-"
buttonsub.className="number"
buttonsub.setAttribute("onclick","output('-')")
div5.append(buttonsub)
const buttonmod = document.createElement('button')
buttonmod.innerText="%"
buttonmod.className="number"
buttonmod.setAttribute("onclick","mod('%')")
div5.append(buttonmod)
const buttonAC = document.createElement('button')
buttonAC.innerText="AC"
buttonAC.className="numberAC"
buttonAC.setAttribute("onclick","AC()")
div5.append(buttonAC)
maindiv.append(div5)

const div6 = document.createElement('div')
div6.style="display:flex; justify-content:space-between"
const buttonclear = document.createElement('button')
buttonclear.innerText="◀"
buttonclear.className="cl"
buttonclear.setAttribute("onclick","cl()")
div6.append(buttonclear)
const buttonequal = document.createElement('button')
buttonequal.innerText="="
buttonequal.className="equal"
buttonequal.setAttribute("id","enter")
buttonequal.setAttribute("onclick","total()")
div6.append(buttonequal)
maindiv.append(div6)

document.body.appendChild(maindiv)


const calculator=document.getElementById('total-output')
function output(e){   
     calculator.value += e   
}

function total(){
    try{
        calculator.value = eval(calculator.value)
    }catch(err){
        alert("invalid")
    }
}
function AC(){
    calculator.value = "";
}
function cl(){
    calculator.value = calculator.value.slice(0,-1)
}
function mod(){
    calculator.value = (calculator.value)/100;
}
calculator.addEventListener("keypress",function(element){
if(element.key === "Enter"){
    element.preventDefault();
    document.getElementById('enter').click()
}
});
calculator.addEventListener("keypress",function(element){
if(element.key==="1","2","3","4","5","6","7","8","9","0","=",".","-","/"){
    calculator.value += element 
}else{
    calculator.value = alert("invalid")
}
})