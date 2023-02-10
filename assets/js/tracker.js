const app = document.getElementById("tracker");

const Form = document.createElement("form");
const Button = document.createElement("button");
const InputBox = document.createElement("input");
const Checked = document.createElement("input");
const RowDiv = document.createElement("div");
const TasksDiv = document.createElement("div");
const CheckedLabel = document.createElement("label");
const InputLabel =document.createElement("label");
const Table = document.createElement("table");

Button.type="submit";
Button.textContent = "Add Goal";
Button.id = "addGoal";

InputLabel.textContent = "Goal: "
InputBox.type = "text"
InputBox.name = "task"
InputBox.required = true;

let goal = {
  task: "",
  checked: false
}
let goals = []

Checked.type = "checkbox";
Checked.name = "checked";
Checked.textContent = "Completed: "
const onChange = (e) => {
  goal = {...goal, [e.target.name]: e.target.value}
}

const addGoal = (goal) => {
  goals.push(goal);
}

const displayGoals = (goals) => {
  
  goals.forEach(goal => {
    const row = document.createElement("tr");
    const data = document.createElement("td");
    data.textContent = goal.task;
    data.addEventListener('click', function(){
      data.classList.toggle = "completed";
    })
    row.appendChild(data);
    Table.appendChild(row);
  })
  app.appendChild(Table);
}
InputBox.onchange = onChange;
Checked.onchange = onChange;

const handleSubmit = (e) => {
  e.preventDefault();
  while(Table.firstChild){
    Table.removeChild(Table.firstChild);
  }
  addGoal(goal);
  displayGoals(goals);
  goal = {
    task: "",
    completed: false
  }
 
}

InputLabel.appendChild(InputBox);
CheckedLabel.appendChild(Checked);
RowDiv.appendChild(InputLabel);
RowDiv.appendChild(CheckedLabel);
RowDiv.appendChild(Button);
Form.appendChild(RowDiv);
Form.onsubmit = handleSubmit;
app.appendChild(Form);
app.appendChild(TasksDiv);