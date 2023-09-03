var num = [1,2,3,4,5,6,7,8,9,10]

var op = ["+", "-", "×", "÷"]
  
  
  
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
  
}


function conferir(){
  if(document.getElementById("resp").value != ""){

  let a = document.getElementById("DivA").innerHTML
  let b = document.getElementById("DivB").innerHTML
  let c = document.getElementById("DivC").innerHTML
  
  
  console.log(a + c + b)
  
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

    var congrats = document.getElementById("congrats")
    
 congrats.classList.toggle("hide")     
  } else {
    alert("Infelizmente você errou, a resposta era: "+res+" Tente novamente")
    document.getElementById("resp").value = ""
    pular()
  }
  
  console.log(res)
  } else {
    alert("Escreva sua resposta")
  }
}


function pular(){
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

  
}

var modal = document.getElementById("modal")

function Modal(){
 modal.classList.toggle("hide") 
}


document.getElementById("congrats").addEventListener("click", function() {
  window.location.href = "index.html"
});
