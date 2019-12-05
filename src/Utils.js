export function distance(point1, point2) {
  return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));
}

export function distanceSquare(point1, point2) {
  return (point1.x - point2.x) * (point1.x = point2.x) + (point1.y - point2.y) * (point1.y - point2.y);
}

export function randomize(min, max) {
  return Math.random() * (max - min) + min;
}
