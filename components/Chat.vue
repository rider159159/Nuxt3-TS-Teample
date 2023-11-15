<script setup>
// 生成一組示範數據
const data = [30, 40, 50, 60, 70]

// 選擇容器
const svg = d3.select('#bar-chart-container')
  .append('svg')
  .attr('width', 400)
  .attr('height', 200)

// 創建長條
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => { return i * 80 })
  .attr('y', (d) => { return 200 - d })
  .attr('width', 75)
  .attr('height', (d) => { return d })
  .attr('fill', 'blue')
</script>

<template>
  <div class="bar-chart-container" />
</template>
