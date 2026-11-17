const bar=document.createElement('div');bar.className='prog';document.body.prepend(bar);
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+'%'},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('article section,.etapas li,.tabla,.nota').forEach(el=>{el.classList.add('rv');io.observe(el)});
const links=[...document.querySelectorAll('nav.cuadro a')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -60% 0px'});
document.querySelectorAll('article section[id]').forEach(s=>spy.observe(s));
