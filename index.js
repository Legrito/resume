const projectBtnEl = document.querySelector('button.btn-white');
      const resumeBtnEl = document.querySelector('button.btn-pink');
      const projectsEl = document.querySelector('div.projects'); 
      if(projectsEl.classList.contains('js-block')) {
        console.log('it is');
        document.body.removeAttribute('class');
        projectsEl.classList.remove('js-block');
      }     

      projectBtnEl.addEventListener('click', () => {
        
        projectsEl.classList.toggle('js-block');
        console.log('Project click');

      });