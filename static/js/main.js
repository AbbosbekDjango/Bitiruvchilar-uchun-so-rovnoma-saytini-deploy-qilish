const deleteBtn = document.querySelectorAll(".deleteModalBtn");
      const closeModal = document.querySelectorAll(".closeModalBtn");
      const modalContainer = document.querySelectorAll('.deletemodal');
      const overlay =  document.querySelector('.overlay')
      
      
      deleteBtn.forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
         deleteBtn[i].nextElementSibling.classList.remove('hidden');
         overlay.classList.remove('hidden')
         //console.log(deleteBtn[i].nextElementSibling)
            
        })
      })
      closeModal.forEach((cBtn,a)=>{
        cBtn.addEventListener('click',()=>{
          closeModal[a].parentElement.classList.add('hidden')
          overlay.classList.toggle('hidden')
          console.log(closeModal[a]);
          
        })
      })
      

      

      
      
      document.addEventListener('keydown',(e)=>{
          if(e.key == 'Escape'){
              
          }
      })
