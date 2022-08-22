function shareContentMobile() {
  document.getElementById('share-container').style = 'background-color: hsl(217, 19%, 35%); padding: 20px 32px; justify-content: space-between'
  document.getElementById('container').style.padding = '40px 0 0 0';
  document.getElementById('avatar').style.display = 'none';
  document.getElementById('user-date').style.display = 'none';
  document.getElementById('social-icons').style.display = 'flex'
  document.querySelector('#share-button svg path').style.fill = 'white';
  document.querySelector('#share-button').style.backgroundColor = '#6E8098';
}

// For animations
let interval;

function shareContentDesktop() {
  document.getElementById('social-icons').style = 'display: flex';
  clearInterval(interval);
  interval = setInterval(() => {
    document.getElementById('social-icons').style = 'display: flex; opacity: 100%';
  }, 5);
  document.querySelector('#share-button svg path').style.fill = 'white';
  document.querySelector('#share-button').style.backgroundColor = '#6E8098';
}

function closeShareBox() {
  clearInterval(interval);
  interval = setInterval(() => {
    document.getElementById('social-icons').style = 'display: flex; opacity: 0';
  }, 5)
  document.getElementById('social-icons').removeAttribute('style');
  document.querySelector('#share-button svg path').removeAttribute('style');
  document.querySelector('#share-button').removeAttribute('style');
}

// * Media Query
const mediaMobile = window.matchMedia('(max-width: 767px)');

function handleChange(isMobile) {
  const iconsContainer = document.getElementById('share-button');
  const socialContainer = document.getElementById('social-icons');
  if (isMobile) {
    document.getElementById('user-date').after(socialContainer);
    iconsContainer.addEventListener('click', shareContentMobile);
  } else {
    iconsContainer.removeEventListener('click', shareContentMobile);
    iconsContainer.addEventListener('click', shareContentDesktop);
    iconsContainer.addEventListener('blur', closeShareBox);
    iconsContainer.appendChild(document.getElementById('social-icons'));
  }
}

handleChange(mediaMobile.matches);

mediaMobile.addEventListener('change', handleChange);
