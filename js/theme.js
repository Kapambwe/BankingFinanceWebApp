// Theme management JavaScript functions

window.applyTheme = function (cssVariables) {
    const root = document.documentElement;
    
    for (const [key, value] of Object.entries(cssVariables)) {
        root.style.setProperty(key, value);
    }
    
    console.log('Theme applied successfully');
};

window.getComputedThemeVariable = function (variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
};

window.initializeTheme = function () {
    console.log('Theme system initialized');
};
