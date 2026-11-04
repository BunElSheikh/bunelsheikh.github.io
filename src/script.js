(function(){
  var PHONE='201557654244';
  var cur={label:'كيلو',price:'٦٠٠'};
  var sizes=document.querySelectorAll('.size');
  function link(){
    var msg='السلام عليكم، عايز أطلب بن الشيخ - '+cur.label+' بسعر '+cur.price+' جنيه';
    return 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg);
  }
  function refresh(){
    document.getElementById('priceNum').textContent=cur.price;
    document.getElementById('chosen').textContent=cur.label;
    var l=link();
    ['orderBtn','contactBtn','fabBtn'].forEach(function(id){document.getElementById(id).setAttribute('href',l)});
  }
  sizes.forEach(function(b){
    b.addEventListener('click',function(){
      sizes.forEach(function(x){x.setAttribute('aria-pressed','false')});
      b.setAttribute('aria-pressed','true');
      cur={label:b.getAttribute('data-label'),price:b.getAttribute('data-price')};
      refresh();
    });
  });
  refresh();
  var nav=document.getElementById('nav'),mb=document.getElementById('menuBtn');
  mb.addEventListener('click',function(){
    var o=nav.classList.toggle('open');
    mb.setAttribute('aria-expanded',o?'true':'false');
  });
  nav.addEventListener('click',function(e){
    if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}
  });
})();
