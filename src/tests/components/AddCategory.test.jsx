import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Tests in AddCategory component', () => {

    test('Must change the value of the text box ', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'dragon ball' } });

        expect(input.value).toBe('dragon ball');
    });

    test('Must to call onNewCategory if the input have a value', () => {
        const inputValue = 'dragon ball';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');// added aria-label in the form

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        // screen.debug()

        expect(onNewCategory).toHaveBeenCalled();// called the function
        expect(onNewCategory).toHaveBeenCalledTimes(1);// times called
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('not Must to call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);// times called
        expect(onNewCategory).not.toHaveBeenCalled();// called the function
    });

})