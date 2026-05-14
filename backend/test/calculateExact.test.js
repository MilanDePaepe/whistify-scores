const calculators = require("../calculators/calculators");

test("kleine miserie geslaagd", () => {
  const type = "KLEINE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: 18 },
    { id: "1", score: -6 },
    { id: "2", score: -6 },
    { id: "3", score: -6 },
  ]);
});

test("kleine miserie gefaalt", () => {
  const type = "KLEINE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: -18 },
    { id: "1", score: 6 },
    { id: "2", score: 6 },
    { id: "3", score: 6 },
  ]);
});

test("grote miserie geslaagd", () => {
  const type = "GROTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: 36 },
    { id: "1", score: -12 },
    { id: "2", score: -12 },
    { id: "3", score: -12 },
  ]);
});

test("grote miserie gefaalt", () => {
  const type = "GROTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: -36 },
    { id: "1", score: 12 },
    { id: "2", score: 12 },
    { id: "3", score: 12 },
  ]);
});

test("blote miserie geslaagd", () => {
  const type = "BLOTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: 60 },
    { id: "1", score: -20 },
    { id: "2", score: -20 },
    { id: "3", score: -20 },
  ]);
});

test("blote miserie gefaalt", () => {
  const type = "BLOTE_MISERIE";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: -60 },
    { id: "1", score: 20 },
    { id: "2", score: 20 },
    { id: "3", score: 20 },
  ]);
});

test("piccolo geslaagd", () => {
  const type = "PICCOLO";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 1;
  const result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: 24 },
    { id: "1", score: -8 },
    { id: "2", score: -8 },
    { id: "3", score: -8 },
  ]);
});

test("piccolo gefaalt", () => {
  const type = "PICCOLO";
  const players = [0];
  const against = [1, 2, 3];
  const tricks = 0;
  let result = calculators.calculateExact(players, against, tricks, type);
  expect(result).toStrictEqual([
    { id: "0", score: -24 },
    { id: "1", score: 8 },
    { id: "2", score: 8 },
    { id: "3", score: 8 },
  ]);
  result = calculators.calculateExact(players, against, 2, type);
  expect(result).toStrictEqual([
    { id: "0", score: -24 },
    { id: "1", score: 8 },
    { id: "2", score: 8 },
    { id: "3", score: 8 },
  ]);
});
