// Relationship Graph Visualization using vis.js
// This script provides interactive network visualization for customer relationships

let networkInstances = {};

/**
 * Render relationship graph using vis.js
 * @param {string} containerId - The DOM element ID where the graph will be rendered
 * @param {Array} nodes - Array of node objects
 * @param {Array} edges - Array of edge objects
 * @param {Object} options - vis.js configuration options
 */
window.renderRelationshipGraph = function (containerId, nodes, edges, options) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID '${containerId}' not found`);
            return;
        }

        // Create datasets
        const nodesDataSet = new vis.DataSet(nodes);
        const edgesDataSet = new vis.DataSet(edges);

        const data = {
            nodes: nodesDataSet,
            edges: edgesDataSet
        };

        // Merge default options with provided options
        const defaultOptions = {
            autoResize: true,
            height: '100%',
            width: '100%',
            locale: 'en',
            clickToUse: false
        };

        const finalOptions = { ...defaultOptions, ...options };

        // Destroy existing network instance if it exists
        if (networkInstances[containerId]) {
            networkInstances[containerId].destroy();
        }

        // Create new network
        const network = new vis.Network(container, data, finalOptions);

        // Store instance for later reference
        networkInstances[containerId] = network;

        // Add event listeners
        network.on('click', function (params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                console.log('Node clicked:', nodeId);
                // You can trigger Blazor component method here if needed
            }
        });

        network.on('doubleClick', function (params) {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                console.log('Node double-clicked:', nodeId);
                // Navigate to customer details or show modal
            }
        });

        network.on('hoverNode', function (params) {
            container.style.cursor = 'pointer';
        });

        network.on('blurNode', function (params) {
            container.style.cursor = 'default';
        });

        // Fit network to container after stabilization
        network.once('stabilizationIterationsDone', function () {
            network.fit({
                animation: {
                    duration: 1000,
                    easingFunction: 'easeInOutQuad'
                }
            });
        });

        console.log(`Graph rendered successfully in ${containerId}`);
        return true;
    } catch (error) {
        console.error('Error rendering relationship graph:', error);
        return false;
    }
};

/**
 * Export graph as image
 * @param {string} containerId - The container ID of the graph
 */
window.exportGraph = function (containerId) {
    try {
        const network = networkInstances[containerId];
        if (!network) {
            console.error('Network instance not found');
            return;
        }

        // Get canvas
        const canvas = network.canvas.frame.canvas;
        
        // Convert to blob and download
        canvas.toBlob(function (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `relationship-graph-${new Date().getTime()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });

        console.log('Graph exported successfully');
    } catch (error) {
        console.error('Error exporting graph:', error);
    }
};

/**
 * Update graph data
 * @param {string} containerId - The container ID
 * @param {Array} nodes - New nodes
 * @param {Array} edges - New edges
 */
window.updateGraphData = function (containerId, nodes, edges) {
    try {
        const network = networkInstances[containerId];
        if (!network) {
            console.error('Network instance not found');
            return false;
        }

        // Update datasets
        network.body.data.nodes.clear();
        network.body.data.nodes.add(nodes);
        network.body.data.edges.clear();
        network.body.data.edges.add(edges);

        // Refit
        network.fit({
            animation: {
                duration: 500,
                easingFunction: 'easeInOutQuad'
            }
        });

        return true;
    } catch (error) {
        console.error('Error updating graph data:', error);
        return false;
    }
};

/**
 * Highlight specific nodes
 * @param {string} containerId - The container ID
 * @param {Array} nodeIds - Array of node IDs to highlight
 */
window.highlightNodes = function (containerId, nodeIds) {
    try {
        const network = networkInstances[containerId];
        if (!network) {
            console.error('Network instance not found');
            return false;
        }

        // Select nodes
        network.selectNodes(nodeIds, true);
        
        // Focus on selected nodes
        network.focus(nodeIds[0], {
            scale: 1.5,
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });

        return true;
    } catch (error) {
        console.error('Error highlighting nodes:', error);
        return false;
    }
};

/**
 * Get selected nodes
 * @param {string} containerId - The container ID
 * @returns {Array} Array of selected node IDs
 */
window.getSelectedNodes = function (containerId) {
    try {
        const network = networkInstances[containerId];
        if (!network) {
            console.error('Network instance not found');
            return [];
        }

        return network.getSelectedNodes();
    } catch (error) {
        console.error('Error getting selected nodes:', error);
        return [];
    }
};

/**
 * Destroy network instance
 * @param {string} containerId - The container ID
 */
window.destroyGraph = function (containerId) {
    try {
        const network = networkInstances[containerId];
        if (network) {
            network.destroy();
            delete networkInstances[containerId];
            console.log(`Graph ${containerId} destroyed`);
        }
    } catch (error) {
        console.error('Error destroying graph:', error);
    }
};

/**
 * Center graph view
 * @param {string} containerId - The container ID
 */
window.centerGraph = function (containerId) {
    try {
        const network = networkInstances[containerId];
        if (!network) {
            console.error('Network instance not found');
            return false;
        }

        network.fit({
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });

        return true;
    } catch (error) {
        console.error('Error centering graph:', error);
        return false;
    }
};

/**
 * Zoom in/out
 * @param {string} containerId - The container ID
 * @param {number} scale - Zoom scale (positive to zoom in, negative to zoom out)
 */
window.zoomGraph = function (containerId, scale) {
    try {
        const network = networkInstances[containerId];
        if (!network) {
            console.error('Network instance not found');
            return false;
        }

        const currentScale = network.getScale();
        const newScale = currentScale + scale;

        network.moveTo({
            scale: newScale,
            animation: {
                duration: 300,
                easingFunction: 'easeInOutQuad'
            }
        });

        return true;
    } catch (error) {
        console.error('Error zooming graph:', error);
        return false;
    }
};

// Clean up on page unload
window.addEventListener('beforeunload', function () {
    Object.keys(networkInstances).forEach(containerId => {
        if (networkInstances[containerId]) {
            networkInstances[containerId].destroy();
        }
    });
    networkInstances = {};
});
