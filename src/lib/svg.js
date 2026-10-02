// Build-time SVG helpers for project cards and architecture diagrams.

export function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
}

export function pillFor(c) {
  if (c.status === 'pend') return '<span class="pill pend">evals pending</span>';
  return '';
}

export function svgVis(kind){
  var w=320,h=118,b='';
  if(kind==='forecast'){
    var pts=[];for(var i=0;i<22;i++){var v=60-12*Math.sin(i/3.2)-6*Math.sin(i/1.3)-i*.8;if(i===15)v+=22;pts.push([14+i*9,v]);}
    var last=pts[pts.length-1],up='',dn='';for(var k=0;k<=10;k++){var x=last[0]+k*9,m=last[1]-k*1.2-6*Math.sin((22+k)/3.2),s=k*2.2;up+=(k?'L':'M')+x+','+(m-s)+' ';dn='L'+x+','+(m+s)+' '+dn;}
    b+='<path class="v-band" d="'+up+dn+'Z"/><path class="v-dash" d="M'+last[0]+','+last[1]+' '+Array.from({length:10},function(_,k){return 'L'+(last[0]+(k+1)*9)+','+(last[1]-(k+1)*1.2-6*Math.sin((23+k)/3.2));}).join(' ')+'"/>';
    b+='<path class="v-line" d="'+pts.map(function(p,i){return (i?'L':'M')+p[0]+','+p[1];}).join(' ')+'"/><circle class="v-sig" cx="'+pts[15][0]+'" cy="'+pts[15][1]+'" r="4"/><text class="v-txt" x="'+(pts[15][0]+8)+'" y="'+(pts[15][1]+3)+'">anomaly</text>';
  }else if(kind==='vectors'){
    var r=1;for(var j=0;j<26;j++){r=(r*16807)%2147483647;var a=r/2147483647;r=(r*16807)%2147483647;var c=r/2147483647;b+='<circle cx="'+(30+a*110).toFixed(1)+'" cy="'+(22+c*74).toFixed(1)+'" r="3" fill="var(--accent)" opacity="'+(.35+((j%3)*.25)).toFixed(2)+'"/>';}
    b+='<path class="d-edge" d="M150,59 L198,59"/><path class="flow" d="M150,59 L198,59"/>';
    for(var rr=0;rr<4;rr++)for(var cc=0;cc<3;cc++)b+='<rect class="v-node" x="'+(206+cc*32)+'" y="'+(30+rr*15)+'" width="30" height="13" rx="2"/>';
    b+='<text class="v-txt" x="30" y="110">embeddings</text><text class="v-txt" x="206" y="110">structured data</text>';
  }else if(kind==='stream'){
    for(var s2=0;s2<4;s2++){var y=28+s2*18;b+='<path class="d-edge" d="M14,'+y+' C90,'+y+' 120,59 190,59"/><path class="flow" style="animation-delay:-'+(s2*.27)+'s" d="M14,'+y+' C90,'+y+' 120,59 190,59"/>';}
    [0,1,2].forEach(function(q){b+='<rect class="v-node" x="'+(200+q*36)+'" y="40" width="30" height="38" rx="5"/>';});
    b+='<text class="v-txt" x="14" y="110">events</text><text class="v-txt" x="200" y="110">bronze, silver, gold</text>';
  }else if(kind==='shap'){
    [64,48,36,28,18,10].forEach(function(v,i){b+='<rect class="'+(i<2?'v-acc-fill':'v-bar')+'" x="120" y="'+(14+i*15)+'" width="'+v*2.4+'" height="10" rx="2" opacity="'+(i<2?1:.55)+'"/><text class="v-txt" x="112" y="'+(22+i*15)+'" text-anchor="end">feature '+(i+1)+'</text>';});
  }else if(kind==='eq'){
    b+='<g class="eq">';for(var e=0;e<22;e++){var hh=20+((e*37)%60);b+='<rect x="'+(20+e*13)+'" y="'+(98-hh)+'" width="8" height="'+hh+'" rx="2" style="animation-delay:-'+((e*.13)%1.2).toFixed(2)+'s"/>';}b+='</g>';
  }else if(kind==='trail'){
    b+='<path d="M10,104 L70,52 L102,74 L150,28 L196,80 L232,58 L310,104 Z" fill="var(--accent)" opacity=".18"/><path class="v-acc" d="M10,104 L70,52 L102,74 L150,28 L196,80 L232,58 L310,104"/><path class="v-dash" style="stroke:var(--signal)" d="M40,104 C70,90 90,70 120,62 C140,56 146,40 150,30"/><circle cx="262" cy="28" r="10" fill="var(--signal)" opacity=".7"/>';
  }else if(kind==='dag'){
    var W3=[60,160,260];
    b+='<rect class="v-node" x="130" y="8" width="60" height="20" rx="5"/><text class="v-txt" x="160" y="21" text-anchor="middle">coordinator</text>';
    W3.forEach(function(x){b+='<path class="d-edge" d="M160,28 C160,38 '+x+',36 '+x+',48"/><path class="flow" d="M160,28 C160,38 '+x+',36 '+x+',48"/><rect class="v-node" x="'+(x-26)+'" y="48" width="52" height="18" rx="5"/>';});
    W3.forEach(function(x,i){b+='<text class="v-txt" x="'+x+'" y="60" text-anchor="middle">worker '+(i+1)+'</text>';W3.forEach(function(x2){b+='<path class="d-edge" d="M'+x+',66 L'+x2+',90"/>';});});
    W3.forEach(function(x){b+='<rect x="'+(x-18)+'" y="90" width="36" height="12" rx="3" fill="var(--accent)" opacity=".75"/>';});
    b+='<path class="flow" d="M60,66 L260,90"/><path class="flow" style="animation-delay:-.4s" d="M260,66 L60,90"/><text class="v-txt" x="160" y="114" text-anchor="middle">shuffle, hash partitioned</text>';
  }else if(kind==='heal'){
    b+='<line class="d-edge" x1="12" y1="92" x2="308" y2="92" style="stroke-dasharray:2 4"/><text class="v-txt" x="12" y="108">consumer lag</text>';
    b+='<path class="v-line" d="M12,88 L120,86 C135,84 140,30 152,26 L176,24 C190,24 196,84 210,86 L308,86"/><circle class="v-sig" cx="152" cy="26" r="4"/><text class="v-txt" x="160" y="18">hot partition</text>';
    b+='<line x1="184" y1="14" x2="184" y2="96" stroke="var(--accent)" stroke-dasharray="3 3"/><circle cx="214" cy="86" r="7" fill="var(--ok)"/><path d="M210,86 l3,3 5,-6" fill="none" stroke="var(--bg)" stroke-width="1.8"/><text class="v-txt" x="226" y="78">auto-remediated</text>';
  }else if(kind==='versions'){
    ['v1','v2','v3'].forEach(function(v,i){var x=24+i*40,y=66-i*20;b+='<rect class="v-node" x="'+x+'" y="'+y+'" width="74" height="28" rx="6"/><text class="v-txt" x="'+(x+10)+'" y="'+(y+17)+'">dataset '+v+'</text>';});
    b+='<path class="d-edge" d="M178,40 C210,40 214,58 236,58"/><path class="flow" d="M178,40 C210,40 214,58 236,58"/>';
    b+='<path d="M262,34 l22,8 v14 c0,14 -10,22 -22,26 c-12,-4 -22,-12 -22,-26 v-14 z" fill="var(--accent)" opacity=".85"/><path d="M253,58 l6,6 12,-13" fill="none" stroke="var(--bg)" stroke-width="2.2"/><text class="v-txt" x="262" y="104" text-anchor="middle">regression gate</text>';
  }else if(kind==='sql'){
    b+='<rect class="v-node" x="12" y="18" width="134" height="30" rx="10"/><text class="v-txt" x="22" y="37">top 5 regions by revenue?</text>';
    b+='<path class="d-edge" d="M146,33 L168,33"/><path class="flow" d="M146,33 L168,33"/>';
    b+='<rect x="170" y="12" width="138" height="56" rx="6" fill="var(--text)" opacity=".92"/><text x="180" y="28" font-family="var(--mono)" font-size="8" fill="var(--bg)">SELECT region, SUM(rev)</text><text x="180" y="41" font-family="var(--mono)" font-size="8" fill="var(--bg)">FROM sem.revenue</text><text x="180" y="54" font-family="var(--mono)" font-size="8" fill="var(--bg)">GROUP BY 1 LIMIT 5</text>';
    for(var ty=0;ty<3;ty++)for(var tx=0;tx<3;tx++)b+='<rect class="v-node" x="'+(170+tx*46)+'" y="'+(76+ty*11)+'" width="44" height="9" rx="2"/>';
    b+='<circle cx="30" cy="84" r="8" fill="var(--ok)"/><path d="M26,84 l3,3 5,-6" fill="none" stroke="var(--bg)" stroke-width="1.8"/><text class="v-txt" x="44" y="87">validated, read-only</text>';
  }else if(kind==='rex'){
    b+='<polygon points="0,78 50,46 96,70 150,36 206,66 262,40 320,68 320,118 0,118" fill="var(--accent)" opacity=".16"/><polygon points="0,96 70,74 132,88 196,70 260,86 320,76 320,118 0,118" fill="var(--accent)" opacity=".3"/>';
    b+='<rect x="56" y="70" width="54" height="8" rx="2" fill="var(--text)" opacity=".75"/><rect x="160" y="54" width="48" height="8" rx="2" fill="var(--text)" opacity=".75"/><rect x="240" y="66" width="52" height="8" rx="2" fill="var(--text)" opacity=".75"/>';
    b+='<circle cx="178" cy="40" r="4" fill="var(--signal)"/><circle cx="191" cy="40" r="4" fill="var(--signal)"/><g class="bob"><rect x="74" y="47" width="18" height="21" rx="5" fill="var(--signal)"/><rect x="84" y="52" width="4" height="5" rx="1" fill="var(--bg)"/></g>';
  }
  return '<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'+b+'</svg>';
}

export function diagram(spec,uid){
  var NW=156,NH=46,by={},b='',mk='arw-'+uid;
  spec.nodes.forEach(function(n){by[n.id]=n;});
  b+='<defs><marker id="'+mk+'" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-arrow" d="M0,0 L8,4 L0,8 z"/></marker></defs>';
  spec.edges.forEach(function(e){var A=by[e[0]],B=by[e[1]],d;
    if(Math.abs(A.y-B.y)<5){var ay=A.y+NH/2;d=B.x>A.x?('M'+(A.x+NW)+','+ay+' L'+B.x+','+ay):('M'+A.x+','+ay+' L'+(B.x+NW)+','+ay);}
    else if(Math.abs(A.x-B.x)>100&&Math.abs(A.y-B.y)<120&&B.x>A.x){var sx=A.x+NW,sy=A.y+NH/2,tx=B.x,ty=B.y+NH/2,mx=(sx+tx)/2;d='M'+sx+','+sy+' C'+mx+','+sy+' '+mx+','+ty+' '+tx+','+ty;}
    else if(B.y>A.y){var sx1=A.x+NW/2,sy1=A.y+NH,tx1=B.x+NW/2,ty1=B.y,my=(sy1+ty1)/2;d='M'+sx1+','+sy1+' C'+sx1+','+my+' '+tx1+','+my+' '+tx1+','+ty1;}
    else{var sx2=A.x+NW/2,sy2=A.y,tx2=B.x+NW/2,ty2=B.y+NH,my2=(sy2+ty2)/2;d='M'+sx2+','+sy2+' C'+sx2+','+my2+' '+tx2+','+my2+' '+tx2+','+ty2;}
    b+='<path class="d-edge" d="'+d+'" marker-end="url(#'+mk+')"/><path class="flow" d="'+d+'"/>';});
  spec.nodes.forEach(function(n){b+='<g class="d-node '+(n.k||'')+'"><rect x="'+n.x+'" y="'+n.y+'" width="'+NW+'" height="'+NH+'" rx="10"/>'+(n.s?'<text class="d-l" x="'+(n.x+14)+'" y="'+(n.y+20)+'">'+esc(n.l)+'</text><text class="d-s" x="'+(n.x+14)+'" y="'+(n.y+36)+'">'+esc(n.s)+'</text>':'<text class="d-l" x="'+(n.x+14)+'" y="'+(n.y+28)+'">'+esc(n.l)+'</text>')+'</g>';});
  return '<svg viewBox="0 0 734 '+spec.h+'" role="img" aria-label="Architecture sketch">'+b+'</svg>';
}

/** Full HTML for a project sheet, rendered at build time into a <template>. */
export function caseBody(c) {
  let h = `<p>${esc(c.sum)}</p>`;
  if (c.dia) h += `<div class="dia">${diagram(c.dia, c.id)}</div>`;
  h += `<h4>What it does</h4><ul>${c.bullets.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  if (c.mets) h += `<h4>${esc(c.mhead || 'Results')}</h4><div class="mets">${c.mets.map((m) => `<div class="met${m.p ? ' pending' : ''}"><div class="v">${esc(m.v)}</div><div class="k">${esc(m.k)}</div></div>`).join('')}</div>`;
  if (c.note) h += `<p class="note-box">${esc(c.note)}</p>`;
  h += `<div class="chips">${c.chips.map((x) => `<span class="chip">${esc(x)}</span>`).join('')}</div>`;
  if (c.repo) h += `<div class="btns"><a class="btn" href="${c.repo}" target="_blank" rel="noopener"><svg class="i"><use href="#i-gh"/></svg>View the repo on GitHub</a></div>`;
  else h += `<div class="btns"><span class="pill">repo coming soon</span></div>`;
  return h;
}
