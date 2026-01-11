// File download helper
window.downloadFile = function (fileName, contentType, base64Content) {
    const linkSource = `data:${contentType};base64,${base64Content}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
