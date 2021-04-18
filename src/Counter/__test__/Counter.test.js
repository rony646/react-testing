import React from 'react';
import Counter from '../Counter'
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

test('header renders with correct text', () => {
    const headerElement = getByTestId("header");

    expect(headerElement.textContent).toBe("My Counter");
})

test("counter initially starts with text of 0", () => {
    const counterElement = getByTestId("counter");

    expect(counterElement.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
    const inputElement = getByTestId("input");

    expect(inputElement.value).toBe("1");
});

test("add button renders with +", () => {
    const addButton = getByTestId("add-btn");

    expect(addButton.textContent).toBe("+");
});

test("subtract button renders with -", () => {
    const subButton = getByTestId("sub-btn");

    expect(subButton.textContent).toBe("-");
});

test("change value of input works correctly", () => {
    const inputElement = getByTestId("input");

    expect(inputElement.value).toBe("1");

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    expect(inputElement.value).toBe("5");
});

test("click on plus btn adds 1 to counter", () => {
    const btnElement = getByTestId("add-btn");
    const counterElement = getByTestId("counter");

    expect(counterElement.textContent).toBe("0");

    fireEvent.click(btnElement)

    expect(counterElement.textContent).toBe("1");
});

test("click on subtract btn subtracts 1 from counter", () => {
    const btnElement = getByTestId("sub-btn");
    const counterElement = getByTestId("counter");

    expect(counterElement.textContent).toBe("0");

    fireEvent.click(btnElement)

    expect(counterElement.textContent).toBe("-1");
});

test("changing input value then clicking on add button", () => {
    const btnElement = getByTestId("add-btn");
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(btnElement)

    expect(counterElement.textContent).toBe("5");
});

test("changing input value then clicking on subtract button", () => {
    const btnElement = getByTestId("sub-btn");
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    }) 

    fireEvent.click(btnElement)

    expect(counterElement.textContent).toBe("-5");
});

test("counter contains correct className", () => {
    const counterElement = getByTestId("counter");
    const addBtnElement = getByTestId("add-btn");
    const subBtnElement = getByTestId("sub-btn");
    const inputElement = getByTestId("input");

    expect(counterElement.className).toBe("")

    fireEvent.change(inputElement, {
        target: {
            value: "100"
        }
    })

    fireEvent.click(addBtnElement);
    
    expect(counterElement).toHaveClass("green");

    fireEvent.click(subBtnElement);
    fireEvent.click(subBtnElement);

    expect(counterElement).toHaveClass("red");
})