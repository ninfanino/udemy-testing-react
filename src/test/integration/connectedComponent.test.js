import "jsdom-global/register";
import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from "../../components/App";
import rootReducer from "../../reducers";
import { render, fireEvent } from '@testing-library/react';

const store = createStore(rootReducer);

describe('connected component full app integration', () => {
    it('should add todo item using fireevent', () => {
        const { container, getByTestId, getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const inputElement = getByTestId('add-todo-input');
        fireEvent.change(inputElement, { target: {value: 'buy milk'}});
        fireEvent.click(getByText('Add Todo'));

        const liElement = container.querySelector('li');
        expect(liElement.textContent).toBe('buy milk')

    })
})