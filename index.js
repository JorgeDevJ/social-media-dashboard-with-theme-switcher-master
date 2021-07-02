let toggle = document.querySelector(".toggle_theme");
let slide = document.querySelector(".slide");

toggle.addEventListener("click", () =>{
    if(toggle.checked === true){
        document.querySelector(".toggle").style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        slide.style.setProperty("--left_t", "0%");
        slide.style.setProperty("--right_t", "50%");
        toggle.style.setProperty("--left_t", "0%");
        toggle.style.setProperty("--right_t", "50%");
        document.querySelector(".content_theme").classList.remove("light_t");
        document.querySelector(".content_theme").classList.add("dark_t");
        document.querySelectorAll(".tarjet__down, .tarjet").forEach(e =>{
            e.classList.add("filter")
        })

    }else{
        document.querySelector(".toggle").style.background = "";
        slide.style.setProperty("--left_t", "50%");
        slide.style.setProperty("--right_t", "0%");
        toggle.style.setProperty("--left_t", "50%");
        toggle.style.setProperty("--right_t", "0%");
        document.querySelector(".content_theme").classList.add("light_t");
        document.querySelector(".content_theme").classList.remove("dark_t");
        document.querySelectorAll(".tarjet__down, .tarjet").forEach(e =>{
            e.classList.remove("filter")
        })
        
    };
});