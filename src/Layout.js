// repulsive force - Coulomb's Force   F = K * q1 * q2 / r^2
// Traction Force - Hooke's Law  F = K * (x - x0)

import { distance, randomize } from './Utils';
import Point2D from './Point2D';

const nodes = [{
  name: 'a'
}, {
  name: 'b'
}];
const edges = [{
  source: 'a',
  target: 'b'
}];

const getNodesWithCoords = nodes => {
  const MIN = 0;
  const MAX = 10
  return nodes.map(node => {
    const copyNode = JSON.parse(JSON.stringify(node));// object.assign
    copyNode.coord = {
      x: randomize(MIN, MAX),
      y: randomize(MIN, MAX)
    };
    return copyNode;
  });
};

const getConnectedNodes = (edges, nodes, node) => {
  return edges.filter(edge => edge.source === node.name).map(edge => nodes.filter(n => edge.target === n.name)[0])
    .concat(edges.filter(edge => edge.target === node.name).map(edge => nodes.filter(n => edge.source === n.name)[0]));
}


const tempNodes = getNodesWithCoords(nodes);
const connectedNodes = getConnectedNodes(edges, tempNodes, tempNodes[1]);
console.log(connectedNodes);




