/*
var two = document.querySelector('div.main div.text div.ratings p#two')
two.className = 'clk'
var three = document.getElementById('three')
three.className = 'neigh'
*/

var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')


one.onmouseover = function(){
    one.className = 'whenclk'
    two.className = 'itsneigh'
}
one.onmouseleave = function(){
    one.className = ''
    two.className = ''
}
two.onmouseover = function(){
    two.className = 'whenclk'
    one.className = 'itsneigh'
}
two.onmouseleave = function(){
    two.className = ''
    one.className = ''
}
three.onmouseover = function(){
    three.className = 'whenclk'
    two.className = 'itsneigh'
}
three.onmouseleave = function(){
    three.className = ''
    two.className = ''
}
four.onmouseover = function(){
    four.className = 'whenclk'
    three.className = 'itsneigh'
}
four.onmouseleave = function(){
    four.className = ''
    three.className = ''
}
five.onmouseover = function(){
    five.className = 'whenclk'
    four.className = 'itsneigh'
}
five.onmouseleave = function(){
    five.className = ''
    four.className = ''
}
five.onmouseover = function(){
    five.className = 'whenclk'
    four.className = 'itsneigh'
}
five.onmouseleave = function(){
    five.className = ''
    four.className = ''
}

var form = document.getElementById('form')
var btn = document.getElementById('btn')

//onclick
one.onclick = function(){
    one.className = 'whenclk'
    one.onmouseleave = false

    form.setAttribute('action', 'rate1.html')
}


two.onclick = function(){
    two.className = 'whenclk'
    one.className = 'itsneigh'
    two.onmouseleave = false
    
    form.setAttribute('action', 'rate2.html')
}


three.onclick = function(){
    three.className = 'whenclk'
    two.className = 'itsneigh'
    three.onmouseleave = false
    
    form.setAttribute('action', 'rate3.html')
}


four.onclick = function(){
    four.className = 'whenclk'
    three.className = 'itsneigh'
    four.onmouseleave = false
    
    form.setAttribute('action', 'rate4.html')
}
five.onclick = function(){
    five.className = 'whenclk'
    four.className = 'itsneigh'
    five.onmouseleave = false;
    
    form.setAttribute('action', 'rate5.html')
}