const onxrloaded = () => {
    XR8.XrController.configure({
        imageTargetData: [require("../image-targets/codex.json")],
    });
};
window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
