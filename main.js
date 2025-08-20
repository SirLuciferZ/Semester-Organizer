
let groupCard = ''

let cardAll = JSON.parse(localStorage.getItem("cards"))
const cardInfo = []

if (!cardAll) {
    cardAll = [];
}

let infoCard = ''
console.log(cardAll)

// document.body.addEventListener("click", e => {
//     if (e.target.classList.contains("add-new-lesson")) {
//         try {
//             console.log("yes")
//             showAddLesson();
//         } catch (err) {
//             console.error('showAddLesson crashed:', err);
//         }
//     }
// });

document.body.addEventListener("click", e => {
    if (e.target.classList.contains("add-new-lesson")) {
        showAddLesson();

    }
});


renderHtml()



document.querySelectorAll(".add-new-lesson").forEach((add) => {
    add.addEventListener("click", () => {
        showAddLesson()
        selectLesson(event)
    })
})

document.querySelector(".back-blur").addEventListener("click", showAddLesson)
document.querySelector(".js-close-add-card").addEventListener("click", showAddLesson)

document.querySelector(".submit-button").addEventListener("click", addNewClass)


document.querySelector('.card-container').addEventListener('click', (e) => {
    // Delete lesson
    if (e.target.classList.contains('delete-button')) {
        const cardId = Number(e.target.dataset.cardId);
        const infoIndex = Number(e.target.dataset.infoIndex);
        deleteLesson(cardId, infoIndex);
    }

    // Delete whole card
    // if (e.target.classList.contains('delete-card')) {
    //     const cardId = Number(e.target.dataset.cardId);
    //     deleteCard(cardId);
    // }

    const delWrap = e.target.closest('.delete-container');
    if (delWrap) {
        const cardId = Number(delWrap.querySelector('.delete-card').dataset.cardId);
        deleteCard(cardId);
    }
});






let id = JSON.parse(localStorage.getItem("id"))
if (!id) {
    id = 0
}


function deleteLesson(cardId, infoIndex) {
    const cardObj = cardAll.find(c => c.id === cardId);
    if (!cardObj) return;

    // Remove that lesson
    cardObj.info.splice(infoIndex, 1);

    saveToStorage();
    renderHtml(); // Will rebuild cards + lessons
}

function deleteCard(cardId) {
    const index = cardAll.findIndex(c => c.id === cardId);
    if (index !== -1) {
        cardAll.splice(index, 1);
        saveToStorage();
        renderHtml();
    }
}



function addNewClass() {
    const className = document.querySelector(".class-name-enter").value
    const classNumber = document.querySelector(".class-num").value
    id += 1
    cardAll.push({ id: id, lesson: className, number: classNumber, info: [] })
    renderHtml()
    saveToStorage()
    localStorage.setItem("id", JSON.stringify(id))
    console.log(cardAll)
    document.querySelectorAll(".empty").forEach(input => input.value = "");
}

let idSelected;
let lessons;
function selectLesson(event) {
    if (!event || !event.target) {
        console.error("selectLesson called without a proper event");
        return;
    }
    const container = event.target.closest(".class-card");
    if (!container) {
        console.error("No .class-card found for clicked element");
        return;
    }
    idSelected = Number(container.querySelector(".add-new-lesson").dataset.id);
    lessons = container.querySelector(".lessons");
    console.log(idSelected)
}


function showAddLesson() {
    const popup = document.querySelector(".add-task-popup");
    const glassBack = document.querySelector(".back-blur");

    if (!popup || !glassBack) {
        console.warn("Popup or backdrop not found");
        return;
    }

    const active = popup.classList.toggle("active");
    glassBack.style.opacity = active ? 1 : 0;
    popup.style.opacity = active ? 1 : 0;
    popup.style.top = active ? '50%' : '40%';
    popup.style.pointerEvents = active ? "all" : "none";
    glassBack.style.pointerEvents = active ? "all" : "none";
}

document.querySelector(".add-submit").addEventListener("click", addNewLesson)

// document.body.addEventListener('click', e => {
//     if (e.target.classList.contains('add-submit')) {
//         addNewLesson(id);
//     }
// });

document.querySelector(".add-submit").addEventListener("click", showAddLesson)

function addNewLesson() {
    const code = document.querySelector(".class-code").value
    const masterName = document.querySelector(".master-name").value
    let day = document.querySelector(".class-day").value
    const startTime = document.querySelector(".start-time").value
    const endTime = document.querySelector(".end-time").value

    if (day == 0) {
        day = "شنبه"
    }
    else if (day == 1) {
        day = "یکشنبه"
    }
    else if (day == 2) {
        day = "دوشنبه"
    }
    else if (day == 3) {
        day = "سه شنبه"
    }
    else if (day == 4) {
        day = "چهارشنبه"
    }
    else if (day == 5) {
        day = "پنج شنبه"
    }
    else if (day == 6) {
        day = "جمعه"
    }




    const obj = cardAll.find(item => item.id === idSelected);
    if (obj) {
        // Add or update the info property
        obj.info.push({ code: code, masterName: masterName, day: day, startTime: startTime, endTime: endTime })
        console.log('Updated array:', cardAll);
    } else {
        console.warn('No object found for id:', idSelected);
    }


    // const lessons = container.querySelector(".lessons");
    renderInfoHtml()
    saveToStorage()
    document.querySelectorAll(".empty").forEach(input => input.value = "");
}


function renderInfoHtml() {
    // For each card object
    cardAll.forEach((item) => {
        // Build only this card's lessons
        let infoHtml = '';
        if (Array.isArray(item.info)) {
            item.info.forEach((lesson, index) => {
                infoHtml += `
    <div class="lesson-card">
      <p>کد ارائه : <br><span>${lesson.code}</span></p>
      <p>نام استاد : <br><span>${lesson.masterName}</span></p>
      <div class="lesson-time">
        <p>${lesson.day}<br> ${lesson.startTime} تا ${lesson.endTime}</p>
      </div>
      <p>مدت کلاس : <br><span>0:30</span></p>
      <img 
        class="delete-button" 
        src="./icons/delete.svg" 
        alt="حذف" 
        data-card-id="${item.id}" 
        data-info-index="${index}"
      >
    </div>
  `;

            });
        }

        // Find THIS card's .lessons container in the DOM
        const cardEl = document.querySelector(
            `.class-card .add-new-lesson[data-id="${item.id}"]`
        )?.closest('.class-card');

        if (cardEl) {
            const lessonsContainer = cardEl.querySelector('.lessons');
            if (lessonsContainer) {
                lessonsContainer.innerHTML = infoHtml;
            }
        }
    });
}


function renderHtml() {
    let allHtml = '';
    cardAll.forEach((item) => {
        allHtml += `
      <div class="class-card">
        <div class="card-info">
          <p>${item.lesson}</p>
          <p>تعداد واحد : <span>${item.number}</span></p>
          <p class="add-new-lesson" data-id="${item.id}">اضافه کردن کلاس</p>
            <div class="delete-container">
                      <img 
            class="delete-card" 
            src="./icons/delete.svg" 
            alt="حذف کارت" 
            id="delete-card-id"
            data-card-id="${item.id}"
          >
          <label for="delete-card-id">حذف درس</label>
          </div>
        </div>
        <div class="lessons"></div>
      </div>
    `;
    });

    document.querySelector('.card-container').innerHTML = allHtml;

    // Click listeners for adding lessons
    document.querySelectorAll('.add-new-lesson').forEach((add) => {
        add.addEventListener('click', (event) => {
            showAddLesson();
            selectLesson(event);
        });
    });

    renderInfoHtml();
    saveToStorage();
}




function saveToStorage() {
    localStorage.setItem("cards", JSON.stringify(cardAll))
}