import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect backgroud color of the button to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button

  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Check if pressing checkbox disable the button", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // Click in the checkbox and then check if the button was disable

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // Click again in the checkbox and check if the button was enabled

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Disable button, check if the button turns to greys enable it again and check if the button is red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // Disable the button and check if this is grey
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // Enable the button again and check if the button is red;
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Click the button to change the color, disable and check if the color is grey and then enable and check if the color is blue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // Change button color
  fireEvent.click(colorButton);

  // Disable the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  // Check if the color is blue
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letter", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
