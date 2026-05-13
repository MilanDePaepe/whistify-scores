const calculators = require("../calculators/calculators");

test("kleine miserie geslaagd", () => {
  const type = "KLEINE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: 18, 1: -6, 2: -6, 3: -6 });
});

test("kleine miserie gefaalt", () => {
  const type = "KLEINE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: -18, 1: 6, 2: 6, 3: 6 });
});

test("grote miserie geslaagd", () => {
  const type = "GROTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: 36, 1: -12, 2: -12, 3: -12 });
});

test("grote miserie gefaalt", () => {
  const type = "GROTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: -36, 1: 12, 2: 12, 3: 12 });
});

test("blote miserie geslaagd", () => {
  const type = "BLOTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: 60, 1: -20, 2: -20, 3: -20 });
});

test("blote miserie gefaalt", () => {
  const type = "BLOTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: -60, 1: 20, 2: 20, 3: 20 });
});

test("piccolo geslaagd", () => {
  const type = "PICCOLO";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: 24, 1: -8, 2: -8, 3: -8 });
});

test("piccolo gefaalt", () => {
  const type = "PICCOLO";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  let result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual({ 0: -24, 1: 8, 2: 8, 3: 8 });
  result = calculators.calculateExact(players, against, 2, type);
  expect(result).toStrictEqual({ 0: -24, 1: 8, 2: 8, 3: 8 });
});
