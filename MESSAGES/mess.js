doc = new Array(16);
doc[0]="Index.html";
doc[1]="Christ.html";
doc[2]="Try.html";
doc[3]="Aids.html";
doc[4]="Lord.html";
doc[5]="Perambulation.html";
doc[6]="Toward.html";
doc[7]="Aflame.html";
doc[8]="Think.html";
doc[9]="Voice.html";
doc[10]="Poem.html";
doc[11]="JP.html";
doc[12]="Ready.html";
doc[13]="Deep.html";
doc[14]="Nothing.html";
doc[15]="Alone.html";
function btn(cur){
	document.write("<center>");
	if(cur!=0){
		if(cur==15){
	document.write("<a href='"+doc[cur-1]+"'><img src=image%20source/Back1.png border=0 width=100 alt='To The Previous Article'></a>");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("<a href=#top><img src=image%20source/Top1.png border=0 width=100 alt='To The Beginning Of This Article'></a>");}
		else{
	document.write("<a href='"+doc[cur-1]+"'><img src=image%20source/Back1.png border=0 width=100 alt='To The Previous Article'></a>");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("<a href=#top><img src=image%20source/Top1.png border=0 width=100 alt='To The Beginning Of This Article'></a>");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("<a href='"+doc[cur+1]+"'><img src=image%20source/Next1.png border=0 width=100 alt='To The Next Article'></a>");}
		}
	else{
	document.write("<a href=#top><img src=image%20source/Top1.png border=0 width=100 alt='To The Beginning Of This Article'></a>");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("<a href='"+doc[cur+1]+"'><img src=image%20source/Next1.png border=0 width=100 alt='To The Next Article'></a>");
	}
	document.write("</center>");
	document.write("<br>");
	}
function message()
{
   document.write("<p class=menuhead><a name=oa>OTHER ARTICLES:</a></p>");
   document.write("<table cellspacing=0 cellpadding=5 border=0 align=center>");
   document.write("<tr align=center valign=middle>");
   document.write("<td><a class=noline href=Christ.html target=_self>Christ,<br>The Ocean of<br>Love and<br>Compassion</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Try.html target=_self>Try<br>Jesus...</a></td><td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Aids.html target=_self>AIDS</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Lord.html target=_self>Is He<br>Your<br><b>L<small>ORD</small></b>?</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Perambulation.html target=_self>The<br>Perspicacious<br>Perambulation</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Toward.html target=_self>Toward ... ?</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Aflame.html target=_self>Let<br>Hearts<br>Aflame...</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Think.html target=_self>Think<br>it<br>over!</a></td>");
   document.write("</tr>");
   document.write("</table>");
   document.write("<table cellspacing=0 cellpadding=5 border=0 align=center>");
   document.write("<tr align=center valign=middle>");
   document.write("<td><a class=noline href=Voice.html target=_self>The<br>Lordly<br>Voice</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Poem.html target=_self>Soliloquy<br>of a<br>Weary<br>Heart...!</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=jp.html target=_self>Jenna's<br>Doll</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Ready.html target=_self>Are<br>You<br>Ready...?</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Deep.html target=_self>Deep<br>Rooted...!</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Nothing.html target=_self>Nothing<br>Impossible...</a></td>");
   document.write("<td><img src=image%20source/VLINE.png width=2 height=70 border=0></td>");
   document.write("<td><a class=noline href=Alone.html target=_self>Let<br>Him<br>Alone...</a></td>");
   document.write("</tr>");
   document.write("</table>");
   document.write("<hr color=#800000 width=90%>");
}
function btnh(){
	document.write("<center>");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("<a href=MESSAGES.html><img src=image%20source/Home1.png width=100 border=0></a>");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("</center>");
}
function mail(){
	document.write("<hr color=#800000 width=75%>");
	document.write("<center>");
	document.write("<p class=mail><a class=noline href=mailto:?to=yourfriend@theirmail.com&amp;Cc=anotherfriend@theirmail.com&amp;Subject=New&nbsp;Web&nbsp;Site&nbsp;-&nbsp;Messages&nbsp;On&nbsp;The&nbsp;Word&amp;body=Please&nbsp;visit&nbsp;this&nbsp;new&nbsp;Web&nbsp;Site&nbsp;http://www.messagesontheword.freeservers.com");
	document.write(" title= 'Click Here To Introduce This Site To Your Friends' ");
	document.write(">");
	document.write("Click here to introduce this Web Site to your friends and other wellwishers through E-mail");
	document.write("</a></p>");
	document.write("<hr color=#800000 width=75%>");
	document.write("<center>");
	document.write("<p class=mail><a class=noline href=mailto:ask.udayakumar@gmail.com");
	document.write(" title= 'Click Here To Send Your Comments' ");
	document.write(">");
	document.write("If You Have Any Comments, You Are Most Welcome!");
	document.write("</a></p>");
	document.write("</center>");
}