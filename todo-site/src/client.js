import * as superagent from "superagent";

export function get() {

    return new Promise((resolve, reject) => {
        superagent.get("http://localhost:8100/todos")
            .end((error, result) => {
                error ? reject(error) : resolve(result.body);
            });
    });

}

export function add(text) {

    return new Promise((resolve, reject) => {
        superagent.post("http://localhost:8100/todos")
            .send({'text': text})
            .end((error, result) => {
                error ? reject(error) : resolve(result.body);
            });
    });

}

export function toggle(id) {

    return new Promise((resolve, reject) => {
        superagent.patch("http://localhost:8100/todos/" + id)
            .end((error, result) => {
                error ? reject(error) : resolve(result.body);
            });
    });

}
