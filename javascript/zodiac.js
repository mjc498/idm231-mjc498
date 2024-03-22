// when submit is clicked...
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
  const astrological_sign_value = collectBirthday();
  triggerCoinClick(astrological_sign_value);
});

// list
function astrological_sign(day, month) {
  let astrological_sign = "";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      astrological_sign = "Capricorn";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      astrological_sign = "Sagittarius";
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      astrological_sign = "Scorpio";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      astrological_sign = "Libra";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      astrological_sign = "Virgo";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      astrological_sign = "Leo";
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      astrological_sign = "Cancer";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      astrological_sign = "Gemini";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      astrological_sign = "Taurus";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      astrological_sign = "Aries";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      astrological_sign = "Pisces";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      astrological_sign = "Aquarius";
  }
  return astrological_sign;
  }

// astrological sign popup
function collectBirthday() {
  var birthdayInput = document.getElementById('birthdayInput').value;

  var birthdayParts = birthdayInput.split('-');
  var month = parseInt(birthdayParts[1]); 
  var day = parseInt(birthdayParts[2]);   

  console.log('Month:', month); // check value
  console.log('Day:', day); // check value

  var astrological_sign_value = astrological_sign(day, month);
  console.log(astrological_sign_value);

  return astrological_sign_value;
}

// match date to coin
function triggerCoinClick(astrologicalSign) {
  const coinContainer = document.querySelector(`.coin-container[data-sign="${astrologicalSign}"]`);
  const popup = coinContainer.nextElementSibling;
  const audio = coinContainer.querySelector('audio');

  popup.style.display = 'block';
  audio.play();
}

// coin images
const coinContainers = document.querySelectorAll('.coin-container');
coinContainers.forEach(coinContainer => {
  const frontImage = coinContainer.querySelector('.front');
  const backImage = coinContainer.querySelector('.back');
  const popup = coinContainer.nextElementSibling; 
  const closePopup = popup.querySelector('.closePopup');
  const audio = coinContainer.querySelector('audio');

  coinContainer.addEventListener('mouseover', () => {
    frontImage.classList.add('flipped');
    backImage.classList.remove('hidden');
  });

  coinContainer.addEventListener('mouseout', () => {
    frontImage.classList.remove('flipped');
    backImage.classList.add('hidden');
  });

  backImage.addEventListener('click', () => {
    popup.style.display = 'block';
    audio.play();
  });

  frontImage.addEventListener('click', () => {
    popup.style.display = 'block';
    audio.play();
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

function closeAllPopups() {
  const openPopups = document.querySelectorAll('.popup:not(.hidden)');
  openPopups.forEach(popup => popup.classList.add('hidden'));
}

// instructions popup
const infoButton = document.getElementById('info-button');
const infoPopup = document.getElementById('info-popup');
const closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', () => {
  infoPopup.classList.toggle('hidden');
});

infoButton.addEventListener('click', () => {
  infoPopup.classList.toggle('hidden');
});