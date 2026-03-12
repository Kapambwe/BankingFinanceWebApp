// Vis.js Network Graph Interop for Customer 360° Relationship Visualization
window.customerNetworkGraph = {
    instances: {},

    initialize: function (containerId, options) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error('Container not found:', containerId);
                return false;
            }

            // Default options for financial relationship network
            const defaultOptions = {
                nodes: {
                    shape: 'dot',
                    size: 16,
                    font: {
                        size: 12,
                        color: '#343a40'
                    },
                    borderWidth: 2,
                    shadow: true
                },
                edges: {
                    width: 2,
                    color: {
                        color: '#848484',
                        highlight: '#3b82f6',
                        hover: '#3b82f6'
                    },
                    arrows: {
                        to: {
                            enabled: true,
                            scaleFactor: 0.5
                        }
                    },
                    smooth: {
                        type: 'cubicBezier',
                        roundness: 0.5
                    },
                    font: {
                        size: 10,
                        align: 'middle'
                    }
                },
                physics: {
                    enabled: true,
                    barnesHut: {
                        gravitationalConstant: -2000,
                        centralGravity: 0.3,
                        springLength: 95,
                        springConstant: 0.04,
                        damping: 0.09,
                        avoidOverlap: 0.5
                    },
                    stabilization: {
                        enabled: true,
                        iterations: 100,
                        updateInterval: 25
                    }
                },
                interaction: {
                    hover: true,
                    tooltipDelay: 100,
                    zoomView: true,
                    dragView: true,
                    navigationButtons: true,
                    keyboard: {
                        enabled: true
                    }
                },
                layout: {
                    improvedLayout: true,
                    hierarchical: false
                }
            };

            // Merge options
            const finalOptions = { ...defaultOptions, ...options };

            // Initialize empty network
            const data = {
                nodes: new vis.DataSet([]),
                edges: new vis.DataSet([])
            };

            // Create network instance
            const network = new vis.Network(container, data, finalOptions);

            // Store instance
            this.instances[containerId] = {
                network: network,
                nodes: data.nodes,
                edges: data.edges
            };

            console.log('Network graph initialized:', containerId);
            return true;
        } catch (error) {
            console.error('Error initializing network graph:', error);
            return false;
        }
    },

    loadData: function (containerId, graphData) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            // Parse nodes
            const nodes = graphData.nodes.map(node => ({
                id: node.id,
                label: node.label,
                title: this.createNodeTooltip(node),
                color: this.getNodeColor(node),
                size: this.getNodeSize(node),
                font: {
                    color: node.nodeType === 'customer' ? '#ffffff' : '#343a40'
                },
                borderWidth: node.isBeneficialOwner ? 4 : 2,
                borderWidthSelected: node.isBeneficialOwner ? 6 : 3
            }));

            // Parse edges
            const edges = graphData.edges.map(edge => ({
                from: edge.from,
                to: edge.to,
                label: edge.label,
                title: this.createEdgeTooltip(edge),
                width: edge.isBeneficialOwner ? 3 : 2,
                color: edge.isBeneficialOwner ? 
                    { color: '#dc2626', highlight: '#b91c1c' } : 
                    { color: '#848484', highlight: '#3b82f6' }
            }));

            // Update network
            instance.nodes.clear();
            instance.edges.clear();
            instance.nodes.add(nodes);
            instance.edges.add(edges);

            // Fit to view
            instance.network.fit({
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });

            console.log('Network data loaded:', nodes.length, 'nodes,', edges.length, 'edges');
            return true;
        } catch (error) {
            console.error('Error loading network data:', error);
            return false;
        }
    },

    getNodeColor: function (node) {
        // Color based on node type and properties
        if (node.nodeType === 'customer') {
            // Main customer - blue gradient
            return {
                background: '#3b82f6',
                border: '#2563eb',
                highlight: {
                    background: '#2563eb',
                    border: '#1d4ed8'
                }
            };
        } else if (node.isBeneficialOwner) {
            // Beneficial owner - red gradient
            return {
                background: '#dc2626',
                border: '#b91c1c',
                highlight: {
                    background: '#b91c1c',
                    border: '#991b1b'
                }
            };
        } else if (node.tier === 'PLATINUM' || node.tier === 'GOLD') {
            // High-value customer - gold gradient
            return {
                background: '#f59e0b',
                border: '#d97706',
                highlight: {
                    background: '#d97706',
                    border: '#b45309'
                }
            };
        } else {
            // Regular related entity - gray gradient
            return {
                background: '#6b7280',
                border: '#4b5563',
                highlight: {
                    background: '#4b5563',
                    border: '#374151'
                }
            };
        }
    },

    getNodeSize: function (node) {
        // Size based on total value or importance
        const baseSize = 16;
        const maxSize = 40;

        if (node.nodeType === 'customer') {
            return baseSize + 10; // Main customer is larger
        }

        if (node.totalValue && node.totalValue > 0) {
            // Scale size based on value (logarithmic)
            const valueScale = Math.log10(node.totalValue + 1) * 3;
            return Math.min(baseSize + valueScale, maxSize);
        }

        return baseSize;
    },

    createNodeTooltip: function (node) {
        let tooltip = `<div style="padding: 8px;">`;
        tooltip += `<div style="font-weight: bold; margin-bottom: 4px;">${node.label}</div>`;
        
        if (node.tier) {
            tooltip += `<div>Tier: <span style="font-weight: bold;">${node.tier}</span></div>`;
        }
        
        if (node.status) {
            tooltip += `<div>Status: ${node.status}</div>`;
        }
        
        if (node.totalValue && node.totalValue > 0) {
            tooltip += `<div>Value: $${node.totalValue.toLocaleString()}</div>`;
        }
        
        if (node.isBeneficialOwner) {
            tooltip += `<div style="color: #dc2626; font-weight: bold;">⚠ Beneficial Owner</div>`;
        }
        
        tooltip += `</div>`;
        return tooltip;
    },

    createEdgeTooltip: function (edge) {
        let tooltip = `<div style="padding: 8px;">`;
        tooltip += `<div style="font-weight: bold; margin-bottom: 4px;">${edge.label}</div>`;
        
        if (edge.ownershipPercentage && edge.ownershipPercentage > 0) {
            tooltip += `<div>Ownership: ${edge.ownershipPercentage}%</div>`;
        }
        
        if (edge.isBeneficialOwner) {
            tooltip += `<div style="color: #dc2626; font-weight: bold;">Beneficial Ownership</div>`;
        }
        
        tooltip += `</div>`;
        return tooltip;
    },

    addEventListener: function (containerId, eventName, dotNetHelper, methodName) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            instance.network.on(eventName, function (params) {
                if (params.nodes && params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    dotNetHelper.invokeMethodAsync(methodName, nodeId);
                }
            });

            console.log('Event listener added:', eventName);
            return true;
        } catch (error) {
            console.error('Error adding event listener:', error);
            return false;
        }
    },

    focusNode: function (containerId, nodeId) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            instance.network.focus(nodeId, {
                scale: 1.5,
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });

            // Select the node
            instance.network.selectNodes([nodeId]);

            return true;
        } catch (error) {
            console.error('Error focusing node:', error);
            return false;
        }
    },

    highlightPath: function (containerId, nodeIds) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            // Get all edges between the nodes
            const edges = instance.edges.get();
            const highlightEdges = edges.filter(edge => 
                nodeIds.includes(edge.from) && nodeIds.includes(edge.to)
            );

            // Dim all nodes and edges
            instance.nodes.forEach(node => {
                instance.nodes.update({
                    id: node.id,
                    opacity: nodeIds.includes(node.id) ? 1.0 : 0.3
                });
            });

            instance.edges.forEach(edge => {
                const isHighlighted = highlightEdges.some(e => e.id === edge.id);
                instance.edges.update({
                    id: edge.id,
                    opacity: isHighlighted ? 1.0 : 0.3
                });
            });

            return true;
        } catch (error) {
            console.error('Error highlighting path:', error);
            return false;
        }
    },

    resetHighlight: function (containerId) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            // Reset all nodes and edges to full opacity
            instance.nodes.forEach(node => {
                instance.nodes.update({ id: node.id, opacity: 1.0 });
            });

            instance.edges.forEach(edge => {
                instance.edges.update({ id: edge.id, opacity: 1.0 });
            });

            return true;
        } catch (error) {
            console.error('Error resetting highlight:', error);
            return false;
        }
    },

    exportToPNG: function (containerId) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return null;
            }

            const canvas = instance.network.canvas.frame.canvas;
            return canvas.toDataURL('image/png');
        } catch (error) {
            console.error('Error exporting to PNG:', error);
            return null;
        }
    },

    destroy: function (containerId) {
        try {
            const instance = this.instances[containerId];
            if (instance) {
                instance.network.destroy();
                delete this.instances[containerId];
                console.log('Network graph destroyed:', containerId);
            }
            return true;
        } catch (error) {
            console.error('Error destroying network graph:', error);
            return false;
        }
    },

    setPhysicsEnabled: function (containerId, enabled) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            instance.network.setOptions({
                physics: { enabled: enabled }
            });

            return true;
        } catch (error) {
            console.error('Error setting physics:', error);
            return false;
        }
    },

    stabilize: function (containerId) {
        try {
            const instance = this.instances[containerId];
            if (!instance) {
                console.error('Network instance not found:', containerId);
                return false;
            }

            instance.network.stabilize();
            return true;
        } catch (error) {
            console.error('Error stabilizing network:', error);
            return false;
        }
    }
};
