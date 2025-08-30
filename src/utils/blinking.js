export function Blinking(modelMesh) {
  function doBlink() {
    let blinkProgress = 0;
    let blinkDirection = 1;

    // Generate random max influence value between 0.5 and 1
    const randomMaxValue = Math.random() * 0.5 + 0.5;


    function animateBlink() {
      if (!modelMesh) return;

      modelMesh.traverse((child) => {
        if (child.isMesh && child.morphTargetInfluences) {
          const influence = blinkProgress * randomMaxValue;  // Apply random max value
          child.morphTargetInfluences[5] = influence;   // Left Eye
          child.morphTargetInfluences[34] = influence;  // Right Eye
        }
      });

      // Fast close, slow open
      const speed = blinkDirection === 1 ? 0.5 : 0.1;
      blinkProgress += speed * blinkDirection;

      if (blinkProgress >= 1) {
        blinkProgress = 1;
        blinkDirection = -1; // Start opening
      }

      if (blinkProgress <= 0 && blinkDirection === -1) {
        return; // Blink complete
      }

      requestAnimationFrame(animateBlink);
    }

    animateBlink();
  }

  // Blink every 2s to 6s randomly
  setInterval(() => {
    doBlink();
  }, Math.floor(Math.random() * 7000) + 3000);
}
