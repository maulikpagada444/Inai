export function expressionController(modelMesh) {
  if (!modelMesh) return;

  const sharpKeyMap = {
    "brrow_upper_up.L": 14,
    "brrow_upper_up.R": 43,
    "brrow_upper_down.L": 15,
    "brrow_upper_down.R": 44,
    "brow_mid_up.L": 16,
    "brow_mid_up.R": 45,
    "brow_mid_down.L": 17,
    "brow_mid_down.R": 46,
    "brow_inner.L":13,
    "brow_inner.R":42,
    "crush.L":8,
    "crush.R":37,
    "squint.L":9, 
    "squint.R":38,
    "lip_smile.L":23,
    "lip_smile.R":52,
    "cheek_puff_in.L":32,
    "cheek_puff_in.R":60,
    "nose_crunch.L":10,
    "nose_crunch.R":39,
    "nostril_out.L":11,
    "nostril_out.R":40
  };

  function clamp(value, min = 0, max = 0.3) {
    return Math.min(Math.max(value, min), max);
  }

  function applyExpressions(expression) {
    modelMesh.traverse((child) => {
      if (child.isMesh && child.morphTargetInfluences) {
        for (const [key, value] of Object.entries(expression)) {
          const index = sharpKeyMap[key];
          if (index !== undefined) {
            child.morphTargetInfluences[index] = value;
          } else {
            console.warn(`❌ Unknown shape key: ${key}`);
          }
        }
      }
    });
  }

  const expressions = [
    "brow_mid_up",
    "brrow_upper_up",
    "brrow_upper_down",
    "brow_mid_down",
    "brow_inner",
    "squint",
    "crush",
    "nose_crunch",
    // "lip_smile",
    // "cheek_puff_in",
    "nostril_out",
  ];

  const baseValues = {};
  expressions.forEach(expr => {
    baseValues[expr] = +(Math.random() * (0.8 - 0.2) + 0.2).toFixed(2);
  });

  setInterval(() => {
    const expression = {};
    expressions.forEach(expr => {
      const variation = +(Math.random() * 0.1 - 0.05).toFixed(2);
      const newValue = clamp(+(baseValues[expr] + variation).toFixed(2));
      expression[`${expr}.L`] = newValue;
      expression[`${expr}.R`] = newValue;
      baseValues[expr] = newValue;
    });
    applyExpressions(expression);
  }, 100);
}
