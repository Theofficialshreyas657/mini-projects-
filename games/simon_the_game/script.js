level= document.getElementById("level-title")
var tiles=["green","red","yellow","blue"]
var sequence=[]
var i=0
var coti=true
var inputsequence=[]
tiles.forEach(element => {
    document.getElementById(element).addEventListener("click",function()
{
    coti=true
    inputsequence.push(element)
    console.log(inputsequence)
    highlight(element)
    iscorrect()
    console.log("input-sequence"+inputsequence)
    if (!coti)
    {
        level.innerHTML="Press any key to try again"    
        i=0
    }
    else if (inputsequence.length==sequence.length)
    {
        setTimeout(loop,400)
    }
});
});
document.addEventListener("keypress" , function(Event) 
{
    sequence=[]
    inputsequence=[]
    loop()
});

function loop ()
{
    i++
    inputsequence=[]
    time=1000
    level.innerHTML="level "+i
    var tile =tiles[Math.floor(Math.random()*4)]
    sequence.push(tile)
    highlight(tile,time)
    console.log("control sequence"+sequence)
}
async function highlight(ele)
{
    var light=document.getElementById(ele)
    light.style.backgroundColor="white"
    setTimeout(unhilight,200,ele)
}
function unhilight(ele)
{
    var light=document.getElementById(ele)
    light.style.backgroundColor=ele
    console.log(sequence)
}
function iscorrect()
{
    if (inputsequence.length > sequence.length)
    {
        coti=false;
    }
    for (let index = 0; index < inputsequence.length; index++) {
        if(inputsequence[index] == sequence[index])
           continue;
        else 
        {
            coti=false
        }
    }

}
