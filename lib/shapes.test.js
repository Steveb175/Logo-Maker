const { Triangle, Circle, Square } = require("./shapes");

const answer = { shapeColor: "blue" }; // blue test color

// Triangle test
test("Triangle renders successfully", () => {
  const triangle = new Triangle();
  triangle.setColor(answer.shapeColor);
  expect(triangle.render()).toEqual(
    `<polygon points="150, 18 244, 182 56, 182" fill="${answer.shapeColor}" />`
  );
});

// Circle test
test("Circle renders successfully", () => {
  const circle = new Circle();
  circle.setColor(answer.shapeColor);
  expect(circle.render()).toEqual(
    `<circle cx="150" cy="100" r="80" fill="${answer.shapeColor}" />`
  );
});

// Square test
test("Square renders successfully", () => {
  const square = new Square();
  square.setColor(answer.shapeColor);
  expect(square.render()).toEqual(
    `<rect x="56" y="18" width="188" height="164" fill="${answer.shapeColor}" />`
  );
});
