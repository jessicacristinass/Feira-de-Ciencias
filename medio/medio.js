var num = [1,2,3,4,5,6,7,8,9,10]

var op = ["+", "-", "×", "÷"]
  
  
var pulou = 5;
var acertos = 0;
  
  
function Criar(){
  let a = num[Math.floor(Math.random() * num.length)];

  let b = num[Math.floor(Math.random() * num.length)];

  let c = op[Math.floor(Math.random() * op.length)];
  
    document.getElementById("DivA").innerHTML = a
    
    document.getElementById("DivC").innerHTML = c
    
    document.getElementById("DivB").innerHTML = b
    
    document.getElementById("igual"). innerHTML= "="
  
    const bot = document.createElement('input');
    bot.type = 'number';
    bot.id = 'resp';
    
    let d = document.getElementById("equacao");
    
    let pular = document.createElement('input');
    pular.type = 'button';
    pular.value = 'pular';
    pular.id = 'pular';
   
    d.appendChild(bot)
    document.body.appendChild(pular)
    
    document.getElementById('pular').setAttribute('onclick', "pular()");
    
    let e = document.getElementById("emb");
    e.id = 'conf';
    e.value = 'Confira resultado';
    document.getElementById('conf').setAttribute('onclick', "conferir()");
  
  var ac = document.getElementById("acertos")
  ac.innerHTML = "Pontuação: "+acertos
  
  var pu = document.getElementById("pulou")
  pu.innerHTML = "Pulos "+pulou
}


function conferir(){
  
  if(document.getElementById("resp").value != ""){
  
  fim()
  

  let a = document.getElementById("DivA").innerHTML
  let b = document.getElementById("DivB").innerHTML
  let c = document.getElementById("DivC").innerHTML
  
  if (c == "-") {
    res = parseInt(a) - parseInt(b) 
  }else if(c == "÷"){
    res = parseInt(parseInt(a)/parseInt(b))
  }else if(c == "+"){
    res = parseInt(a) + parseInt(b) 
  }else if(c == "×"){
    res = parseInt(a) * parseInt(b) 
  }else{
    res = "outra operação"
  }
  
  if (document.getElementById("resp").value == res){
    acertos = acertos + 1;
    
    document.getElementById("resp").value = ""
    
    var ac = document.getElementById("acertos")
  ac.innerHTML = "Pontuação: "+ acertos
    
    again()
      
  } else {
    alert("Infelizmente você errou, a resposta era: "+res)
    
    acertos = acertos - 1;
    
    document.getElementById("resp").value = ""
    
    var ac = document.getElementById("acertos")
    ac.innerHTML = "Pontuação: " + acertos
    
    again()
  }
  
  console.log(res)
  } else {
    alert("Escreva sua resposta")
  }
}


function pular(){
  console.log(pulou)
  
   pulou = pulou - 1;
  
  document.getElementById("DivA").innerHTML = ""
    
  document.getElementById("DivC").innerHTML = ""
    
  document.getElementById("DivB").innerHTML = ""
    
  document.getElementById("igual"). innerHTML= ""
  

  let a = num[Math.floor(Math.random() * num.length)];

  let b = num[Math.floor(Math.random() * num.length)];

  let c = op[Math.floor(Math.random() * op.length)];
  
  
  document.getElementById("DivA").innerHTML = a
    
  document.getElementById("DivC").innerHTML = c
    
  document.getElementById("DivB").innerHTML = b
    
  document.getElementById("igual"). innerHTML= "="
  
  var pu = document.getElementById("pulou")
  pu.innerHTML = "Pulos: " + pulou

  fim()
 
}


function again(){
  document.getElementById("DivA").innerHTML = ""
    
  document.getElementById("DivC").innerHTML = ""
    
  document.getElementById("DivB").innerHTML = ""
    
  document.getElementById("igual"). innerHTML= ""
  

  let a = num[Math.floor(Math.random() * num.length)];

  let b = num[Math.floor(Math.random() * num.length)];

  let c = op[Math.floor(Math.random() * op.length)];
  
  
  document.getElementById("DivA").innerHTML = a
    
  document.getElementById("DivC").innerHTML = c
    
  document.getElementById("DivB").innerHTML = b
    
  document.getElementById("igual"). innerHTML= "="

  fim()
}


function fim(){
  if (pulou == 0){
    document.getElementById("pular").disabled = true
  }
  
  if (acertos == 10){
    var congrats = document.getElementById("congrats")
    
 congrats.classList.toggle("hide")     
  }
}

document.getElementById("congrats").addEventListener("click", function() {
  window.location.href = "/Feira-de-Ciencias/"
});

var modal = document.getElementById("modal")

function Modal(){
 modal.classList.toggle("hide") 
}
