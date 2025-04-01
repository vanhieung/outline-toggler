chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.id) return;

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleOutline
    });
});

function toggleOutline() {
    const styleId = "outline-toggler-style";
    let styleElement = document.getElementById(styleId);

    if (styleElement) {
        styleElement.remove();
    } else {
        let style = document.createElement("style");
        style.id = styleId;
        style.textContent = `* { outline: 1px solid blue !important; }`;
        document.head.appendChild(style);
    }
}
