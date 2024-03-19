// UI Controller
const DOMStrings = {
  addBtn: document.querySelector(".add__btn"),
  taskDescription: document.querySelector(".add__description"),
  taskContainer: document.querySelector(".task__list"),
};

const addListTask = (task) => {
  let html, newHtml, htmlElement;
  // Create the HTML string with placeholder text
  html = `<div class="item clearfix" id="%id%">
                <div class="item__description"> %description% </div>
                <div class="right clearfix">
                    <div class="item__done">
                        <button class="item__done--btn">
                            <i class="ion-ios-checkmark-outline"></i>
                        </button>
                    </div>
                    <div class="item__delete">
                        <button class="item__delete--btn">
                            <i class="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div> `;
  // Replace the placeholder text with some actual data
  newHtml = html.replace("%id%", task.id);
  newHtml = newHtml.replace("%description%", task.description);
  // Insert the HTML into the DOM
  htmlElement = DOMStrings.taskContainer;
  htmlElement.insertAdjacentHTML("beforeend", newHtml);
};

const deleteListTask = (taskId) => {
  const element = document.getElementById(taskId);
  element.parentNode.removeChild(element);
};

const completeListTask = (taskId) => {
  const element = document.getElementById(taskId);
  element.firstElementChild.classList.toggle("item__description__done");
  element.children[1].children[0].children[0].classList.toggle(
    "item__done--btn--done",
  );
};

export { DOMStrings, addListTask, deleteListTask, completeListTask };
