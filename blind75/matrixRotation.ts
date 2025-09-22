export default function matrixRotation(matrix: number[][]): void {
  const n = matrix.length;
  const noOfLayers = Math.floor((n + 1) / 2);
  const noOfInnerLayers = Math.floor(n / 2);
  for (let layer = 0; layer < noOfLayers; layer++) {
    for (let innerLayer = 0; innerLayer < noOfInnerLayers; innerLayer++) {
      let tempTopLeft = matrix[n - 1 - innerLayer][layer];
      matrix[n - 1 - innerLayer][layer] = matrix[n - 1 - layer][n - 1 - innerLayer];
      matrix[n - 1 - layer][n - 1 - innerLayer] = matrix[innerLayer][n - 1 - layer];
      matrix[innerLayer][n - 1 - layer] = matrix[layer][innerLayer];
      matrix[layer][innerLayer] = tempTopLeft;
    }
  }
}
