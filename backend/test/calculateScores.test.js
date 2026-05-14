const calculators = require("../calculators/calculateScores");

test("solo 5 geslaagd", () => {
  const type = "SOLO";
  const players = [0];
  const against = [1, 2, 3];
  const target = 5;
  const tricks = 5;
  const result = calculators.calculateScores(
    type,
    players,
    against,
    target,
    tricks,
  );
  expect(result).toStrictEqual([
    { id: "0", score: 9 },
    { id: "1", score: -3 },
    { id: "2", score: -3 },
    { id: "3", score: -3 },
  ]);
});

test("solo 5 gefaalt", () => {
  const type = "SOLO";
  const players = [0];
  const against = [1, 2, 3];
  const target = 5;
  const tricks = 4;
  const result = calculators.calculateScores(
    type,
    players,
    against,
    target,
    tricks,
  );
  expect(result).toStrictEqual([
    { id: "0", score: -9 },
    { id: "1", score: 3 },
    { id: "2", score: 3 },
    { id: "3", score: 3 },
  ]);
});

test("solo 5 2 onderslagen", () => {
  const type = "SOLO";
  const players = [0];
  const against = [1, 2, 3];
  const target = 5;
  const tricks = 2;
  const result = calculators.calculateScores(
    type,
    players,
    against,
    target,
    tricks,
  );
  expect(result).toStrictEqual([
    { id: "0", score: -15 },
    { id: "1", score: 5 },
    { id: "2", score: 5 },
    { id: "3", score: 5 },
  ]);
});

test("solo 5 2 overslagen", () => {
  const type = "SOLO";
  const players = [0];
  const against = [1, 2, 3];
  const target = 5;
  const tricks = 7;
  const result = calculators.calculateScores(
    type,
    players,
    against,
    target,
    tricks,
  );
  expect(result).toStrictEqual([
    { id: "0", score: 15 },
    { id: "1", score: -5 },
    { id: "2", score: -5 },
    { id: "3", score: -5 },
  ]);
});
