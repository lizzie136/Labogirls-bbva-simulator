console.log(window.location.toString());


const setParameters = (url) => {
  
  const params = new URLSearchParams(url.search.slice(1));
  for(let param of params.entries()){
    const element = document.querySelector('[data-model='+param[0]+']');
    if(!element) continue;
    element.value  = param[1];
    if(element.value && param[0] === 'fecha') {
      element.textContent = moment(param[1]).format('DD/MM/YYYY');
    }
  }
};

window.addEventListener('load', ()=>{
  setParameters(window.location);

});
