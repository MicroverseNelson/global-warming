const hamburgerBtn = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.navLink');
const djData = [
  {
    hidden: false,
    photo: './capstone_assets/greta.jpeg',
    alt: 'Greta Thunberg lastfm Photo',
    name: 'Greta Thunberg',
    occupation: 'Global Warming Activist',
    description: 'Young swidish global activist turning stones from local to United nations scenes. ',
  },

  {
    hidden: false,
    photo: './capstone_assets/don.jpeg',
    alt: 'Don Chaedle lastfm Photo',
    name: 'Don Chaedle',
    occupation: 'Captain Planet',
    description: 'Despite of his fame in hollywood, Don is climate change worrior, championing for climate change and anti-global warming and has a record for running successful global warming campaigns',
  },

  {
    hidden: true,
    photo: './capstone_assets/diamond.jpeg',
    alt: 'Richard diamond lastfm Photo',
    name: 'Richard Diamond',
    occupation: 'National Geographic society',
    description: 'Richard is experienced in climate change having worked with national geographic society and having written books. He is a renoun speaker and advocate for climate change',
  },

  {
    hidden: true,
    photo: './capstone_assets/naomi.webp',
    alt: 'naomi kleinlastfm Photo',
    name: 'Naomi Klein',
    occupation: 'Journalist/Author',
    description: 'Naomi is a journalist and one of the best seller according to neyork times.She writes and performs speeches on climate change',
  },

  {
    hidden: true,
    photo: './capstone_assets/nelson.jpeg',
    alt: 'nelson lastfm Photo',
    name: 'Nelson Ongiti',
    occupation: 'Tech student and engineer at microverse',
    description: 'Nelson has champions for solutions that will increase trending product and waste recyling to fuel usage of this product as a strategy to reduce global warming. his articles are trending on linkedin',
  },

  {
    hidden: true,
    photo: './capstone_assets/wallace.jpeg',
    alt: 'David Wallace-Wells lastfm Photo',
    name: 'David Wallace-Wells',
    occupation: 'Writer /climate change speaker',
    description: 'known for his book the unhabitable earth and speaker for climate change,',
  },

];

function menuToggle() {
  document.querySelector('.mobile-nav').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('hide');
}

hamburgerBtn.addEventListener('click', menuToggle);
crossBtn.addEventListener('click', menuToggle);

navLinks.forEach((navItem) => {
  navItem.addEventListener('click', menuToggle);
});

function loadFeaturedSpeakers(arr) {
  arr.forEach((each) => {
    const speaker = document.createElement('div');
    speaker.className = 'speaker flex';
    const speakerImg = document.createElement('img');
    speakerImg.setAttribute('src', each.photo);
    speakerImg.setAttribute('alt', each.alt);
    speaker.appendChild(speakerImg);
    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speakerInfo flex';
    const speakerName = document.createElement('h2');
    speakerName.textContent = each.name;
    speakerInfo.appendChild(speakerName);
    const speakerRank = document.createElement('span');
    speakerRank.textContent = each.occupation;
    speakerInfo.appendChild(speakerRank);
    const separator = document.createElement('hr');
    speakerInfo.appendChild(separator);
    const speakerPara = document.createElement('p');
    speakerPara.textContent = each.description;
    speakerInfo.appendChild(speakerPara);
    speaker.appendChild(speakerInfo);
    document.querySelector('.speakers-feature').appendChild(speaker);
  });
}

function renderSpeakers() {
  document.querySelector('.speakers-feature').innerHTML = '';
  if (visualViewport.width > 768) {
    loadFeaturedSpeakers(djData);
  } else loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === false));
}

renderSpeakers();
window.addEventListener('resize', renderSpeakers);

document.getElementById('moreBtn').addEventListener('click', (e) => {
  loadFeaturedSpeakers(djData.filter((dj) => dj.hidden === true));
  e.target.remove();
});
