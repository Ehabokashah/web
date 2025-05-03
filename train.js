const button = document.getElementById("button")
const listCont = document.getElementById("list")
const input = document.getElementById("input")
const btn2 = document.getElementById("btn2")
const btnDiv = document.getElementById("btnCont")
const popup = document.getElementsByClassName("pop")[0];

let isAnimated = false;

button.addEventListener("click", myFunction)
function myFunction() {
  let output = input.value.trim();
  if (output === "") {
    popup.classList.remove("animation2");
    popup.classList.remove("animation")
    popup.classList.add("animation2");
    setTimeout(() => {
      popup.classList.remove("animation2");
      popup.classList.add("animation")
    }, 2500);
  } else {
    input.value = ""
    // create li
    let create = document.createElement("li")
    create.classList.add("animation2")
    
    listCont.appendChild(create)
    listCont.insertBefore(create, listCont.firstChild)
    // create p to put the text in it
    let para = document.createElement("p")
    create.appendChild(para)
    para.innerText = output

    // create button (close)
    let close = document.createElement("button")
    create.appendChild(close)
    close.innerText = "X"
    close.classList.add("btn")
    close.addEventListener("click", function () {
      create.classList.add("animation")
      setTimeout(function () {
        listCont.removeChild(create)
        if (listCont.children.length == 0) {
          btnDiv.style.display = "none"
        }
      }, 650)
    })

    // make it checked
    create.addEventListener("click", function () {
      create.classList.toggle("checked")
    })
    
    //btn2
    btnDiv.style.display = "flex"
  }
}
btn2.addEventListener("click", function () {
  for (const i of listCont.children) {
    i.classList.add("animation")
    setTimeout(() => {
      listCont.innerHTML = ""
      btnDiv.style.display = "none"
    }, 650)
  }
})
//activate "Enter Button"
window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    let output = input.value
    if (output === "") {
      alert("there is something wrong please type any thing")
    } else {
      myFunction()
    }
  }
})
