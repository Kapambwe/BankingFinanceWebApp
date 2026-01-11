// D3.js Network Graph Visualization
// This file provides JavaScript interop for rendering network graphs using D3.js

let graphInstances = {};

// Export functions for C# interop
export function initialize(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return false;
    }

    // Clear any existing content
    container.innerHTML = '';

    // Set default options
    const defaultOptions = {
        width: 800,
        height: 600,
        nodeRadius: 8,
        linkDistance: 100,
        chargeStrength: -300,
        enableZoom: true,
        enableDrag: true,
        colorScheme: 'category10'
    };

    const config = { ...defaultOptions, ...options };

    // Create SVG
    const svg = d3.select(container)
        .append('svg')
        .attr('width', '100%')
        .attr('height', config.height)
        .attr('class', 'd3-network-graph')
        .attr('viewBox', [0, 0, config.width, config.height]);

    // Create container for zoom
    const g = svg.append('g');

    // Add zoom behavior
    if (config.enableZoom) {
        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });
        svg.call(zoom);
    }

    // Create arrow markers for directed links
    svg.append('defs').selectAll('marker')
        .data(['default', 'highlighted'])
        .join('marker')
        .attr('id', d => `arrow-${d}`)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 20)
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('fill', d => d === 'highlighted' ? '#ff6b6b' : '#999')
        .attr('d', 'M0,-5L10,0L0,5');

    // Create force simulation
    const simulation = d3.forceSimulation()
        .force('link', d3.forceLink().id(d => d.id).distance(config.linkDistance))
        .force('charge', d3.forceManyBody().strength(config.chargeStrength))
        .force('center', d3.forceCenter(config.width / 2, config.height / 2))
        .force('collision', d3.forceCollide().radius(config.nodeRadius * 2));

    // Create color scale
    const colorScale = d3.scaleOrdinal(d3[`scheme${config.colorScheme.charAt(0).toUpperCase() + config.colorScheme.slice(1)}`]);

    // Store instance
    graphInstances[containerId] = {
        svg: svg,
        g: g,
        simulation: simulation,
        config: config,
        colorScale: colorScale,
        nodes: [],
        links: [],
        nodeElements: null,
        linkElements: null,
        labelElements: null
    };

    return true;
}

export function setData(containerId, data) {
    const instance = graphInstances[containerId];
    if (!instance) {
        console.error('Graph instance not found:', containerId);
        return false;
    }

    // Store data
    instance.nodes = data.nodes.map(n => ({ ...n }));
    instance.links = data.links.map(l => ({ ...l }));

    // Render graph
    renderGraph(containerId);
    return true;
}

export function addNode(containerId, node) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.nodes.push({ ...node });
    renderGraph(containerId);
    return true;
}

export function addLink(containerId, link) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.links.push({ ...link });
    renderGraph(containerId);
    return true;
}

export function removeNode(containerId, nodeId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.nodes = instance.nodes.filter(n => n.id !== nodeId);
    instance.links = instance.links.filter(l => l.source.id !== nodeId && l.target.id !== nodeId);
    renderGraph(containerId);
    return true;
}

export function updateNode(containerId, nodeId, updates) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    const node = instance.nodes.find(n => n.id === nodeId);
    if (node) {
        Object.assign(node, updates);
        renderGraph(containerId);
    }
    return true;
}

export function clearGraph(containerId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.nodes = [];
    instance.links = [];
    renderGraph(containerId);
    return true;
}

export function zoom(containerId, scale) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    const svg = instance.svg;
    const currentTransform = d3.zoomTransform(svg.node());
    const newTransform = currentTransform.scale(scale);
    
    svg.transition()
        .duration(750)
        .call(d3.zoom().transform, newTransform);
    
    return true;
}

export function resetZoom(containerId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.svg.transition()
        .duration(750)
        .call(d3.zoom().transform, d3.zoomIdentity);
    
    return true;
}

export function focusNode(containerId, nodeId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    const node = instance.nodes.find(n => n.id === nodeId);
    if (!node) return false;

    const svg = instance.svg;
    const width = instance.config.width;
    const height = instance.config.height;
    
    const scale = 2;
    const x = -node.x * scale + width / 2;
    const y = -node.y * scale + height / 2;
    
    svg.transition()
        .duration(750)
        .call(d3.zoom().transform, d3.zoomIdentity.translate(x, y).scale(scale));
    
    return true;
}

export function highlightNode(containerId, nodeId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    // Reset all
    instance.nodeElements.attr('stroke', '#fff').attr('stroke-width', 2);
    instance.linkElements.attr('stroke', '#999').attr('stroke-width', 1)
        .attr('marker-end', 'url(#arrow-default)');

    // Highlight selected node
    const selectedNode = instance.nodes.find(n => n.id === nodeId);
    if (!selectedNode) return false;

    instance.nodeElements
        .filter(d => d.id === nodeId)
        .attr('stroke', '#ff6b6b')
        .attr('stroke-width', 4);

    // Highlight connected links
    instance.linkElements
        .filter(d => d.source.id === nodeId || d.target.id === nodeId)
        .attr('stroke', '#ff6b6b')
        .attr('stroke-width', 3)
        .attr('marker-end', 'url(#arrow-highlighted)');

    return true;
}

export function clearHighlights(containerId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.nodeElements.attr('stroke', '#fff').attr('stroke-width', 2);
    instance.linkElements.attr('stroke', '#999').attr('stroke-width', 1)
        .attr('marker-end', 'url(#arrow-default)');
    
    return true;
}

export function setLayout(containerId, layoutType) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    // Different layout algorithms can be applied here
    if (layoutType === 'hierarchical') {
        // Apply hierarchical layout
        instance.simulation
            .force('x', d3.forceX(instance.config.width / 2).strength(0.1))
            .force('y', d3.forceY(d => d.level * 100).strength(0.5));
    } else {
        // Default force layout
        instance.simulation
            .force('x', null)
            .force('y', null);
    }

    instance.simulation.alpha(1).restart();
    return true;
}

export function enableSimulation(containerId, enable) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    if (enable) {
        instance.simulation.alpha(1).restart();
    } else {
        instance.simulation.stop();
    }
    
    return true;
}

export function destroy(containerId) {
    const instance = graphInstances[containerId];
    if (!instance) return false;

    instance.simulation.stop();
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';
    }
    delete graphInstances[containerId];
    
    return true;
}

// Internal rendering function
function renderGraph(containerId) {
    const instance = graphInstances[containerId];
    if (!instance) return;

    const { g, simulation, config, colorScale, nodes, links } = instance;

    // Remove existing elements
    g.selectAll('*').remove();

    // Create link elements
    const linkElements = g.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', d => d.color || '#999')
        .attr('stroke-width', d => d.value || 1)
        .attr('marker-end', 'url(#arrow-default)');

    // Create node elements
    const nodeElements = g.append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', d => d.radius || config.nodeRadius)
        .attr('fill', d => d.color || colorScale(d.group || d.type || 'default'))
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .call(drag(simulation));

    // Add tooltips
    nodeElements.append('title')
        .text(d => d.label || d.id);

    // Create label elements
    const labelElements = g.append('g')
        .attr('class', 'labels')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .text(d => d.label || d.id)
        .attr('font-size', 10)
        .attr('dx', 12)
        .attr('dy', 4);

    // Store elements
    instance.nodeElements = nodeElements;
    instance.linkElements = linkElements;
    instance.labelElements = labelElements;

    // Update positions on simulation tick
    simulation.nodes(nodes);
    simulation.force('link').links(links);

    simulation.on('tick', () => {
        linkElements
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        nodeElements
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

        labelElements
            .attr('x', d => d.x)
            .attr('y', d => d.y);
    });

    simulation.alpha(1).restart();
}

// Drag behavior
function drag(simulation) {
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
}
