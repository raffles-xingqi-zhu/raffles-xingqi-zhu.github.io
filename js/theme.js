(() => {
    "use strict";
    const body = document.body;
    const setLightOnlyTheme = () => {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    };

    // Force light mode ASAP.
    setLightOnlyTheme();
    requestAnimationFrame(() => body.classList.remove("notransition"))

    window.addEventListener("DOMContentLoaded", () => {
        const lamp = document.getElementById("mode");
        if (lamp) {
            lamp.style.display = "none";
        }

        // Blur the content when the menu is open
        const cbox = document.getElementById("menu-trigger");

        if (cbox) {
            cbox.addEventListener("change", function () {
                const area = document.querySelector(".wrapper");
                if (!area) return;
                if (this.checked) return area.classList.add("blurry");
                area.classList.remove("blurry");
            });
        }
    });
})();
