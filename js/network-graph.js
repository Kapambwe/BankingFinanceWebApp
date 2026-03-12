// Customer Network Graph using vis.js
// This file provides JavaScript interop for rendering customer relationship networks

let networkInstances = {};

window.customerNetworkGraph = {
    initialize: function (containerId, dotNetRef) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return false;
        }

        // Initialize empty network
        const data = {
            nodes: new vis.DataSet([]),
            edges: new vis.DataSet([])
        };

        const options = {
            nodes: {
                shape: 'dot',
                size: 20,
                font: {
                    size: 14,
                    color: '#ffffff'
                },
                borderWidth: 2,
                shadow: true
            },
            edges: {
                width: 2,
                color: { inherit: 'from' },
                smooth: {
                    type: 'continuous'
                },
                arrows: {
                    to: { enabled: true, scaleFactor: 0.5 }
                }
            },
            physics: {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 150,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 0.1
                },
                stabilization: {
                    enabled: true,
                    iterations: 200
                }
            },
            interaction: {
                hover: true,
                tooltipDelay: 200,
                zoomView: true,
                dragView: true
            },
            layout: {
                improvedLayout: true,
                hierarchical: false
            }
        };

        const network = new vis.Network(container, data, options);

        // Event handlers
        network.on('click', function (params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                dotNetRef.invokeMethodAsync('OnNodeClicked', nodeId);
            }
        });

        network.on('doubleClick', function (params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                dotNetRef.invokeMethodAsync('OnNodeDoubleClicked', nodeId);
            }
        });

        network.on('hoverNode', function (params) {
            container.style.cursor = 'pointer';
        });

        network.on('blurNode', function (params) {
            container.style.cursor = 'default';
        });

        network.on('stabilizationIterationsDone', function () {
            network.setOptions({ physics: false });
        });

        networkInstances[containerId] = {
            network: network,
            data: data
        };

        return true;
    },

    addNode: function (containerId, nodeData) {
        const instance = networkInstances[containerId];
        if (!instance) {
            console.error('Network instance not found:', containerId);
            return false;
        }

        try {
            const node = {
                id: nodeData.id,
                label: nodeData.label,
                title: nodeData.title || nodeData.label,
                group: nodeData.group,
                color: {
                    background: nodeData.color || '#3b82f6',
                    border: nodeData.borderColor || '#2563eb',
                    highlight: {
                        background: nodeData.highlightColor || '#60a5fa',
                        border: nodeData.highlightBorderColor || '#1d4ed8'
                    }
                },
                size: nodeData.size || 20,
                font: {
                    color: '#ffffff',
                    size: nodeData.fontSize || 14
                },
                shape: nodeData.shape || 'dot'
            };

            instance.data.nodes.add(node);
            return true;
        } catch (error) {
            console.error('Error adding node:', error);
            return false;
        }
    },

    addEdge: function (containerId, edgeData) {
        const instance = networkInstances[containerId];
        if (!instance) {
            console.error('Network instance not found:', containerId);
            return false;
        }

        try {
            const edge = {
                from: edgeData.from,
                to: edgeData.to,
                label: edgeData.label || '',
                title: edgeData.title || edgeData.label,
                color: {
                    color: edgeData.color || '#94a3b8',
                    highlight: edgeData.highlightColor || '#475569'
                },
                width: edgeData.width || 2,
                dashes: edgeData.dashed || false,
                arrows: {
                    to: {
                        enabled: edgeData.directed !== false,
                        scaleFactor: 0.5
                    }
                }
            };

            instance.data.edges.add(edge);
            return true;
        } catch (error) {
            console.error('Error adding edge:', error);
            return false;
        }
    },

    updateNode: function (containerId, nodeId, updates) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.data.nodes.update({ id: nodeId, ...updates });
            return true;
        } catch (error) {
            console.error('Error updating node:', error);
            return false;
        }
    },

    removeNode: function (containerId, nodeId) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.data.nodes.remove(nodeId);
            return true;
        } catch (error) {
            console.error('Error removing node:', error);
            return false;
        }
    },

    clearNetwork: function (containerId) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.data.nodes.clear();
            instance.data.edges.clear();
            return true;
        } catch (error) {
            console.error('Error clearing network:', error);
            return false;
        }
    },

    fitNetwork: function (containerId) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.network.fit({
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
            return true;
        } catch (error) {
            console.error('Error fitting network:', error);
            return false;
        }
    },

    focusNode: function (containerId, nodeId) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.network.focus(nodeId, {
                scale: 1.5,
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
            return true;
        } catch (error) {
            console.error('Error focusing node:', error);
            return false;
        }
    },

    selectNode: function (containerId, nodeId) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.network.selectNodes([nodeId]);
            return true;
        } catch (error) {
            console.error('Error selecting node:', error);
            return false;
        }
    },

    setOptions: function (containerId, options) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.network.setOptions(options);
            return true;
        } catch (error) {
            console.error('Error setting options:', error);
            return false;
        }
    },

    enablePhysics: function (containerId, enable) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.network.setOptions({ physics: { enabled: enable } });
            return true;
        } catch (error) {
            console.error('Error toggling physics:', error);
            return false;
        }
    },

    setLayout: function (containerId, layoutType) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            const layoutOptions = {
                hierarchical: false,
                improvedLayout: true
            };

            if (layoutType === 'hierarchical') {
                layoutOptions.hierarchical = {
                    enabled: true,
                    direction: 'UD',
                    sortMethod: 'directed',
                    levelSeparation: 150,
                    nodeSpacing: 200
                };
            }

            instance.network.setOptions({ layout: layoutOptions });
            return true;
        } catch (error) {
            console.error('Error setting layout:', error);
            return false;
        }
    },

    exportNetwork: function (containerId) {
        const instance = networkInstances[containerId];
        if (!instance) return null;

        try {
            return {
                nodes: instance.data.nodes.get(),
                edges: instance.data.edges.get()
            };
        } catch (error) {
            console.error('Error exporting network:', error);
            return null;
        }
    },

    destroy: function (containerId) {
        const instance = networkInstances[containerId];
        if (!instance) return false;

        try {
            instance.network.destroy();
            delete networkInstances[containerId];
            return true;
        } catch (error) {
            console.error('Error destroying network:', error);
            return false;
        }
    }
};
