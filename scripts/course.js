const courses = [
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 2,
        completed: true,
        category: "WDD"
    },

    {
        code: "WDD 131",
        name: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true,
        category: "WDD"
    },

    {
        code: "WDD 231",
        name: "Frontend Development I",
        credits: 2,
        completed: false,
        category: "WDD"
    },

    {
        code: "CSE 110",
        name: "Introduction to Programming",
        credits: 2,
        completed: true,
        category: "CSE"
    },

    {
        code: "CSE 210",
        name: "Programming with Classes",
        credits: 2,
        completed: true,
        category: "CSE"
    }
]

const container = document.getElementById('coursesContainer');
const totalCredits = document.getElementById('totalCredits');
const creditsEarned = document.getElementById('creditsEarned');

function displayCourses(filteredCourses) {
    container.innerHTML = "";

    let total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    let earned = filteredCourses.filter(course => course.completed).reduce((sum, course) => sum + course.credits, 0);
    
    filteredCourses.forEach(course => {
        let div = document.createElement('div');
        div.classList.add('course');
        if (course.completed) div.classList.add('completed');

        div.innerHTML = `<strong>${course.code}</strong><br>${course.name}`
        container.appendChild(div);
    });

    totalCredits.textContent = `The total credits for courses listed above is ${total}`;
    creditsEarned.textContent = `Credits earned (${earned})`
}

displayCourses(courses)

document.getElementById('all').addEventListener('click', () => displayCourses(courses));
document.getElementById('wdd').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.category === "WDD"))
});
document.getElementById('cse').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.category === "CSE"))
});

