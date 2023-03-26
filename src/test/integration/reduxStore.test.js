import { createStore } from "redux";
import rootReducer from "../../reducers";
import { addTodo, toggleTodo, toogleTodo} from '../../actions';

describe('redux store integration test', () => {
    let store;
    beforeEach(() => {
        store = createStore(rootReducer);
    })

    it('should add 1 todo', () => {
        store.dispatch(addTodo('buy milk'));
        const todo = store.getState().todos.find((todo) => todo.text === 'buy milk');
        expect(todo.text).toEqual('buy milk');
        expect(todo.completed).toEqual(false);
    });

    it('should toggle 1 todo', () => {
        store.dispatch(addTodo('go shopping'));
        store.dispatch(toggleTodo(1));
        
        const todo = store.getState().todos.find((todo) => todo.id === 1);
        expect(todo.text).toEqual('go shopping');
        expect(todo.completed).toEqual(true);
    });
})