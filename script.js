//your JS code here. If required.
// List of sound names (must match files inside /sounds folder)
const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

// Create the main section
const section = document.createElement("section");
section.id = "buttons";
document.body.appendChild(section);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

// Create audio elements and buttons
sounds.forEach(sound => {
  // Create audio element
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

  // Create button
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    audio.play();
  });

  section.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSounds);

section.appendChild(stopBtn);