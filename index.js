const projectBtnEl = document.querySelector('button.btn-white');
const resumeBtnEl = document.querySelector('button.btn-pink');
const projectsEl = document.querySelector('div.projects'); 
const resumeEl = document.querySelector('div.resume');
const greetingEl = document.querySelector('.greeting')

projectBtnEl.active = false;
resumeBtnEl.active = false;

resumeBtnEl.addEventListener('click', () => { 
  resumeEl.classList.toggle('js-block');
  if(projectsEl.classList.contains('js-block')) {
    projectsEl.classList.remove('js-block');
  }

});

projectBtnEl.addEventListener('click', () => {
  projectsEl.classList.toggle('js-block');
  if(resumeEl.classList.contains('js-block')) {
    resumeEl.classList.remove('js-block');
  }
});


