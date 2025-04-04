document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded Successfully!");

    const downloadCvButton = document.querySelector(".download-cv-btn");

    if (downloadCvButton) {
        downloadCvButton.addEventListener("click", function(e) {
            e.preventDefault();

            const link = document.createElement("a");
            link.href = "cv.html";
            link.download = "Calvin Otieno CV.html";

            // Append to a more stable element (document.documentElement)
            document.documentElement.appendChild(link);

            // Use a try-catch block for more robust error handling
            try {
                link.dispatchEvent(new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                }));
            } catch (e) {
                console.error("Click event dispatch error:", e);
                // Fallback (less reliable)
                link.click();
            }

            document.documentElement.removeChild(link);
        });
    } else {
        console.error("Download CV button not found!");
    }
});