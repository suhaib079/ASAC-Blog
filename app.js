'use strict';
var id=1;

var div =document.getElementById('div');
function Artical(authorname,articaltitle,subject,day,month,year,content){
    this.authorname=authorname;
    this.articaltitle=articaltitle;
    this.subject=subject;
    this.like=likes();
    this.day=day;
    this.month=month;
    this.year=year;
    this.content=content;
    Artical.prototype.allarticl.push(this);
}
Artical.prototype.allarticl=[];
var form=document.getElementById('form');
form.addEventListener('submit',adddiv);

function adddiv(event){
    event.preventDefault();
    var namevalue=event.target.authorname.value;
    var titlevalue=event.target.articaltitle.value;
    var subjectvalue=event.target.subject.value;
    var dayvalue=event.target.day.value;
    var monthvalue=event.target.month.value;
    var yearvalue=event.target.year.value;
    var contentvalue=event.target.content.value;

    var userartical = new Artical(namevalue,titlevalue,subjectvalue,dayvalue,monthvalue,yearvalue,contentvalue);
    localStorage.setItem('artcalobject',JSON.stringify(Artical.prototype.allarticl));
    userartical.render();
    console.log(Artical.prototype.allarticl);
}

function likes(){
    return Math.floor(Math.random() * (500 - 1) + 1);
}

Artical.prototype.render=function(){

    
         var idshow=document.createElement('p');
         idshow.textContent=  "id number: "+id;
         div.appendChild(idshow);
    
        var articalshow=document.createElement('p');
        articalshow.textContent=this.articaltitle;
        div.appendChild(articalshow);

        var show=document.createElement('img');
        show.src='https://files.slack.com/files-pri/TNGRRLUMA-F01SL4FQ0VC/asac_ltuc.jpg';
        div.appendChild(show);

    var show=document.createElement('p');
    show.textContent= 'author: ' +  this.authorname;
    div.appendChild(show);

    var dateshow=document.createElement('p');
    dateshow.textContent= 'date: '+ this.day + '-' + this.month + '-' + this.year ;
    div.appendChild(dateshow);

    var likeshow=document.createElement('p');
    likeshow.textContent=this.like + ' likes' + '     ' +this.subject;
    div.appendChild(likeshow);

    var contentshow=document.createElement('p');
    contentshow.textContent=this.content;
    div.appendChild(contentshow);
    id++;

    

}
if(localStorage.getItem('artcalobject')){
     var lsarray= JSON.parse(localStorage.getItem('artcalobject'));

     for(var i=0; i<lsarray.length;i++){
         var lsshow =new Artical(lsarray[i].authorname,lsarray[i].articaltitle,lsarray[i].subject,lsarray[i].day,lsarray[i].month,lsarray[i].year,lsarray[i].content)
         lsshow.render();
     }
}