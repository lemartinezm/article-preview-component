function shareContentMobile() {
  document.getElementById('share-container').style = 'background-color: hsl(217, 19%, 35%); padding: 20px 32px; justify-content: space-between'
  document.getElementById('container').style.padding = '40px 0 0 0';
  document.getElementById('avatar').style.display = 'none';
  document.getElementById('user-date').style.display = 'none';
  document.getElementById('social-icons').style.display = 'flex'
  document.querySelector('#icon-container svg path').style.fill = 'white';
  document.querySelector('#icon-container').style.backgroundColor = '#6E8098';
}

function shareContentDesktop() {
  document.getElementById('social-icons').style = 'display: flex';
  document.querySelector('#icon-container svg path').style.fill = 'white';
  document.querySelector('#icon-container').style.backgroundColor = '#6E8098';
}

// * Media Query
const mediaMobile = window.matchMedia('(max-width: 767px)');

function handleChange(mediaQuery) {
  const iconsContainer = document.getElementById('icon-container');
  const socialContainer = document.getElementById('social-icons');
  if (mediaQuery.matches) {
    document.getElementById('user-date').after(socialContainer);
    iconsContainer.addEventListener('click', shareContentMobile);
  } else {
    iconsContainer.removeEventListener('click', shareContentMobile);
    iconsContainer.addEventListener('click', shareContentDesktop);
    iconsContainer.appendChild(document.getElementById('social-icons'));
  }
}

handleChange(mediaMobile);

mediaMobile.addEventListener('change', handleChange)