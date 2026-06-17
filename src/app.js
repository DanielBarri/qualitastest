const onxrloaded = () => {
    XR8.XrController.configure({
        imageTargetData: [
            require("../image-targets/codex.json"),
            require("../image-targets/Qualibot.json"),
        ],
    });
};
window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
