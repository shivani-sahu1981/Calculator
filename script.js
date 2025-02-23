let inp = document.querySelector('input')
        let button= document.querySelectorAll('button')
        for(let btn of button){
          btn.addEventListener('click',(e)=>{
            let text= e.target.innerText
            if(text==='c'){
              inp.value=''
            }
            else if(text==='='){
              inp.value= eval(inp.value)
            }
            else{
              inp.value=inp.value+text
            }
          })
        }