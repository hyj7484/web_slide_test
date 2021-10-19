window.onload = () => {
  start();
}
var pos = 0;

const start = () => {
  const slider = document.getElementById('slider');
  const radioList = document.getElementById('radio_list').children;
  const labelList = document.getElementById('bullet').children;
  for(let i = 0; i < radioList.length; i++){
    console.log(labelList[i])
    setEventListener(radioList[i], slider, i, labelList)
  }
  // radioList.children.map((value, index)=>{
  //   console.log(value)
  //   console.log(index)
  // })



  const loop = () => {
    labelList[pos].style.cssText = 'background:#fff';
    pos++;
    pos = pos % 3;
    labelList[pos].style.cssText = 'background:#666';
    radioList[pos].checked = true
    slider.style.cssText = `margin-left : ${-pos * 100}%`
  }

  setInterval(loop, 2000);
}

const setEventListener = (dom, slider, index, labelList) => {
  dom.addEventListener('change', () => {
    labelList[pos].style.cssText = 'background:#fff';
    pos = index;
    if(dom.checked){
      labelList[index].style.cssText = 'background:#666';
    }
    slider.style.cssText = `margin-left : ${-pos * 100}%`
  })
}
