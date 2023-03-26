import todos from "./todos";

describe("Todos reducer UT", () => {
    it("should return an empty array when initial state and action is undefined", () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    it("should update initial state by adding 1 todo item to the list", () => {
        const addTodoAction = {
            type: 'ADD_TODO',
            id: 1,
            text: "buy milk"
        }
        expect(todos([], addTodoAction)).toEqual([{
            completed: false,
            id: 1,
            text: "buy milk"
        }])
    });

    it("should update initial state by adding the second todo item", () => {
        const initialState = [{
            completed: false,
            id: 1,
            text: "buy milk"
        }];
        const addTodoAction = {
            type: 'ADD_TODO',
            id: 2,
            text: "go shopping"
        }
        expect(todos(initialState, addTodoAction)).toEqual([{
            completed: false,
            id: 1,
            text: "buy milk"
        }, {
            completed: false,
            id: 2,
            text: "go shopping"
        }])
    });

    it("should toogle incompleted todo to completed", () => {
        const initialState = [{
            completed: false,
            id: 1,
            text: "buy milk"
        }];
        const toggleTodoAction = {
            type: 'TOGGLE_TODO',
            id: 1
        }
        expect(todos(initialState, toggleTodoAction)).toEqual([{
            completed: true,
            id: 1,
            text: "buy milk"
        }])
    });
})