// astrological signs
const signs = [
  {
    name: "Aries",
    image: "01aries_mario.png",
    sound: "audio_1.mp3",
    description: "You share a horoscope with Mario! As the main hero of Mushroom Kingdom, Mario is always ready for a call to action. He won’t think twice before jumping into huge tasks like taking on Bowser. Aries hold the invaluable trait of independence and Mario uses exactly that to his advantage. While solving problems with simply running and jumping, he is sure to achieve whatever goal he wishes to achieve.",
    dates: "March 21 - April 19",
    popupNumber: "" 
  },
  {
    name: "Taurus",
    image: "02taurus_rosalina.png",
    sound: "audio_2.mp3",
    description: "You share a horoscope with Rosalina! Although a lesser known character in Super Mario Land, Rosalina exhibits the most care and protective nature. She may seem a bit distant, but she is very kind-hearted. Taureans are the ideal friend—they understand others easily and are willing to use the power of friendship to accomplish anything. Rosalina demonstrates how single-minded determination can be used productively despite some stubbornness.",
    dates: "April 20 - May 20",
    popupNumber: "2"
  },
  {
    name: "Gemini",
    image: "03gemini_peach.png",
    sound: "audio_3.mp3",
    description: "You share a horoscope with Princess Peach! As the beloved princess of Mushroom Kingdom, Peach exemplifies that intelligence can come in many forms. This characteristic has helped make her a kind and well-loved ruler. Geminis are aware of their intelligent capabilities and fervent imagination. The praised princess consistently manages to escape from the hands of the King Koopa with her social adeptness and agency.",
    dates: "May 21 - June 20",
    popupNumber: "3"
  },
  {
    name: "Cancer",
    image: "04cancer_toad.png",
    sound: "audio_4.mp3",
    description: "You share a horoscope with Toad! Displaying his exemplary intuition, Toad is the first to recognize when things are going wrong. His prickliness and outbursts in situations of high stress shows how much of an empath he tends to be. Cancers display constant loyalty and dedication in all their connections. Toad does his best to help others in their efforts from Bowser, even if he endangers himself in the process.",
    dates: "June 21 - July 22",
    popupNumber: "4"
  },
  {
    name: "Leo",
    image: "05leo_kong.png",
    sound: "audio_5.mp3",
    description: "You share a horoscope with Donkey Kong! Born as the king of the jungle, DK tends to be the center of attention. He never tends to slip into the background of things. Leos present charisma and enjoys the commanding of others. His emotions, specifically anger, do not seem to hinder his position of a great role model. However, Kong's physical and emotional strength may lead to walking over others without even realizing it.",
    dates: "July 23 - August 22",
    popupNumber: "5"
  },
  {
    name: "Virgo",
    image: "06virgo_junior.png",
    sound: "audio_6.mp3",
    description: "You share a horoscope with Bowser Junior! As the son of his highness Bowser, Bowser Junior works intensely hard to please his father. He throws tantrums if things do not go his way and causes plenty of trouble because of his selfishness. Virgos may often let their anger control the situations which leads to the best plans ultimately falling apart. Bowser Junior easily loses Princess Peach as easily as he helps in her kidnapping. His fortitude to continue this process is admiring.",
    dates: "August 23 - September 22",
    popupNumber: "6"
  },
  {
    name: "Libra",
    image: "07libra_toadette.jpeg",
    sound: "audio_7.mp3",
    description: "You share a horoscope with Toadette! Often in the background, Toadette always never forgets to bring everyone together—especially when it comes to playing games in Mario Party. Her calmness and kindness balances out well in her companionship with the anxious Toad. Libras tend to romanticize life and are known to be great listeners as well. Her charming persona helps balance well with her partner’s emotional struggles.",
    dates: "September 23 - October 23",
    popupNumber: "3"
  },
  {
    name: "Scorpio",
    image: "08scorpio_daisy.png",
    sound: "audio_8.mp3",
    description: "You share a horoscope with Princess Daisy! Being less formal compared to the other princess of Mario Land, Daisy’s ambitious personality makes her stand out from the rest. She is not afraid to be herself. Scorpios often come across as brusque, rude, or even secretive without meaning to. Their intuitive nature can help them in solving issues without bringing unnecessary attention to it. In Princess Daisy’s case, this translates to her competitiveness.",
    dates: "October 24 - November 21",
    popupNumber: "8"
  },
  {
    name: "Sagittarius",
    image: "09sag_yoshi.png",
    sound: "audio_9.mp3",
    description: "You share a horoscope with Yoshi! Without ever talking, Yoshi can make himself loud and clear in other ways. His carefree attitudes adds onto his bright and bouncy personality. Sagittariuses are energetic, optimistic, and adventurous. Yoshi is willing to help his friends without second guesses. It is hard to imagine him ever complaining when the solution is to push forward through any and all problems.",
    dates: "November 22 - December 21",
    popupNumber: "9"
  },
  {
    name: "Capricorn",
    image: "10capricorn_boo.png",
    sound: "audio_10.mp3",
    description: "You share a horoscope with King Boo! Setting himself apart from the other enemies, King Boo uses his ghastly skills to flee towards safety without putting himself at risk. He uses critical thinking skills to escape suspicious situations. Capricorns are usually disciplined, but also quite pessimistic. As the leader of the Boos and ghosts, King Boo tends to scheme quietly in his mansion while aiding in Bowser’s capture of Princess Peach.",
    dates: "December 22 - January 19",
    popupNumber: "10"
  },
  {
    name: "Aquarius",
    image: "11aquarius_bowser.png",
    sound: "audio_11.mp3",
    description: "You share a horoscope with Bowser! Given his powerful position, Bowser shows his ruthlessness as an uncompromising villain. The King of the Koopas is hesitant to express his emotions and comes out to be temperamental in conquering the Mushroom Kingdom. Aquariuses are problem-solvers with unique characteristics. Bowser shows his innovative and creative ways of thinking throughout the process of kidnapping the love of his life—Princess Peach.",
    dates: "January 20 - February 18",
    popupNumber: "11"
  },
  {
    name: "Pisces",
    image: "12pisces_luigi.png",
    sound: "audio_12.mp3",
    description: "You share a horoscope with Luigi! As another fellow hero of Mushroom Kingdom, Luigi is a kind and well-rounded introverted character. The dynamic between him and his Aries brother Mario shows his need to escape from the spotlight of Mario—after all, he is his own person. Pisces usually show signs of escapism and are closed off. Luigi’s minimal dialogue never hinders his empathy to remain a natural healer. He picks up crumbs left behind by Mario, yet never seems to dream about swapping places with him.",
    dates: "February 19 - March 20",
    popupNumber: "12"
  }
];

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

// when submit is clicked...
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function() {
  const astrological_sign_value = collectBirthday();
  triggerCoinClick(astrological_sign_value);
});

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