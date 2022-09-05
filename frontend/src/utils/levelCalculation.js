const LEVEL_BAR = 1000;

const levelCalc = (experience) => Math.floor(experience / LEVEL_BAR);

export { levelCalc };
