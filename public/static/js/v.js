var xmlPathSite = "http://tv_html5.people.com.cn/",
video_mp4 = 3,
ptv_domain = "people.com.cn",
_replay = !1,
_objName = null,
ptvXmlDoc = null,
ptvXmlhttp = null,
b__ua = navigator.userAgent.toLowerCase(),
isSafari = b__ua.match(/version\/([\d.]+).*safari/) ? !0 : !1,
isSafari = -1 != b__ua.indexOf("iphone") || -1 != b__ua.indexOf("ipad") || -1 != b__ua.indexOf("android") ? !0 : !1,
isAndroid = -1 != b__ua.indexOf("android") ? !0 : !1,
isUC = -1 != b__ua.indexOf("uc") ? !0 : !1,
isIOS = -1 != b__ua.indexOf("iphone") || -1 != b__ua.indexOf("ipad") ? 1 : 0,
isHTTPError = !1,
safariObj = {},
objname = null,
clientWidth = null,
box = document
function showPlayer(a) {
  // 容器
  if (a.box) box = a.box
  clientWidth = document.body.clientWidth;
  var b = a.name ? a.name: "_v_p_" + Math.round(1E3 * Math.random()),
  c = a.width ? a.width: 600;
  if (600 >= clientWidth && isSafari) var c = parseInt(.9 * clientWidth),
  d = parseInt(c / 1.3333);
  else "string" == typeof c && -1 != c.indexOf("%") && isSafari ? isUC ? (c = getVideoWH(c), d = parseInt(c / 1.3333)) : d = "auto": d = a.height ? a.height: 497.5;
  _replay = a.replay;
  _objName = b;
  a.cdn = "100,0,0,0";
  a.sl = "5";
  objname = b;
  if (isSafari) {
    safariObj.w = c;
    safariObj.h = d;
    safariObj.name = b;
    safariObj.ap = a.autoplay;
    safariObj.fullscreen = a.fullscreen;
    safariObj.ori = a.ori;
    if (null == safariObj.ap || void 0 == safariObj.ap) safariObj.ap = !0;
    safariObj.toid = a.showid;
    safariObj.xml = a.id;
    safariObj.xml || (safariObj.xml = a.xml);
    safariObj.xml ? $.getScript('http://tvplayer.people.com.cn/getXML.php?path=' + safariObj.xml + "&callback=playForMobile&ios=" + isIOS + "&ori=" + safariObj.ori,function(){}) : (isHTTPError = !0, showVideoCodeInPage())
  } else {
    var e = [],
    f;
    for (f in a) e.push(f + "=" + _$_getTransStr(a[f]));
    isMaxthon() && e.push("ism=1");
    e.push("key=" + _$_getPageKey());
    e = e.join("&");
    1 == a.fullscreen && (d = c = "100%");
    a = 2 == a.skin ? "http://tv.people.com.cn/img/2011ptv2/playerByOsmfnb.swf" + (isMaxthon() ? "?" + Math.random() : "") : "http://tv.people.com.cn/img/2011ptv2/playerByOsmf.swf" + (isMaxthon() ? "?" + Math.random() : "");
    box.innerHTML ='<object id="' + b + '" name="' + b + '" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,1,85,3" width="' + c + '" height="' + d + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ><param name="movie" value="' + a + '" /><param name="FlashVars" value="' + e + '" /><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><embed name="' + b + '" width="' + c + '" height="' + d + '" src="' + a + '" wmode="opaque" allowFullScreen="true" allowScriptAccess="always" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" FlashVars="' + e + '" type="application/x-shockwave-flash"></embed></object>'
  }
}
function getVideoWH(a) {
  var b = document.body.clientWidth;
  a = a.replace("%", "");
  return a = parseInt(a / 100 * b * .9)
}
function playForMobile(a, b) {
  1 == safariObj.fullscreen && (safariObj.w = "100%", safariObj.h = "100%");
  a = '<video id="' + safariObj.name + '" class="video-js vjs-default-skin" controls ' + (safariObj.ap ? 'autoplay="autoplay"': "") + ' width="' + safariObj.w + '" height="' + safariObj.h + '" poster="' + b + '" data-setup=\'{"example_option":true}\' <source src="' + a + '" type="video/mp4" /></video>';
  try {
    box.getElementById(safariObj.toid).innerHTML = a
  } catch(c) {
    box.innerHTML = a
  }
}
function isMaxthon() {
  return - 1 < window.navigator.userAgent.toLowerCase().indexOf("maxthon") ? !0 : !1
}
function _$_getTransStr(a) {
  return "boolean" == typeof a ? Number(a) : escape(a)
}
function _$_getPageKey() {
  try {
    var a = document.getElementById("videoadvertype").innerHTML.split(";"),
    b = a[1].split("="),
    c = [];
    c.push(b[1]);
    for (b = 2; b < a.length; b++) c.push(a[b]);
    var d = c.join(";");
    return encodeURIComponent(d)
  } catch(e) {}
  a = window.location.href;
  return - 1 == a.indexOf("GB") ? "": "\u4eba\u6c11\u7535\u89c6:" + a.substring(a.indexOf("GB") + 2, a.lastIndexOf("/") + 1)
}
function _$_getSwfMovie(a) {
  var b = document[a];
  return b ? b.length ? b[1] : b: window[a]
}
function changePlayerVideo(a, b) {
  b && _$_getSwfMovie(b).refreshPlayer(escape(a))
}
function setRelevantVideoToPage(a) {
  a.shift();
  var b = document.getElementById("relevantVideoList");
  if (b) {
    for (var c = "",
    d = 0; d < a.length; d++) var e = a[d],
    c = c + ((0 == d ? '<li onmouseover=this.className="current" onmouseout=this.className="current01" class="current">': '<li onmouseover=this.className="current" onmouseout=this.className="current01" class="current01">') + '<a href="' + e.link + '" titlr="' + e.title + '"><img src="' + e.image + '" width="80" height="60" alt="' + e.title + '" onerror="onErrorVideoImage(this)"  /></a><div class="txt"><h4><a href="' + e.link + '" titlr="' + e.title + '">' + e.title + "</a></h4><p><span>" + ("" != e.pt && e.pt ? e.pt: "") + "</span><span>" + ("" != e.len && e.len ? "\u65f6\u957f\uff1a" + e.len: "") + "</span></p></div></li>");
    b.innerHTML = c;
    try {
      document.getElementById("relevantVideoNumber").innerHTML = a.length
    } catch(f) {}
  }
}
function onErrorVideoImage(a) {
  a && (a.src = "http://tv.people.com.cn/img/2010tv_flash/tv_logo.jpg");
  return "http://tv.people.com.cn/img/2010tv_flash/tv_logo.jpg"
}
function setQuotePageInfo(a, b) {
  try {
    document.getElementById("pageUrlInput").value = window.location.href
  } catch(c) {}
  try {
    document.getElementById("flashUrlInput").value = a
  } catch(c) {}
  try {
    document.getElementById("htmlCodeInput").value = b
  } catch(c) {}
}
function loadByAjax() {
  ptvXmlhttp = window.agentWindow.createHttpRequest();
  null == ptvXmlhttp ? (isHTTPError = !0, showVideoCodeInPage()) : (ptvXmlhttp.open("GET", xmlPathSite + safariObj.xml, !0), ptvXmlhttp.setRequestHeader("Content-Type", "text/xml"), ptvXmlhttp.onreadystatechange = getPtvVideoToApple, ptvXmlhttp.send(null))
}
function getPtvVideoToApple() {
  4 == ptvXmlhttp.readyState && 200 == ptvXmlhttp.status && (ptvXmlDoc = ptvXmlhttp.responseXML.documentElement, null == ptvXmlDoc ? isHTTPError = !0 : (safariObj.video = getDecoderVideoForMP4(ptvXmlDoc.getElementsByTagName("video")[0].getElementsByTagName("item")[0].firstChild.nodeValue, ptvXmlDoc.getElementsByTagName("video")[0].getAttribute("type"), !1), "ERROR" == safariObj.video && (isHTTPError = !0), parsePlayListXml(ptvXmlDoc.getElementsByTagName("associations")[0].getElementsByTagName("item"))), showVideoCodeInPage())
}
function getDecoderVideo(a, b) {
  var c = "";
  if (!a || "" == a) return c;
  if (0 != a.indexOf("http://")) for (var d = 0; d < a.length;) var e = a.charCodeAt(d++),
  f = a.charCodeAt(d++),
  c = c.concat(String.fromCharCode(f - 3)),
  c = c.concat(String.fromCharCode(e - 3));
  else c = a;
  c = trimString(c);
  if (b) return c;
  a = c.substr(7, 4).toLowerCase();
  b = c.substr( - 3).toLowerCase();
  if ("flv2" == a && ("mp4" == b || "f4v" == b)) a = c.substring(c.lastIndexOf("/") + 1, c.lastIndexOf(".")),
  c = c.substring(0, c.lastIndexOf("/") + 1) + a + ".ssm/" + a + ".m3u8";
  else if ("flv." != a || "mp4" != b) c = "ERROR";
  return c
}
function getDecoderVideoForMP4(a, b, c) {
  var d = "";
  if (!a || "" == a) return d;
  if (0 != a.indexOf("http://")) for (var e = 0; e < a.length;) var f = a.charCodeAt(e++),
  g = a.charCodeAt(e++),
  d = d.concat(String.fromCharCode(g - 3)),
  d = d.concat(String.fromCharCode(f - 3));
  else d = a;
  d = trimString(d);
  if (c) return d;
  a = d.substr(7, 4).toLowerCase();
  c = d.substr( - 3).toLowerCase();
  "flv2" != a || "mp4" != c && "f4v" != c ? "flv." == a && "mp4" == c ? 3 == b && (d = joinForMP4(d)) : d = 3 == b ? joinForMP4(d) : "ERROR": 3 == b ? d = joinForMP4(d) : (b = d.substring(d.lastIndexOf("/") + 1, d.lastIndexOf(".")), d = d.substring(0, d.lastIndexOf("/") + 1) + b + ".ssm/" + b + ".m3u8");
  return d
}
function joinForMP4(a) {
  var b = a.indexOf(ptv_domain) + ptv_domain.length + 1;
  return a = a.substring(0, b) + "hls-vod/" + a.substring(b) + ".m3u8"
}
function trimString(a) {
  a = a.replace(/^(\s|\u00A0)+/, "");
  for (var b = a.length - 1; 0 <= b; b--) if (/\S/.test(a.charAt(b))) {
    a = a.substring(0, b + 1);
    break
  }
  return a
}
function showVideoCodeInPage() {
  var a;
  a = isHTTPError ? '<div style="width:' + safariObj.w + "px;height:" + safariObj.h + "px;background:#000;line-height:" + safariObj.h + 'px;text-align:center;color:#fff;font-size:14px;clear:both;padding:0 20px;">\u6b64\u89c6\u9891\u6682\u65f6\u4e0d\u652f\u6301\u82f9\u679c\u8bbe\u5907\uff0c\u8bf7\u5728\u7535\u8111\u4e0a\u6d4f\u89c8\u89c2\u770b\uff01</div>': '<video width="' + safariObj.w + '" height="' + safariObj.h + '" controls="controls" ' + (safariObj.ap ? 'autoplay="autoplay"': "") + ' id="' + safariObj.name + '" src="' + safariObj.video + '"></video>';
  try {
    document.getElementById(safariObj.toid).innerHTML = a
  } catch(b) {
    document.write(a)
  }
}
function parsePlayListXml(a) {
  var b = [];
  b.push(null);
  for (var c = 0; c < a.length; c++) b.push(getPlayListObject(a[c]));
  setRelevantVideoToPage(b)
}
function getPlayListObject(a) {
  var b = {};
  b.link = getXMLNodeValue(a, "staticpage");
  b.title = getXMLNodeValue(a, "title");
  b.image = getDecoderVideo(getXMLNodeValue(a, "image"), !0);
  b.pt = getPLTimeByNumber(getXMLNodeValue(a, "publishDate"));
  b.len = getLENTimeByNumber(getXMLNodeValue(a, "length"));
  return b
}
function getXMLNodeValue(a, b) {
  try {
    return a.getElementsByTagName(b)[0].firstChild.nodeValue
  } catch(c) {
    return ""
  }
}
function getPLTimeByNumber(a) {
  if ("" == a) return "";
  a = new Date(Number(a));
  return a.getFullYear() + "-" + checkNumberString(a.getMonth() + 1) + "-" + checkNumberString(a.getDate()) + " " + checkNumberString(a.getHours()) + ":" + checkNumberString(a.getMinutes()) + ":" + checkNumberString(a.getSeconds())
}
function getLENTimeByNumber(a) {
  if ("" == a) return "";
  a = new Date(Number(a));
  return (0 < a.getUTCHours() ? checkNumberString(a.getUTCHours()) + ":": "") + checkNumberString(a.getUTCMinutes()) + ":" + checkNumberString(a.getUTCSeconds())
}
function checkNumberString(a) {
  return 10 > a ? "0" + a: a.toString()
}
function controlWidescreen(a) {
  document.getElementById(objname).style.width = "600px"
}
function rmw_videoPlayOver(a) {
  _replay && changePlayerVideo(a, _objName)
};