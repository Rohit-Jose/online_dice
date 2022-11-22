function clic(){
            a=Math.floor(Math.random()*6+1);
            face=document.getElementsByClassName("b");
            for(i=0;i<7;i++){
                face[i].style.display="none";
            }
            face[a-1].style.display="block";
}