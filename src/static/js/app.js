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