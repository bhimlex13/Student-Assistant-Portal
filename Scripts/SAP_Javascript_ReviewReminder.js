function RR_Focusables(dialog) {
    return Array.prototype.filter.call(
        dialog.querySelectorAll("a[href], button:not([disabled])"),
        function (node) {
            return !node.hasAttribute("disabled");
        }
    );
}

function RR_Open() {
    var root = document.getElementById("RR_Reminder");
    var dialog = document.getElementById("RR_Dialog");
    var button = document.getElementById("RR_Acknowledge");
    if (!root || !dialog || !button || !root.hidden) return;
    root.hidden = false;
    document.body.classList.add("RR_Locked");
    button.focus();
}

function RR_Close() {
    var root = document.getElementById("RR_Reminder");
    if (!root || root.hidden) return;
    root.hidden = true;
    document.body.classList.remove("RR_Locked");
}

function RR_Trap_Tab(event) {
    if (event.key !== "Tab") return;
    var dialog = document.getElementById("RR_Dialog");
    var items = RR_Focusables(dialog);
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("RR_Reminder");
    var dialog = document.getElementById("RR_Dialog");
    var button = document.getElementById("RR_Acknowledge");
    if (!root || !dialog || !button) return;
    button.addEventListener("click", RR_Close);
    dialog.addEventListener("keydown", RR_Trap_Tab);
    root.addEventListener("click", function (event) {
        if (event.target === root) event.preventDefault();
    });
    RR_Open();
});
