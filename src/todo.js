export const tasks = [];

export function ajouter() {
    const form = document.getElementById("taskForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const task = {
            id: tasks.length + 1,
            title: document.getElementById("title").value,
            categorie: document.getElementById("categorie").value
        };
        tasks.push(task);
        form.reset();
        document.getElementById("sec1").innerHTML = "";
    });
}
