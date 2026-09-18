let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return null;
    }

    audioContext = new AudioContext();
  }

  return audioContext;
}

function playTone(
  frequency,
  duration,
  type = "sine",
  volume = 0.18
) {
  try {
    const context = getAudioContext();

    if (!context) {
      return;
    }

    const play = () => {
      const oscillator =
        context.createOscillator();

      const gain =
        context.createGain();

      oscillator.type = type;

      oscillator.frequency.setValueAtTime(
        frequency,
        context.currentTime
      );

      gain.gain.setValueAtTime(
        0.0001,
        context.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        volume,
        context.currentTime + 0.01
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + duration
      );

      oscillator.connect(gain);
      gain.connect(context.destination);

      oscillator.start(context.currentTime);

      oscillator.stop(
        context.currentTime + duration + 0.02
      );
    };

    if (context.state === "suspended") {
      context.resume().then(play);
    } else {
      play();
    }
  } catch (error) {
    console.log(
      "Audio error:",
      error
    );
  }
}


/* CLICK */

export function playClickSound() {
  playTone(
    600,
    0.1,
    "sine",
    0.2
  );
}


/* SUCCESS */

export function playSuccessSound() {
  playTone(
    660,
    0.12,
    "sine",
    0.2
  );

  setTimeout(() => {
    playTone(
      880,
      0.18,
      "sine",
      0.2
    );
  }, 120);
}


/* WRONG */

export function playWrongSound() {
  playTone(
    220,
    0.2,
    "triangle",
    0.2
  );
}


/* COFFEE */

export function playCoffeeSound() {
  playTone(
    420,
    0.1,
    "sine",
    0.18
  );

  setTimeout(() => {
    playTone(
      620,
      0.15,
      "sine",
      0.18
    );
  }, 100);
}


/* COMPLETE */

export function playCompleteSound() {
  playTone(
    523,
    0.12,
    "sine",
    0.2
  );

  setTimeout(() => {
    playTone(
      659,
      0.12,
      "sine",
      0.2
    );
  }, 130);

  setTimeout(() => {
    playTone(
      784,
      0.2,
      "sine",
      0.2
    );
  }, 260);
}