import { ajouter, tasks } from "./todo.js";
import { timer } from "./timer.js";
let btnAff = document.getElementById("btnAff")
let sec0 = document.getElementById("sec0")
let btnTimer = document.getElementById("timer")
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");

let sec3 = document.getElementById("sec3")

export function form() {
    let addBtn = document.getElementById("add");
    addBtn.addEventListener("click", () => {
        sec1.classList.remove("hidden");
        sec1.innerHTML = `
            <div class="flex justify-center items-center mt-10">
                <form id="taskForm" class="bg-white shadow-xl p-6 rounded-2xl w-[400px] space-y-4">
                    
                    <h2 class="text-2xl font-bold text-center">Add New Task</h2>

                    <label>Title</label>
                    <input type="text" id="title" class="w-full border p-2 rounded-lg" required>

                    <label>Categorie</label>
                    <select id="categorie" class="w-full border p-2 rounded-lg">
                        <option value="motivation">motivation</option>
                        <option value="meditation">meditation</option>
                        <option value="high">high</option>
                    </select>

                    <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded-lg">
                        Save Task
                    </button>

                </form>
            </div>
        `;

        ajouter();
        let form = document.getElementById("taskForm");
        form.addEventListener("submit", () => {
            renderTasks();
        });
    });





    function renderTasks() {
        sec2.innerHTML = "";

        tasks.forEach(elm => {
            sec2.innerHTML += `
                <div class="bg-white flex justify-between text-center shadow-md p-4 rounded-xl mt-4">
                    <div>
                        <h4 class="font-bold">${elm.title}</h4>
                        <p>${elm.categorie}</p>
                    </div>
                    <div>
                        <i class="fa-regular fa-clock" id="tache"></i>
                        <p>25 Min</p>
                    </div>
                </div>
            `;
        });
        let icon = document.getElementById("tache");
        icon.addEventListener("click", () => {

            sec3.classList.remove("hidden")
            sec2.classList.add("hidden")

        })


    }
}


btnAff.addEventListener("click", () => {
    sec1.classList.add("hidden")
    sec0.classList.remove("hidden")
    sec2.classList.remove("hidden")
    sec3.classList.add("hidden")

})


btnTimer.addEventListener("click", () => {
    sec0.classList.add("hidden")
    sec2.classList.add("hidden")

    sec3.innerHTML = `
        <section class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="bg-white w-[380px] rounded-3xl shadow-2xl p-8 text-center space-y-6">
            

                <h2 class="text-2xl font-bold text-gray-800">
                    Focus Timer
                </h2>

                <div id="time" class="text-6xl font-extrabold text-lime-700 tracking-widest">
                    <p id="min">0</p>:<p id="suc">0</p>
                </div>

                <div class="flex justify-center gap-4 pt-4">
                    <button id="start" class="px-6 py-3 bg-lime-700 text-white rounded-xl">
                        Start
                    </button>
                    <button id="reset" class="px-6 py-3 bg-lime-700 text-white rounded-xl">
                        reset
                    </button>
                </div>

            </div>
        </section>
    `

    sec3.classList.remove("hidden")

    timer();
});

