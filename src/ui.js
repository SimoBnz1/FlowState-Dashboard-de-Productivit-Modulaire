import { ajouter, tasks } from "./todo.js";
import { timer } from "./timer.js";

export function form() {
    const sec1 = document.getElementById("sec1");
    const sec2 = document.getElementById("sec2");
    const addBtn = document.getElementById("add");
    const btnAff = document.getElementById("btnAff")
    const sec0 = document.getElementById("sec0")
    const btnTimer = document.getElementById("timer")

    const sec3 = document.getElementById("sec3")
    addBtn.addEventListener("click", () => {
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
        const form = document.getElementById("taskForm");

        form.addEventListener("submit", () => {
            renderTasks();
        });
    });
    btnAff.addEventListener("click", () => {
            sec1.classList.add("hidden")
            sec0.classList.remove("hidden")
            sec2.classList.remove("hidden")
            
        })

    
}
