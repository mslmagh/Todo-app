export class Model {
    user;
    items;
    constructor() {
        // title = 'todo-app';
        // name = 'Muslum Agah'
        this.user = 'Muslum Agah'
        this.items = [
            new TodoItem('Kahvaltı yap', false),
            new TodoItem('Ders çalış', false),
            new TodoItem('Spor yap', false),
            new TodoItem('Kitap oku', false)
        ]
    }
}
export class TodoItem {
    description;
    action;
    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}