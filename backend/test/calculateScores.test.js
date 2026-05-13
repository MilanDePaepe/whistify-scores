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
  expect(result).toStrictEqual({ 0: 9, 1: -3, 2: -3, 3: -3 });
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
  expect(result).toStrictEqual({ 0: -9, 1: 3, 2: 3, 3: 3 });
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
  expect(result).toStrictEqual({ 0: -15, 1: 5, 2: 5, 3: 5 });
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
  expect(result).toStrictEqual({ 0: 15, 1: -5, 2: -5, 3: -5 });
});
