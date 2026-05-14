const { calculateScores } = require("../calculators/calculateScores");

describe("SOLO", () => {
  test("SOLO 5 exact", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 5, 5)).toStrictEqual([
      { id: "0", score: 9 },
      { id: "1", score: -3 },
      { id: "2", score: -3 },
      { id: "3", score: -3 },
    ]);
  });

  test("SOLO 5 1 onderslag", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 5, 4)).toStrictEqual([
      { id: "0", score: -9 },
      { id: "1", score: 3 },
      { id: "2", score: 3 },
      { id: "3", score: 3 },
    ]);
  });

  test("SOLO 5 3 onderslagen", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 5, 2)).toStrictEqual([
      { id: "0", score: -15 },
      { id: "1", score: 5 },
      { id: "2", score: 5 },
      { id: "3", score: 5 },
    ]);
  });

  test("SOLO 5 2 overslagen", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 5, 7)).toStrictEqual([
      { id: "0", score: 15 },
      { id: "1", score: -5 },
      { id: "2", score: -5 },
      { id: "3", score: -5 },
    ]);
  });

  test("SOLO 5 3 overslagen capped at maxScore", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 5, 8)).toStrictEqual([
      { id: "0", score: 18 },
      { id: "1", score: -6 },
      { id: "2", score: -6 },
      { id: "3", score: -6 },
    ]);
  });

  test("SOLO 8 exact (geen puntenOverslagen)", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 8, 8)).toStrictEqual([
      { id: "0", score: 18 },
      { id: "1", score: -6 },
      { id: "2", score: -6 },
      { id: "3", score: -6 },
    ]);
  });

  test("SOLO 8 1 onderslag", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 8, 7)).toStrictEqual([
      { id: "0", score: -18 },
      { id: "1", score: 6 },
      { id: "2", score: 6 },
      { id: "3", score: 6 },
    ]);
  });

  test("SOLO 8 overslag blijft maxScore", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 8, 10)).toStrictEqual([
      { id: "0", score: 18 },
      { id: "1", score: -6 },
      { id: "2", score: -6 },
      { id: "3", score: -6 },
    ]);
  });

  test("SOLO 9 exact", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 9, 9)).toStrictEqual([
      { id: "0", score: 27 },
      { id: "1", score: -9 },
      { id: "2", score: -9 },
      { id: "3", score: -9 },
    ]);
  });

  test("SOLO 9 1 onderslag", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 9, 8)).toStrictEqual([
      { id: "0", score: -27 },
      { id: "1", score: 9 },
      { id: "2", score: 9 },
      { id: "3", score: 9 },
    ]);
  });

  test("SOLO 13 exact", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 13, 13)).toStrictEqual([
      { id: "0", score: 99 },
      { id: "1", score: -33 },
      { id: "2", score: -33 },
      { id: "3", score: -33 },
    ]);
  });

  test("SOLO 13 1 onderslag", () => {
    expect(calculateScores("SOLO", [0], [1, 2, 3], 13, 12)).toStrictEqual([
      { id: "0", score: -99 },
      { id: "1", score: 33 },
      { id: "2", score: 33 },
      { id: "3", score: 33 },
    ]);
  });
});

describe("SAMEN", () => {
  test("SAMEN 8 exact", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 8, 8)).toStrictEqual([
      { id: "0", score: 7 },
      { id: "1", score: 7 },
      { id: "2", score: -7 },
      { id: "3", score: -7 },
    ]);
  });

  test("SAMEN 8 1 onderslag", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 8, 7)).toStrictEqual([
      { id: "0", score: -7 },
      { id: "1", score: -7 },
      { id: "2", score: 7 },
      { id: "3", score: 7 },
    ]);
  });

  test("SAMEN 8 overslag gebruikt score van exact aantal slagen", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 8, 9)).toStrictEqual([
      { id: "0", score: 10 },
      { id: "1", score: 10 },
      { id: "2", score: -10 },
      { id: "3", score: -10 },
    ]);
  });

  test("SAMEN 9 exact", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 9, 9)).toStrictEqual([
      { id: "0", score: 10 },
      { id: "1", score: 10 },
      { id: "2", score: -10 },
      { id: "3", score: -10 },
    ]);
  });

  test("SAMEN 9 2 onderslagen", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 9, 7)).toStrictEqual([
      { id: "0", score: -13 },
      { id: "1", score: -13 },
      { id: "2", score: 13 },
      { id: "3", score: 13 },
    ]);
  });

  test("SAMEN 10 exact", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 10, 10)).toStrictEqual([
      { id: "0", score: 13 },
      { id: "1", score: 13 },
      { id: "2", score: -13 },
      { id: "3", score: -13 },
    ]);
  });

  test("SAMEN 10 2 onderslagen", () => {
    expect(calculateScores("SAMEN", [0, 1], [2, 3], 10, 8)).toStrictEqual([
      { id: "0", score: -16 },
      { id: "1", score: -16 },
      { id: "2", score: 16 },
      { id: "3", score: 16 },
    ]);
  });
});

describe("ABONDANCE (alias voor SOLO)", () => {
  test("ABONDANCE exact", () => {
    expect(calculateScores("ABONDANCE", [0], [1, 2, 3], 5, 5)).toStrictEqual([
      { id: "0", score: 9 },
      { id: "1", score: -3 },
      { id: "2", score: -3 },
      { id: "3", score: -3 },
    ]);
  });

  test("ABONDANCE gefaald", () => {
    expect(calculateScores("ABONDANCE", [0], [1, 2, 3], 5, 4)).toStrictEqual([
      { id: "0", score: -9 },
      { id: "1", score: 3 },
      { id: "2", score: 3 },
      { id: "3", score: 3 },
    ]);
  });
});

describe("SOLO_SLIM (alias voor SOLO)", () => {
  test("SOLO_SLIM exact", () => {
    expect(calculateScores("SOLO_SLIM", [0], [1, 2, 3], 6, 6)).toStrictEqual([
      { id: "0", score: 12 },
      { id: "1", score: -4 },
      { id: "2", score: -4 },
      { id: "3", score: -4 },
    ]);
  });

  test("SOLO_SLIM 2 onderslagen", () => {
    expect(calculateScores("SOLO_SLIM", [0], [1, 2, 3], 6, 4)).toStrictEqual([
      { id: "0", score: -15 },
      { id: "1", score: 5 },
      { id: "2", score: 5 },
      { id: "3", score: 5 },
    ]);
  });
});

describe("KLEINE_MISERIE", () => {
  test("geslaagd (0 slagen)", () => {
    expect(
      calculateScores("KLEINE_MISERIE", [0], [1, 2, 3], 0, 0),
    ).toStrictEqual([
      { id: "0", score: 18 },
      { id: "1", score: -6 },
      { id: "2", score: -6 },
      { id: "3", score: -6 },
    ]);
  });

  test("gefaald (1 slag)", () => {
    expect(
      calculateScores("KLEINE_MISERIE", [0], [1, 2, 3], 0, 1),
    ).toStrictEqual([
      { id: "0", score: -18 },
      { id: "1", score: 6 },
      { id: "2", score: 6 },
      { id: "3", score: 6 },
    ]);
  });
});

describe("GROTE_MISERIE", () => {
  test("geslaagd (0 slagen)", () => {
    expect(
      calculateScores("GROTE_MISERIE", [0], [1, 2, 3], 0, 0),
    ).toStrictEqual([
      { id: "0", score: 36 },
      { id: "1", score: -12 },
      { id: "2", score: -12 },
      { id: "3", score: -12 },
    ]);
  });

  test("gefaald (2 slagen)", () => {
    expect(
      calculateScores("GROTE_MISERIE", [0], [1, 2, 3], 0, 2),
    ).toStrictEqual([
      { id: "0", score: -36 },
      { id: "1", score: 12 },
      { id: "2", score: 12 },
      { id: "3", score: 12 },
    ]);
  });
});

describe("BLOTE_MISERIE", () => {
  test("geslaagd (0 slagen)", () => {
    expect(
      calculateScores("BLOTE_MISERIE", [0], [1, 2, 3], 0, 0),
    ).toStrictEqual([
      { id: "0", score: 60 },
      { id: "1", score: -20 },
      { id: "2", score: -20 },
      { id: "3", score: -20 },
    ]);
  });

  test("gefaald (3 slagen)", () => {
    expect(
      calculateScores("BLOTE_MISERIE", [0], [1, 2, 3], 0, 3),
    ).toStrictEqual([
      { id: "0", score: -60 },
      { id: "1", score: 20 },
      { id: "2", score: 20 },
      { id: "3", score: 20 },
    ]);
  });
});

describe("PICCOLO", () => {
  test("geslaagd (exact 1 slag)", () => {
    expect(calculateScores("PICCOLO", [0], [1, 2, 3], 1, 1)).toStrictEqual([
      { id: "0", score: 24 },
      { id: "1", score: -8 },
      { id: "2", score: -8 },
      { id: "3", score: -8 },
    ]);
  });

  test("gefaald (0 slagen)", () => {
    expect(calculateScores("PICCOLO", [0], [1, 2, 3], 1, 0)).toStrictEqual([
      { id: "0", score: -24 },
      { id: "1", score: 8 },
      { id: "2", score: 8 },
      { id: "3", score: 8 },
    ]);
  });

  test("gefaald (2 slagen)", () => {
    expect(calculateScores("PICCOLO", [0], [1, 2, 3], 1, 2)).toStrictEqual([
      { id: "0", score: -24 },
      { id: "1", score: 8 },
      { id: "2", score: 8 },
      { id: "3", score: 8 },
    ]);
  });
});

describe("TROEL", () => {
  test("geslaagd (9 slagen > 8)", () => {
    expect(calculateScores("TROEL", [0], [1, 2, 3], 0, 9)).toStrictEqual([
      { id: "0", score: 16 },
      { id: "1", score: -16 },
      { id: "2", score: -16 },
      { id: "3", score: -16 },
    ]);
  });

  test("gefaald (8 slagen = goal)", () => {
    expect(calculateScores("TROEL", [0], [1, 2, 3], 0, 8)).toStrictEqual([
      { id: "0", score: -16 },
      { id: "1", score: 16 },
      { id: "2", score: 16 },
      { id: "3", score: 16 },
    ]);
  });

  test("gefaald (7 slagen < goal)", () => {
    expect(calculateScores("TROEL", [0], [1, 2, 3], 0, 7)).toStrictEqual([
      { id: "0", score: -16 },
      { id: "1", score: 16 },
      { id: "2", score: 16 },
      { id: "3", score: 16 },
    ]);
  });
});

describe("TROELA", () => {
  test("geslaagd (10 slagen > 9)", () => {
    expect(calculateScores("TROELA", [0], [1, 2, 3], 0, 10)).toStrictEqual([
      { id: "0", score: 16 },
      { id: "1", score: -16 },
      { id: "2", score: -16 },
      { id: "3", score: -16 },
    ]);
  });

  test("gefaald (9 slagen = goal)", () => {
    expect(calculateScores("TROELA", [0], [1, 2, 3], 0, 9)).toStrictEqual([
      { id: "0", score: -16 },
      { id: "1", score: 16 },
      { id: "2", score: 16 },
      { id: "3", score: 16 },
    ]);
  });
});
