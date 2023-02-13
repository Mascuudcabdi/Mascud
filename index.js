

/* nav toggle*/
function nav(){
    const nav=document.querySelector(".js-header-toggler")
    const toggle=document.querySelector(".js-header-nav")
    nav.addEventListener("click",taggleNav)
    
    function taggleNav(){
        nav.classList.toggle("active")
        toggle.classList.toggle("open")
        if(toggle.classList.contains("open")){
            document.body.style.overflow="hidden"
        }
        else{
            document.body.style.removeProperty("overflow")
        }
    }
    toggle.querySelectorAll("a").forEach((a) =>{
        a.addEventListener("click",taggleNav)
    })

}
nav()


/* vedio popup */
function vedio(){
    const btns=['.js-vedio-popup-close','.js-about-play-btn']
    const popup=document.querySelector(".js-vedio-popup")
    const iframe=popup.querySelector(".js-vedio-popup-iframe")
    const src=iframe.src
    btns.forEach((btn)=>{
        document.querySelector(btn).addEventListener("click",()=>{
            if(popup.classList.contains("open")){
                popup.classList.remove("open")
                iframe.src="";
            }
            else{
                popup.classList.add("open")
                if(iframe.getAttribute("src") == ""){
                    iframe.src= src
                }
            }
        })
    })
}
vedio()



/*service accordion */
function accordion(ele){
    const accordion=document.querySelector(ele);
    accordion.addEventListener('click', ({target}) =>{
        if(!target.closest(".js-accordion-btn")){
            return;
        }
        const btn=target.closest(".js-accordion-btn");
        const item= btn.parentElement.parentElement;
        const body=btn.parentElement.nextElementSibling;

        if(target.closest(".active")){
            slideup()
            return
        }

        if(accordion.querySelector(".active")){
            slideup()
        }
        item.classList.add("active");
        body.style.height=body.scrollHeight+"px";

        function slideup(){
            accordion.querySelector(".active").lastElementChild.style.height="0";
            accordion.querySelector(".active").classList.remove("active");
        }
    });

}
accordion(".js-accordion");

