const inputBox = document.getElementById("input-box");
const addButton = document.querySelector(".add-btn");
const listContainer = document.getElementById("list-container");


// ADD BUTTON
addButton.addEventListener("click", function () {

    const taskText = inputBox.value.trim();

    // Ако input-ът е празен, не добавяме нищо
    if (taskText === "") {
        return;
    }

    // Създаваме нов li
    const li = document.createElement("li");

    // Създаваме check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-btn");

    // Създаваме картинката за unchecked
    const checkImage = document.createElement("img");
    checkImage.src = "images/unchecked.png";

    // Поставяме картинката в check button
    checkButton.appendChild(checkImage);


    // Създаваме текста на задачата
    const task = document.createElement("span");
    task.textContent = taskText;


    // Създаваме remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");

    // Създаваме картинката за remove
    const removeImage = document.createElement("img");
    removeImage.src = "images/remove.png";

    // Поставяме картинката в remove button
    removeButton.appendChild(removeImage);

    // Добавяме всичко в li
    li.appendChild(checkButton);
    li.appendChild(task);
    li.appendChild(removeButton);

    // Добавяме li в списъка
    listContainer.appendChild(li);

    // Изчистваме input полето
    inputBox.value = "";
});


// CHECK AND REMOVE
listContainer.addEventListener("click", function (event) {

    // CHECK BUTTON
    const checkButton = event.target.closest(".check-btn");

    if (checkButton) {

        const li = checkButton.parentElement;
        const checkImage = checkButton.querySelector("img");
        const taskText = li.querySelector("span");

        if (li.classList.contains("checked")) {

            // UNCHECK
            li.classList.remove("checked");
            checkImage.src = "images/unchecked.png";
            taskText.classList.remove("completed");

        } 
        else {
            // CHECK
            li.classList.add("checked");
            checkImage.src = "images/checked.png";
            taskText.classList.add("completed");
        }
    }


    // REMOVE BUTTON
    const removeButton = event.target.closest(".remove-btn");

    if (removeButton) {
        const li = removeButton.parentElement;
        li.remove();
    }
});