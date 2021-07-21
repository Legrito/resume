const projectBtnEl = document.querySelector('#projects');
const resumeBtnEl = document.querySelector('#resume');
const projectsEl = document.querySelector('div.projects'); 
const resumeEl = document.querySelector('div.resume');
const greetingEl = document.querySelector('.greeting')

projectBtnEl.active = false;
resumeBtnEl.active = false;

resumeBtnEl.addEventListener('click', () => { 
  resumeEl.classList.toggle('js-block');
  projectBtnEl.classList.toggle('active-btn');
  resumeBtnEl.classList.toggle('active-btn');
  if(projectsEl.classList.contains('js-block')) {
    projectsEl.classList.remove('js-block');
  }

});

projectBtnEl.addEventListener('click', () => {
  projectsEl.classList.toggle('js-block');
  projectBtnEl.classList.toggle('active-btn');
  resumeBtnEl.classList.toggle('active-btn');
  if(resumeEl.classList.contains('js-block')) {
    resumeEl.classList.remove('js-block');
  }
});


