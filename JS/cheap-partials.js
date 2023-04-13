// SUPER CHEAP TEMPLATES !    
window.loadCheapPartial = function (event) {
    var iframe=event.target || event.srcElement, div=document.createElement("div");
    // using contentWindow.document instead of contentDocument for ie6/7 compatibility
    div.innerHTML = iframe.contentWindow.document.body.innerHTML;
    if (div.children.length == 1) div = div.children[0];
    iframe.parentNode.replaceChild(div, iframe);
  };