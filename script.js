const lyrics = [
  {text: 'Sintang Paaralan', time: 12},
  {text: 'Tanglaw ka ng bayan', time: 15},
  {text: 'Pandayan ng isip ng kabataan', time: 19},
  {text: 'Kami ay dumating na salat sa yaman', time: 24},
  {text: 'Hanap na dunong ay iyong alay', time: 30},
  {text: 'Ang layunin mong makatao', time: 36},
  {text: 'Dinarangal ang Pilipino', time: 42},
  {text: 'Ang iyong aral, diwa, adhikang taglay', time: 47},
  {text: 'PUP, aming gabay', time: 53},
  {text: 'Paaralang dakila', time: 56},
  {text: 'PUP, pinagpala', time: 61.2},
  {text: 'Gagamitin ang karunungan', time: 65.5},
  {text: 'Mula sa iyo, para sa bayan', time: 69},
  {text: 'Ang iyong aral, diwa, adhikang taglay', time: 72},
  {text: 'PUP, aming gabay', time: 75.6},
  {text: 'Paaralang dakila', time: 77.4},
  {text: 'PUP, pinagpala', time: 81},
];

const lyricsContainer = document.getElementById('lyrics');
const audio = document.querySelector('audio');

let currentLine = 0;

const DEFAULT_SCROLL_AMOUNT = 4;

function updateLyrics() {
  for (let i = 0; i < lyrics.length; i++) {
    if (audio.currentTime >= lyrics[i].time && audio.currentTime < (lyrics[i+1]?.time || Infinity)) {
      currentLine = i;
      lyricsContainer.innerHTML = lyrics[i].text;
      lyricsContainer.setAttribute('scrollamount', (i + 1) * DEFAULT_SCROLL_AMOUNT);
      break;
    }
  }
}

audio.addEventListener('timeupdate', updateLyrics);
