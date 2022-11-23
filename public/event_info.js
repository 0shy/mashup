window.onload = function () {
    HandleRefresh();
}
function HandleRefresh() {
    var url = "https://proxyserver4cors.herokuapp.com/"+
                "http://openapi.seoul.go.kr:8088/7350477542736f6c383275784e6651/json/culturalEventInfo/1/1000";
    $.getJSON(url, updateData);
}

function updateData(str){
    var dataDiv = document.getElementById("dataDiv");
    var data = str.culturalEventInfo.row;
    var watchButton = document.getElementById("what");
    watchButton.onclick=function() {
        $("div").children ().remove();
        var gu = document.getElementById("gu");
        gus = gu.options[gu.selectedIndex].value;
        for (var i = 0; i < data.length; i++) {
            if(gus= data[i].CODENAME) {
                var div = document.createElement("div");
                div.setAttribute("class", "dataItem");
                div.innerHTML = "<br><image width='200' height='300' style='margin-left: auto; margin-right: auto; \
                                display: block;' onerror=this.src='good.jpg' src="+data[i].MAIN_IMG+">"+
                "<br>* 제목: "+data[i].TITLE+
                "<br>* 공연기간: "+data[i].DATE+
                "<br>* 공연장: "+data[i].PLACE+
                "<br>* <a href="+data[i].ORG_LINK+" target=blank>"+"홈페이지 바로가기"+"</a><br>";

                dataDiv.appendChild(div);
                if (dataDiv.childElementCount == 0) {
                    dataDiv.appendChild(div);
                }
                else {
                    dataDiv.insertBefore(div, dataDiv.firstChild);
                }
            }
        }
    }
}