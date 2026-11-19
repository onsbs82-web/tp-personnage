
/* made 2 characters for the fun of it*/




function start(){  
    document.getElementById("btn").classList.add('hide')
    document.getElementById("sand").classList.remove('hide')
    document.getElementById("colum").classList.remove('hide')

    Yaxis_s = 0;
    Xaxis_s=0;
    Yaxis_c = 0;
    Xaxis_c=0;
    speed=5
    
    document.addEventListener("keydown", (meow) =>{
        s=document.getElementById("sand");
        c=document.getElementById("colum");
        switch (meow.key) {
            case "z":
                if(Yaxis_s-speed>=0)
                    Yaxis_s-=5
                

                break;
            case "s":
                if(Yaxis_s + speed <= window.innerHeight - s.offsetHeight)
                    Yaxis_s+=5
                
            break;
            case "q":
                if(Xaxis_s-speed>=0)
                    Xaxis_s-=5

                break;
            case "d":
                if(Xaxis_s + speed <= window.innerWidth - s.offsetWidth)
                    Xaxis_s+=5
            break;
            case "ArrowUp":
                if(Yaxis_c-speed>=0)
                    Yaxis_c-=5

                break;
            case "ArrowDown":
                if(Yaxis_c + speed <= window.innerHeight - c.offsetHeight)
                    Yaxis_c+=5
            break;
            case "ArrowLeft":
                if(Xaxis_c-speed>=0)
                    Xaxis_c-=5

                break;
            case "ArrowRight":
                if(Xaxis_c + speed <= window.innerWidth - c.offsetWidth)
                    Xaxis_c+=5
            break;
            default:
                break;
        }
    s.style.top=Yaxis_s+"px";
    s.style.left=Xaxis_s+"px";
    c.style.top=Yaxis_c+"px";
    c.style.left=Xaxis_c+"px";
    }
    )}