const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");

canvas.width = 400;
canvas.height = 300;

/* ===== OUTFITS ===== */
const outfits = ["shirt1.png", "shirt2.png", "shirt3.png"];
let currentOutfitIndex = 0;

const shirtImg = new Image();
shirtImg.src = outfits[currentOutfitIndex];

/* ===== START CAMERA + POSE ===== */
startBtn.onclick = async () => {
  console.log("Start button clicked");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    // REQUIRED for modern browsers
    await video.play();
    console.log("Camera playing");
  } catch (err) {
    alert("Camera error: " + err.message);
    console.error(err);
    return;
  }

  const pose = new Pose({
    locateFile: (file) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
  });

  pose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  pose.onResults(drawResults);

  const camera = new Camera(video, {
    onFrame: async () => {
      await pose.send({ image: video });
    },
    width: 400,
    height: 300,
  });

  camera.start();
};

/* ===== DRAW SHIRT ===== */
function drawResults(results) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!results.poseLandmarks || !shirtImg.complete) return;

  const leftShoulder = results.poseLandmarks[11];
  const rightShoulder = results.poseLandmarks[12];

  const x1 = leftShoulder.x * canvas.width;
  const y1 = leftShoulder.y * canvas.height;
  const x2 = rightShoulder.x * canvas.width;
  const y2 = rightShoulder.y * canvas.height;

  const shoulderWidth = Math.abs(x2 - x1);

  // 🔑 KEEP ORIGINAL IMAGE RATIO
  const imgRatio = shirtImg.naturalWidth / shirtImg.naturalHeight;

  const shirtWidth = shoulderWidth * 2.4;
  const shirtHeight = shirtWidth / imgRatio;

  const centerX = (x1 + x2) / 2;

  // adjust this if needed
  const topY = Math.min(y1, y2) - 200;

  ctx.drawImage(
    shirtImg,
    centerX - shirtWidth / 2,
    topY,
    shirtWidth,
    shirtHeight
  );
}

/* ===== OUTFIT SWITCHING ===== */
function setOutfit(index) {
  currentOutfitIndex = index;
  shirtImg.src = outfits[currentOutfitIndex];
  console.log("Switched to:", shirtImg.src);
}

function nextOutfit() {
  setOutfit((currentOutfitIndex + 1) % outfits.length);
}

function prevOutfit() {
  setOutfit((currentOutfitIndex - 1 + outfits.length) % outfits.length);
}
