export const phonemeToIndex = {
    A: 68,
    B: 62,
    C: 61,
    D: 61,
    E: 64,
    F: 63,
    G: 65,
    H: 67,
    X: -12
};

export function updateLipSync(modelMesh, mouthCues, currentTimeMs) {

    // console.log("with cues:", mouthCues);
    

    if (!modelMesh || mouthCues.length === 0) return;

    // modelMesh.traverse((child) => {
    //     if (!child.isMesh || !child.morphTargetInfluences) return;

    //     child.morphTargetInfluences.fill(0);

    //     for (const cue of mouthCues) {
    //         const shapeIndex = phonemeToIndex[cue.value];
    //         if (shapeIndex === undefined) continue;

    //         const start = cue.start * 1000;
    //         const end = cue.end * 1000;

    //         if (currentTimeMs >= start && currentTimeMs < end) {
    //             child.morphTargetInfluences[shapeIndex] = 0.45;
    //         }
    //     }
    // });

    modelMesh.traverse((child) => {

        if (!child.isMesh || !child.morphTargetInfluences) return;

        // Fade out previous influences instead of resetting
        for (let i = 0; i < child.morphTargetInfluences.length; i++) {
            child.morphTargetInfluences[i] *= 0.6; // smooth fade out
        }

        // Apply current phoneme cues
        for (const cue of mouthCues) {
            const shapeIndex = phonemeToIndex[cue.value];
            if (shapeIndex === undefined) continue;

            const start = cue.start * 1000;
            const end = cue.end * 1000;

            if (currentTimeMs >= start && currentTimeMs < end) {
                // Increase the influence to 0.5 or keep it at the current value if it's already higher
                child.morphTargetInfluences[shapeIndex] = Math.max(
                    child.morphTargetInfluences[shapeIndex],
                    0.5
                );
            }
        }

    });


}