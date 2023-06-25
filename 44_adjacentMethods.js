// we have some of the important types of methods
// 1. insertAdjacentHTML()
// 2. insertAdjacentText()
// 3. insertAdjacentElement()

let first = document.getElementById("first");
first.insertAdjacentHTML('beforebegin',"<div>Hey, I am Deependra Parmar BEFOREBEGIN</div>"); // it will insert it before the begin
first.insertAdjacentHTML('beforeend',"<div>Hey, I am Deependra Parmar BEFOREEND</div>"); // it will insert it before the end
first.insertAdjacentHTML('afterbegin',"<div>Hey, I am Deependra Parmar AFTERBEGIN</div>"); // it will insert after the begin of the element 
first.insertAdjacentHTML('afterend',"<div>Hey, I am Deependra Parmar AFTEREND</div>"); // it will insert after the end of the element.



// now , we also have the method or functioñ for the removal of the node or element 
first.remove(); // it will remove the whole element or node