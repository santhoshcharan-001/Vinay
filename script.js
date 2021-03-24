var x="Hii, I'm Vinay. This is my page, you can know about me here. You can contact me for any queries. Everything about my favourites have been listed here. Take a look of my website.";
er=document.getElementById("item");
i=0;
t=setInterval(function(){
    er.innerHTML=er.innerHTML+x[i];
    i=i+1;
    if(i==x.length-1){
        clearInterval(t);
    }
},50);
ily=Number(0);
u=document.getElementById("myAudio");
function pay()
{
    ily=ily+1;
    if(ily%2==1)
    {
        u.play();
    }
    else{
        ily=0;
        u.pause();
    }
}