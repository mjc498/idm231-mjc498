// question popup
const infoButton = document.getElementById('info-button');
const infoPopup = document.getElementById('info-popup');
const closeButton = document.querySelector('.closeButton');

closeButton.addEventListener('click', () => {
  infoPopup.classList.toggle('hidden');
});

infoButton.addEventListener('click', () => {
  infoPopup.classList.toggle('hidden');
});

// zodiac list
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

// zodiac popup 
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; 
});

// dates 
const signs = [
  { name: 'Aries', image: '01aries_mario.png', audio: 'audio_1.mp3' },
  { name: 'Taurus', image: '02taurus_rosalina.png', audio: 'audio_2.mp3' },
  { name: 'Gemini', image: '03gemini_peach.png', audio: 'audio_3.mp3' },
  { name: 'Cancer', image: '04cancer_toad.png', audio: 'audio_4.mp3' },
  { name: 'Leo', image: '05leo_kong.png', audio: 'audio_5.mp3' },
  { name: 'Virgo', image: '06virgo_junior.png', audio: 'audio_6.mp3' },
  { name: 'Libra', image: '07libra_toadette.jpeg', audio: 'audio_7.mp3' },
  { name: 'Scorpio', image: '08scorpio_daisy.png', audio: 'audio_8.mp3' },
  { name: 'Sagittarius', image: '09sag_yoshi.png', audio: 'audio_9.mp3' },
  { name: 'Capricorn', image: '10capricorn_boo.png', audio: 'audio_10.mp3' },
  { name: 'Aquarius', image: '11aquarius_bowser.png', audio: 'audio_11.mp3' },
  { name: 'Pisces', image: '12pisces_luigi.png', audio: 'audio_12.mp3' }
];

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