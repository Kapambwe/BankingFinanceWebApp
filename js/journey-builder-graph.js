/**
 * Journey Builder Graph - Vis.js Integration for Journey Designer
 * Provides drag-and-drop journey node management and visual flow design
 */

window.journeyBuilderGraph = {
    networks: {},
    dotNetRefs: {},

    /**
     * Initialize the journey builder graph
     */
    initialize: function (containerId, dotNetRef, options) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return false;
        }

        // Default options for journey builder
        const defaultOptions = {
            nodes: {
                shape: 'box',
                margin: 10,
                widthConstraint: {
                    minimum: 120,
                    maximum: 200
                },
                heightConstraint: {
                    minimum: 40
                },
                font: {
                    size: 14,
                    face: 'Arial',
                    color: '#ffffff'
                },
                borderWidth: 2,
                borderWidthSelected: 3,
                shadow: {
                    enabled: true,
                    size: 5,
                    x: 2,
                    y: 2
                }
            },
            edges: {
                arrows: {
                    to: {
                        enabled: true,
                        scaleFactor: 1.2
                    }
                },
                smooth: {
                    enabled: true,
                    type: 'cubicBezier',
                    roundness: 0.5
                },
                width: 2,
                color: {
                    color: '#848484',
                    highlight: '#2B7CE9',
                    hover: '#2B7CE9'
                },
                font: {
                    size: 12,
                    align: 'middle',
                    background: '#ffffff',
                    strokeWidth: 2,
                    strokeColor: '#ffffff'
                }
            },
            physics: {
                enabled: true,
                hierarchicalRepulsion: {
                    centralGravity: 0,
                    springLength: 200,
                    springConstant: 0.01,
                    nodeDistance: 150,
                    damping: 0.09
                },
                solver: 'hierarchicalRepulsion'
            },
            layout: {
                hierarchical: {
                        direction: 'LR',
                    sortMethod: 'directed',
                    levelSeparation: 300,
                    nodeSpacing: 150,
                    treeSpacing: 200
                }
            },
            manipulation: {
                enabled: true,
                initiallyActive: false,
                addNode: function (data, callback) {
                    // Handled by .NET
                    callback(null);
                },
                addEdge: function (data, callback) {
                    if (data.from === data.to) {
                        alert('Cannot connect a node to itself');
                        callback(null);
                        return;
                    }
                    callback(data);
                    if (dotNetRef) {
                        dotNetRef.invokeMethodAsync('OnEdgeAdded', data.from, data.to);
                    }
                },
                editEdge: false,
                deleteNode: function (data, callback) {
                    callback(data);
                    if (dotNetRef) {
                        dotNetRef.invokeMethodAsync('OnNodeDeleted', data.nodes[0]);
                    }
                },
                deleteEdge: function (data, callback) {
                    callback(data);
                    if (dotNetRef) {
                        dotNetRef.invokeMethodAsync('OnEdgeDeleted', data.edges[0]);
                    }
                }
            },
            interaction: {
                dragNodes: true,
                dragView: true,
                zoomView: true,
                selectable: true,
                selectConnectedEdges: true,
                hover: true,
                tooltipDelay: 100,
                navigationButtons: true,
                keyboard: {
                    enabled: true,
                    bindToWindow: false
                }
            }
        };

        // Merge with custom options
        const mergedOptions = { ...defaultOptions, ...(options || {}) };

        // Create initial empty data
        const data = {
            nodes: new vis.DataSet([]),
            edges: new vis.DataSet([])
        };

        // Create network
        const network = new vis.Network(container, data, mergedOptions);

        // Store references
        this.networks[containerId] = network;
        this.dotNetRefs[containerId] = dotNetRef;

        // Event listeners
        network.on('click', (params) => {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                if (dotNetRef) {
                    dotNetRef.invokeMethodAsync('OnNodeClicked', nodeId);
                }
            } else if (params.edges.length > 0) {
                const edgeId = params.edges[0];
                if (dotNetRef) {
                    dotNetRef.invokeMethodAsync('OnEdgeClicked', edgeId);
                }
            } else {
                // Clicked on canvas
                if (dotNetRef) {
                    dotNetRef.invokeMethodAsync('OnCanvasClicked', params.pointer.canvas.x, params.pointer.canvas.y);
                }
            }
        });

        network.on('doubleClick', (params) => {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                if (dotNetRef) {
                    dotNetRef.invokeMethodAsync('OnNodeDoubleClicked', nodeId);
                }
            }
        });

        network.on('dragEnd', (params) => {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                const position = network.getPositions([nodeId])[nodeId];
                if (dotNetRef) {
                    dotNetRef.invokeMethodAsync('OnNodeMoved', nodeId, position.x, position.y);
                }
            }
        });

        network.on('stabilizationIterationsDone', () => {
            network.setOptions({ physics: false });
        });

        console.log(`Journey builder graph initialized: ${containerId}`);
        return true;
    },

    /**
     * Add a node to the journey
     */
    addNode: function (containerId, nodeData) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        
        // Style based on node type
        const styledNode = this.styleNode(nodeData);
        
        nodes.add(styledNode);
        return true;
    },

    /**
     * Style node based on type
     */
    styleNode: function (node) {
        const styles = {
            'Start': {
                color: { background: '#4CAF50', border: '#388E3C' },
                shape: 'ellipse',
                icon: { face: 'FontAwesome', code: '\uf04b', size: 50, color: '#ffffff' }
            },
            'SendEmail': {
                color: { background: '#2196F3', border: '#1976D2' },
                icon: { face: 'FontAwesome', code: '\uf0e0', size: 50, color: '#ffffff' }
            },
            'SendSMS': {
                color: { background: '#00BCD4', border: '#0097A7' },
                icon: { face: 'FontAwesome', code: '\uf4ad', size: 50, color: '#ffffff' }
            },
            'Wait': {
                color: { background: '#FF9800', border: '#F57C00' },
                icon: { face: 'FontAwesome', code: '\uf017', size: 50, color: '#ffffff' }
            },
            'DecisionSplit': {
                color: { background: '#FFC107', border: '#FFA000' },
                shape: 'diamond',
                icon: { face: 'FontAwesome', code: '\uf126', size: 50, color: '#ffffff' }
            },
            'ABTest': {
                color: { background: '#9C27B0', border: '#7B1FA2' },
                shape: 'diamond',
                icon: { face: 'FontAwesome', code: '\uf0ec', size: 50, color: '#ffffff' }
            },
            'UpdateProfile': {
                color: { background: '#3F51B5', border: '#303F9F' },
                icon: { face: 'FontAwesome', code: '\uf007', size: 50, color: '#ffffff' }
            },
            'End': {
                color: { background: '#F44336', border: '#D32F2F' },
                shape: 'ellipse',
                icon: { face: 'FontAwesome', code: '\uf04d', size: 50, color: '#ffffff' }
            }
        };

        const style = styles[node.type] || {
            color: { background: '#607D8B', border: '#455A64' },
            icon: { face: 'FontAwesome', code: '\uf013', size: 50, color: '#ffffff' }
        };

        return {
            ...node,
            ...style,
            font: { color: '#ffffff', size: 14 }
        };
    },

    /**
     * Add an edge (connection) to the journey
     */
    addEdge: function (containerId, edgeData) {
        const network = this.networks[containerId];
        if (!network) return false;

        const edges = network.body.data.edges;
        edges.add(edgeData);
        return true;
    },

    /**
     * Remove a node from the journey
     */
    removeNode: function (containerId, nodeId) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        nodes.remove(nodeId);
        return true;
    },

    /**
     * Remove an edge from the journey
     */
    removeEdge: function (containerId, edgeId) {
        const network = this.networks[containerId];
        if (!network) return false;

        const edges = network.body.data.edges;
        edges.remove(edgeId);
        return true;
    },

    /**
     * Update node data
     */
    updateNode: function (containerId, nodeId, updates) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        const styledUpdates = this.styleNode({ ...updates, id: nodeId });
        nodes.update(styledUpdates);
        return true;
    },

    /**
     * Update edge data
     */
    updateEdge: function (containerId, edgeId, updates) {
        const network = this.networks[containerId];
        if (!network) return false;

        const edges = network.body.data.edges;
        edges.update({ ...updates, id: edgeId });
        return true;
    },

    /**
     * Load complete journey data
     */
    loadData: function (containerId, journeyData) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        const edges = network.body.data.edges;

        // Clear existing data
        nodes.clear();
        edges.clear();

        // Add nodes with styling
        if (journeyData.nodes && journeyData.nodes.length > 0) {
            const styledNodes = journeyData.nodes.map(node => this.styleNode(node));
            nodes.add(styledNodes);
        }

        // Add edges
        if (journeyData.edges && journeyData.edges.length > 0) {
            edges.add(journeyData.edges);
        }

        // Fit view
        setTimeout(() => {
            network.fit({
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
        }, 500);

        return true;
    },

    /**
     * Get current journey data
     */
    getData: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return null;

        const nodes = network.body.data.nodes.get();
        const edges = network.body.data.edges.get();

        return {
            nodes: nodes,
            edges: edges
        };
    },

    /**
     * Focus on a specific node
     */
    focusNode: function (containerId, nodeId) {
        const network = this.networks[containerId];
        if (!network) return false;

        network.focus(nodeId, {
            scale: 1.5,
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });
        network.selectNodes([nodeId]);
        return true;
    },

    /**
     * Highlight path between nodes
     */
    highlightPath: function (containerId, nodeIds) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        const edges = network.body.data.edges;

        // Reset all highlights
        this.resetHighlight(containerId);

        // Highlight nodes
        nodeIds.forEach(nodeId => {
            const node = nodes.get(nodeId);
            if (node) {
                nodes.update({
                    id: nodeId,
                    borderWidth: 5,
                    borderWidthSelected: 6
                });
            }
        });

        // Highlight edges between consecutive nodes
        for (let i = 0; i < nodeIds.length - 1; i++) {
            const edgesData = edges.get({
                filter: (edge) => edge.from === nodeIds[i] && edge.to === nodeIds[i + 1]
            });
            
            edgesData.forEach(edge => {
                edges.update({
                    id: edge.id,
                    width: 4,
                    color: { color: '#FF5722', highlight: '#FF5722' }
                });
            });
        }

        return true;
    },

    /**
     * Reset all highlights
     */
    resetHighlight: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        const edges = network.body.data.edges;

        nodes.forEach(node => {
            nodes.update({
                id: node.id,
                borderWidth: 2,
                borderWidthSelected: 3
            });
        });

        edges.forEach(edge => {
            edges.update({
                id: edge.id,
                width: 2,
                color: { color: '#848484', highlight: '#2B7CE9' }
            });
        });

        return true;
    },

    /**
     * Zoom in
     */
    zoomIn: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return false;

        const scale = network.getScale();
        network.moveTo({
            scale: scale * 1.2,
            animation: {
                duration: 300,
                easingFunction: 'easeInOutQuad'
            }
        });
        return true;
    },

    /**
     * Zoom out
     */
    zoomOut: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return false;

        const scale = network.getScale();
        network.moveTo({
            scale: scale * 0.8,
            animation: {
                duration: 300,
                easingFunction: 'easeInOutQuad'
            }
        });
        return true;
    },

    /**
     * Fit canvas to content
     */
    fit: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return false;

        network.fit({
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });
        return true;
    },

    /**
     * Clear all nodes and edges
     */
    clear: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return false;

        const nodes = network.body.data.nodes;
        const edges = network.body.data.edges;

        nodes.clear();
        edges.clear();
        return true;
    },

    /**
     * Enable/disable physics
     */
    setPhysics: function (containerId, enabled) {
        const network = this.networks[containerId];
        if (!network) return false;

        network.setOptions({ physics: { enabled: enabled } });
        return true;
    },

    /**
     * Stabilize network
     */
    stabilize: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return false;

        network.stabilize();
        return true;
    },

    /**
     * Export to PNG
     */
    exportToPNG: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return null;

        const canvas = network.canvas.frame.canvas;
        return canvas.toDataURL('image/png');
    },

    /**
     * Validate journey (check for valid flow)
     */
    validate: function (containerId) {
        const network = this.networks[containerId];
        if (!network) return { valid: false, errors: ['Network not found'] };

        const nodes = network.body.data.nodes.get();
        const edges = network.body.data.edges.get();

        const errors = [];

        // Check for start node
        const startNodes = nodes.filter(n => n.type === 'Start');
        if (startNodes.length === 0) {
            errors.push('Journey must have a Start node');
        } else if (startNodes.length > 1) {
            errors.push('Journey can only have one Start node');
        }

        // Check for end node
        const endNodes = nodes.filter(n => n.type === 'End');
        if (endNodes.length === 0) {
            errors.push('Journey must have at least one End node');
        }

        // Check for orphaned nodes (no incoming or outgoing edges)
        nodes.forEach(node => {
            if (node.type !== 'Start' && node.type !== 'End') {
                const hasIncoming = edges.some(e => e.to === node.id);
                const hasOutgoing = edges.some(e => e.from === node.id);
                
                if (!hasIncoming && !hasOutgoing) {
                    errors.push(`Node "${node.label}" is not connected`);
                } else if (!hasIncoming) {
                    errors.push(`Node "${node.label}" has no incoming connections`);
                } else if (!hasOutgoing) {
                    errors.push(`Node "${node.label}" has no outgoing connections`);
                }
            }
        });

        // Check for cycles (optional warning)
        // This is simplified - a full cycle detection would use DFS
        
        return {
            valid: errors.length === 0,
            errors: errors,
            warnings: []
        };
    },

    /**
     * Destroy the network
     */
    destroy: function (containerId) {
        const network = this.networks[containerId];
        if (network) {
            network.destroy();
            delete this.networks[containerId];
            delete this.dotNetRefs[containerId];
        }
        return true;
    }
};
