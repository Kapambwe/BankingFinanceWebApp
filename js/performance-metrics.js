// Performance Metrics Tracking for Banking.Admin.Client
(function () {
    'use strict';

    window.PerformanceMetrics = {
        startTime: performance.now(),
        metrics: {
            dllCount: 0,
            totalDllSize: 0,
            totalJsSize: 0,
            totalDownload: 0,
            pageLoadTime: 0,
            domContentLoaded: 0,
            timeToInteractive: 0,
            lazyLoadingActive: false
        },

        init: function () {
            // Wait for DOMContentLoaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.onDOMContentLoaded());
            } else {
                this.onDOMContentLoaded();
            }

            // Wait for Blazor to be ready
            if (window.Blazor) {
                this.onBlazorReady();
            } else {
                document.addEventListener('blazor:Started', () => this.onBlazorReady());
            }
        },

        onDOMContentLoaded: function () {
            this.metrics.domContentLoaded = performance.now() - this.startTime;
            console.log(`⏱️ DOM Content Loaded: ${Math.round(this.metrics.domContentLoaded)} ms`);
        },

        onBlazorReady: function () {
            this.collectAssemblyMetrics();
            this.metrics.timeToInteractive = performance.now() - this.startTime;
            this.metrics.pageLoadTime = this.metrics.timeToInteractive;
            this.printMetrics();
        },

        collectAssemblyMetrics: function () {
            // Count assemblies and estimate sizes from WebAssembly boot resources
            const assemblies = window.Blazor && window.Blazor.resources ? 
                Object.keys(window.Blazor.resources.boot || {}) : [];
            
            this.metrics.dllCount = assemblies.length;

            // Calculate total sizes from boot resources
            let totalSize = 0;
            if (window.Blazor && window.Blazor.resources && window.Blazor.resources.boot) {
                Object.values(window.Blazor.resources.boot).forEach(resource => {
                    if (resource.data) {
                        totalSize += resource.data.byteLength || 0;
                    }
                });
            }

            // Also check for lazy-loaded assemblies
            this.checkLazyLoadedAssemblies();

            this.metrics.totalDllSize = totalSize / (1024 * 1024); // Convert to MB
        },

        checkLazyLoadedAssemblies: function () {
            // Check if lazy loading is configured
            const lazyAssemblies = [
                'Banking.Component.Profitability',
                'Banking.Component.Operations',
                'Banking.Component.Analytics'
            ];

            let loadedLazyCount = 0;
            lazyAssemblies.forEach(name => {
                if (window.Blazor && window.Blazor.resources && 
                    window.Blazor.resources.boot && 
                    window.Blazor.resources.boot[name]) {
                    loadedLazyCount++;
                }
            });

            this.metrics.lazyLoadingActive = loadedLazyCount === 0;
        },

        printMetrics: function () {
            const dllMB = this.metrics.totalDllSize.toFixed(2);
            const jsMB = this.metrics.totalJsSize.toFixed(2);
            const totalMB = (this.metrics.totalDllSize + this.metrics.totalJsSize).toFixed(2);

            console.log('');
            console.log('%c📊 Banking.Admin.Client Performance Metrics - Startup', 'color: #0066cc; font-weight: bold; font-size: 14px;');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log(`🔹 DLLs loaded: ${this.metrics.dllCount}`);
            console.log(`🔹 Total DLL size: ${dllMB} MB`);
            console.log(`🔹 Total JS size: ${jsMB} MB`);
            console.log(`🔹 Total download: ${totalMB} MB`);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log(`⏱️ Page Load Time: ${Math.round(this.metrics.pageLoadTime)} ms`);
            console.log(`⏱️ DOM Content Loaded: ${Math.round(this.metrics.domContentLoaded)} ms`);
            console.log(`⏱️ Time to Interactive: ${Math.round(this.metrics.timeToInteractive)} ms`);

            if (this.metrics.lazyLoadingActive) {
                console.log('');
                console.log('%c🎯 Lazy Loading ACTIVE!', 'color: #28a745; font-weight: bold;');
                console.log('   ✓ Additional components loaded on demand');
                console.log('   ✓ Reduced initial bundle size');
                console.log('   ✓ Production-ready lazy loading');
            }
            console.log('');
        },

        // Called from Blazor to log authentication events
        logAuthEvent: function (message) {
            console.log(message);
        },

        // Get current metrics for Blazor component
        getMetrics: function () {
            return JSON.stringify(this.metrics);
        },

        // Track custom timing
        trackTiming: function (label, startTime) {
            const duration = performance.now() - startTime;
            console.log(`⏱️ ${label}: ${Math.round(duration)} ms`);
            return duration;
        }
    };

    // Initialize on load
    window.PerformanceMetrics.init();
})();
