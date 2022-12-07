function show() {
    document.getElementById("adding").style.opacity = "1";
}
function pink() {
    const t = document.getElementById("addtext");
    let div = document.createElement('div');
    div.setAttribute('onclick', 'click1(this)');
    // div.setAttribute('onclick','del()');
    div.setAttribute('class', 'pink');
    let hr = document.createElement("hr");
    let p = document.createElement("p");
    p.innerHTML = "#dk5d";
    p.setAttribute('class', 'code');
    let p1 = document.createElement("p");
    p1.innerHTML = t.value;
    div.appendChild(hr);
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById("textarea").appendChild(div);
    document.getElementById("adding").style.opacity = "0";
}
function blue() {
    const t = document.getElementById("addtext");
    let div = document.createElement('div');
    div.setAttribute('class', 'blue');
    div.setAttribute('onclick', 'click1(this)');
    // div.setAttribute('onclick','del()');
    let hr = document.createElement("hr");
    let p = document.createElement("p");
    p.innerHTML = "#dk5d";
    p.setAttribute('class', 'code');
    let p1 = document.createElement("p");
    p1.innerHTML = t.value;
    div.appendChild(hr);
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById("textarea").appendChild(div);
    document.getElementById("adding").style.opacity = "0";
}

function green() {
    const t = document.getElementById("addtext");
    let div = document.createElement('div');
    div.setAttribute('onclick', 'click1(this)');
    // div.setAttribute('onclick','del()');
    div.setAttribute('class', 'green');
    let hr = document.createElement("hr");
    let p = document.createElement("p");
    p.innerHTML = "#dk5d";
    p.setAttribute('class', 'code');
    let p1 = document.createElement("p");
    p1.innerHTML = t.value;
    div.appendChild(hr);
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById("textarea").appendChild(div);
    document.getElementById("adding").style.opacity = "0";
}

function black() {
    const t = document.getElementById("addtext");
    let div = document.createElement('div');
    div.setAttribute('onclick', 'click1(this)');
    div.setAttribute('class', 'black');
    let hr = document.createElement("hr");
    let p = document.createElement("p");
    p.innerHTML = "#dk5d";
    p.setAttribute('class', 'code');
    let p1 = document.createElement("p");
    p1.innerHTML = t.value;
    div.appendChild(hr);
    div.appendChild(p);
    div.appendChild(p1);
    document.getElementById("textarea").appendChild(div);
    document.getElementById("adding").style.opacity = "0";
}
// const element = document.getElementbyId("btn");
// element.addEventListener("click", ()=>{
//    del();
// })
let count = 0;
function del() {
    if (count === 1) {
        document.getElementById("btn").style.background = "none";
        count = 0;
    }
    else{
    count = 1;
    document.getElementById("btn").style.background = "black";}
}
// let item=document.getElementById('textarea');
// console.log(item);
function click1(elem) {
    // c=e.target;
    if (count === 1) {
        elem.parentNode.removeChild(elem);
    }
}