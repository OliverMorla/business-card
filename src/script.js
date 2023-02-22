var wrapper = document.querySelector("#pop-up")
var footer = wrapper.querySelector(".footer-container")

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);

    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;

}

footer.addEventListener("mousedown", () =>{
    footer.addEventListener("mousemove", onDrag);
})

document.addEventListener("mouseup", () => {
    footer.removeEventListener("mousemove", onDrag);
})