let addBtn = document.querySelector("#add");
let tasklist = document.querySelector("#tasklist")
let taskpanel = document.querySelector("#taskpanel")
let submit = document.querySelector("#submit");
let cancel = document.querySelector("#cancel");


//task add
let task = document.querySelector("#newtask");
let time = document.querySelector("#newtime");
const clearTaskpanel = ()=>{
    taskpanel.style.bottom = "-100%";
};

addBtn.addEventListener("click", ()=>{
    taskpanel.style.bottom = "2vw";
});

cancel.addEventListener("click", clearTaskpanel);

submit.addEventListener("click", ()=>{
    clearTaskpanel();
    if(task.value === "")
    console.log("task is empty");
else{
    let newTask = document.createElement('div');
    newTask.className = "task";
    newTask.innerHTML = `<input type="checkbox" name="task">
    <div class="taskdets">
    <h4>${task.value}</h4>
    <div class="time">${time.value}</div>
    </div>`;
    tasklist.appendChild(newTask);
    updateCheckCount();
    taskItemEventListener(newTask);
}
});


//task complete
let complete = document.querySelector("#complete");
let tasklistChild = tasklist.children;
let checkCount;

const updateCheckCount = ()=>{
    checkCount = document.querySelectorAll("#tasklist .task input[type = checkbox]:checked").length
    complete.innerHTML = `<h2> ${checkCount}/${tasklistChild.length} Completed </h2>`
};
setInterval(updateCheckCount, 200);


// task delete
let taskItems = document.querySelectorAll("#tasklist .task");
let pressTimer;
let colorChangeInterval;
let colorChangeDuration = 1600;

function handleStartEvent(event, taskItem) {
    clearTimeout(pressTimer);
    clearInterval(colorChangeInterval);

    let startAlpha = 0;
    colorChangeInterval = setInterval(() => {
        startAlpha += 0.02;
        if(startAlpha > 0.2)
        {
        taskItem.querySelector("input[type = checkbox]").style.backgroundColor = `rgba(220, 20, 60, ${startAlpha})`;
        taskItem.querySelector("input[type = checkbox]").style.border = `3px solid rgba(220, 20, 60, ${startAlpha})`;
        }
        
    }, colorChangeDuration / 50);

    pressTimer = setTimeout(() => {
        taskItem.remove();
    }, colorChangeDuration);
}

function handleEndEvent(taskItem) {
    clearTimeout(pressTimer);
    clearInterval(colorChangeInterval);

    taskItem.querySelector("input[type = checkbox]").style.backgroundColor = "rgb(72, 228, 220)";
    taskItem.querySelector("input[type = checkbox]").style.border = `3px solid rgb(72, 228, 220)`;
}

function taskItemEventListener(taskItem){
    taskItem.addEventListener('mousedown', event => handleStartEvent(event, taskItem));
    taskItem.addEventListener('mouseup', () => handleEndEvent(taskItem));

    taskItem.addEventListener('touchstart', event => handleStartEvent(event, taskItem));
    taskItem.addEventListener('touchend', () => handleEndEvent(taskItem));
}

taskItems.forEach(taskItem => {
    taskItemEventListener(taskItem);
});

// welcome page
let welcome = document.querySelector("#welcomepage");
let getStart = document.querySelector("#getStart")
let userName;

getStart.addEventListener("click", ()=>{
    userName = document.querySelector("#inputBox input").value;
        welcome.style.left = "-200%"
        document.querySelector("#info h2").textContent = `Hey ${userName} Your's`;
    })



// setting panel theme
// info panel privacy policy

// app icon

let icon = document.querySelector("#cover");
let main = document.querySelector("#main");

icon.addEventListener("click", ()=>{
    icon.style.display = "none";
    main.style.scale = "1";
})