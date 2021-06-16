const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

if (marqueeContent) {
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
}

var tds = document.querySelectorAll("udate");
for (i = 0; i < tds.length; ++i) {
    tds[i].innerHTML = tds[i].innerHTML.replace(/&nbsp;/g, " ");
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then(function () {
            console.log("ServiceWorker has been registered!");
        })
        .catch(console.error);
}

var locations = [
    ["Tampa", 27.96047, -82.44563, 4],
    ["Clearwater", 27.89531, -82.71164, 5],
    ["Palm Harbor", 28.09283, -82.77241, 3],
    ["Holiday", 28.18833, -82.73232, 2],
    ["Northwest", 30.51894, -86.48097, 1]
];

const emailForm = document.querySelector(".contactform");

if (emailForm) {
    emailForm.addEventListener("submit", (e) => {
        console.log("inside");
        const startTime = performance.now();
        e.preventDefault();
        processForm(emailForm);
        console.log("done");
        const duration = performance.now() - startTime;
        console.log(`someMethodIThinkMightBeSlow took ${duration}ms`);
    });
}

const processForm = (form) => {
    const data = new FormData(form);
    console.log(data);
    data.append("form-name", "contactform");
    fetch("/", {
        method: "POST",
        body: data
    })
        .then((emailForm.innerHTML = "Thank you for your submission! Someone from our firm will be in contact with you soon."))
        .catch((emailForm.innerHTML = "There was a problem with your submission.  Please refresh the page and try again - sorry!"));
};
