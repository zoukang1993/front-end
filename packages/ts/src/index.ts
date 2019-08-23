// import { name } from './source';

class Queue<T> {
    private data: T[] = [];

    public push(item: T): void {
        this.data.push(item);
    }

    public pop = (): T | undefined => this.data.shift();
}

const queue = new Queue<number>();
queue.push(1);


function printUser(user: User): void {
    console.log(user.name);
}

printUser({
    name: 'names',
    age: 22,
    leaderFlag: true,
    sex: 'man',
});
