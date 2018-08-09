class GreetingService {
    greet(name) {
        return `Hello ${name}`;
    }
}

const greetingService = new GreetingService();

let element = document.getElementById("main");
element.innerHTML = greetingService.greet("Manjula");