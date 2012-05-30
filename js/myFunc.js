function submitFunc() {
  var activity = $("#activity").val();
  var time = $("#time").val();
  
  var result = 10000 / time;
  var day = Math.round(result);
  
  var str = "私は" + activity + "を毎日" + time + "時間やることで、" + day + "日後にマスターします。";
  
  $("#str").html(str + "<a href=\"https://twitter.com/intent/tweet?text=" + str + " http://shun-ichiro.com/10000" + "&url=http://shun-ichiro.com/10000\" target=\"_blank\">" + "<img src=\"./img/tweet.gif\" alt=\"ツイートする\">" + "</a>");
}


// http://d.hatena.ne.jp/kokoromo/20090113/1231828845 より
function zentohan(obj){
	if(typeof(obj.value)!="string")return false;
	var han= '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@-.,:';
	var zen= '１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ＠－．，：';
	var word = obj.value;
	for(i=0;i<zen.length;i++){
		var regex = new RegExp(zen[i],"gm");
		word = word.replace(regex,han[i]);
	}
	obj.value = word;
}