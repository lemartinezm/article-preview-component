function shareContentMobile() {
  document.getElementById('share-container').style = 'background-color: hsl(217, 19%, 35%); padding: 20px 32px; justify-content: space-between'
  document.getElementById('container').style.padding = '40px 0 0 0';
  document.getElementById('avatar').style.display = 'none';
  document.getElementById('user-date').style.display = 'none';
  document.getElementById('social-container').style.display = 'flex'
  document.querySelector('#share-button svg path').style.fill = 'white';
  document.querySelector('#share-button').style.backgroundColor = '#6E8098';
}

function shareContentDesktop() {
  document.getElementById('social-container').style = 'display: flex; opacity: 1';
  document.querySelector('#share-button svg path').style.fill = 'white';
  document.querySelector('#share-button').style.backgroundColor = '#6E8098';
}

function closeShareBox() {
  document.getElementById('social-container').removeAttribute('style');
  document.querySelector('#share-button svg path').removeAttribute('style');
  document.querySelector('#share-button').removeAttribute('style');
}

// * Media Query
const mediaMobile = window.matchMedia('(max-width: 767px)');

function handleChange(isMobile) {
  const shareButton = document.getElementById('share-button');
  const socialContainer = document.getElementById('social-container');
  if (isMobile) {
    document.getElementById('user-date').after(socialContainer);
    shareButton.addEventListener('click', shareContentMobile);
  } else {
    shareButton.removeEventListener('click', shareContentMobile);
    shareButton.addEventListener('click', shareContentDesktop);
    shareButton.addEventListener('blur', closeShareBox);
    shareButton.appendChild(document.getElementById('social-container'));
  }
}

handleChange(mediaMobile.matches);

mediaMobile.addEventListener('change', handleChange);
