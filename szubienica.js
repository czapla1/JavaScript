var pass0="BEZ PRACY NIE MA KOŁACZY";
var pass1="CZYNY MÓWIĄ WIĘCEJ NIŻ SŁOWA";
var pass2="ŻADNA PRACA NIE CHAŃBI";
var pass3="CUDZA PRACA NIE WZBOGACA";
var pass4="JAKA PRACA TAKA PŁACA";
var pass5="CO DWIE GŁOWY TO NIE JEDNA";
var pass6="DLA CHCĄCEGO NIC TRUDNEGO";
var pass7="KAŻDY JEST KOWALEM WŁASNEGO LOSU";
var pass8="KTO PYTA NIE BŁĄDZI";
var pass9="NIE PŁACZ NAD ROZLANYM MLEKIEM";
var pass10="Z PUSTEGO I SALOMON NIE NALEJE";


var passArray= new Array(11);
passArray[0]=pass0;
passArray[1]=pass1;
passArray[2]=pass2;
passArray[3]=pass3;
passArray[4]=pass4;
passArray[5]=pass5;
passArray[6]=pass6;
passArray[7]=pass7;
passArray[8]=pass8;
passArray[9]=pass9;
passArray[10]=pass10;

var j=Math.floor(Math.random()*(passArray.length-1));
var passwort=passArray[j];

var passwort1="";
var length=passwort.length;
var overshoots=0;
var yes=new Audio("yes.wav");
var no=new Audio("no.wav");
var success= new Audio("applause.wav");
var failure= new Audio("damn-it.wav");

for(i=0;i<passwort.length;i++){
if(passwort.charAt(i)==" "){
passwort1=passwort1+" ";
}else{
    passwort1=passwort1+"-";
}

}

function show_passwort(){
document.getElementById("banner").innerHTML=passwort1;

}
window.onload=start;
var lettersArray=new Array(35);
lettersArray[0]="A";
lettersArray[1]="Ą";
lettersArray[2]="B";
lettersArray[3]="C";
lettersArray[4]="Ć";
lettersArray[5]="D";
lettersArray[6]="E";
lettersArray[7]="Ę";
lettersArray[8]="F";
lettersArray[9]="G";
lettersArray[10]="H";
lettersArray[11]="I";
lettersArray[12]="J";
lettersArray[13]="K";
lettersArray[14]="L";
lettersArray[15]="Ł";
lettersArray[16]="M";
lettersArray[17]="N";
lettersArray[18]="Ń";
lettersArray[19]="O";
lettersArray[20]="Ó";
lettersArray[21]="P";
lettersArray[22]="Q";
lettersArray[23]="R";
lettersArray[24]="S";
lettersArray[25]="Ś";
lettersArray[26]="T";
lettersArray[27]="U";
lettersArray[28]="V";
lettersArray[29]="W";
lettersArray[30]="X";
lettersArray[31]="Y";
lettersArray[32]="Z";
lettersArray[33]="Ż";
lettersArray[34]="Ź";


function start(){
    var letters="";
    for(i=0;i<35;i++){
        var element="let"+i;
        letters+='<div class="letter" onclick="check('+i+')" id="'+element+'">'+lettersArray[i]+'</div>';
        if((i+1)%7==0){
            letters+='<div style="clear:both;"></div>';
        }
    }


    document.getElementById("alphabet").innerHTML=letters;
    show_passwort();
}

String.prototype.setChar=function(position,character){
    if(position>this.length-1){
        return this.toString();
    }else{
        return this.substr(0,position)+character+this.substr(position+1);
    }

}


function check(nr){
    var shoot=false;

    for(i=0;i<length;i++){
        if(passwort.charAt(i)==lettersArray[nr]){
            passwort1=passwort1.setChar(i,lettersArray[nr]);
            shoot=true;
        }
    }
    if(shoot==true){
        yes.play();
        var element="let"+nr;
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default:";
        show_passwort();
    }else{
        no.play();
        var element="let"+nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");   

        overshoots++;
        var pic="img/s"+overshoots+".jpg";
        document.getElementById("picture").innerHTML='<img src="'+pic+'" alt=""/>'
    }


    //success
    if(passwort==passwort1){
        success.play();
        document.getElementById("alphabet").innerHTML="Success! Correct passwort is: "+passwort+'<br/><br/><span class="reset" onclick="location.reload()">NEW GAME?</SPAN>'
    }

    //failure
    if(overshoots>=9){
        failure.play();
         document.getElementById("alphabet").innerHTML="Failure! Correct passwort is: "+passwort+'<br/><br/><span class="reset" onclick="location.reload()">NEW GAME?</SPAN>'
    }

    show_passwort();
}