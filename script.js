const tasks_tomorrow = document.getElementById("tasks_tomorrow");
const toTomorrow = document.getElementById("toTomorrow");
const toYesterday = document.getElementById("toYesterday");
const remove = document.getElementById("remove");
const tomorrow = document.getElementById("tomorrow");
const save = document.getElementById("save");
const tasks_today = document.getElementById("tasks_today");
const actual = document.getElementById("actual");
const today = document.getElementById("today");

save.addEventListener("click", function () {
    const input = actual.value.trim();
    if (input !== "") {
        const div = document.createElement("div");
        div.style.padding = "10px";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = input;
        div.appendChild(checkbox);

        const label = document.createElement("label");
        label.for = input;
        label.style.padding = "10px";
        label.innerText = input;
        div.appendChild(label);

        if (today.checked) {
            tasks_today.appendChild(div);
        } else {
            tasks_tomorrow.appendChild(div);
        }
        actual.value = "";
    }
});

toTomorrow.addEventListener("click", function () {
    const checked = tasks_today.querySelectorAll("input:checked");
    checked.forEach((task) => {
        const div = task.parentNode;
        task.checked = false;
        tasks_tomorrow.appendChild(div);
    });
});

toYesterday.addEventListener("click", function () {
    const checked = tasks_tomorrow.querySelectorAll("input:checked");
    checked.forEach((task) => {
        const div = task.parentNode;
        task.checked = false;
        tasks_today.appendChild(div);
    });
});