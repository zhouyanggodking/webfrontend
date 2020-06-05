<template>
  <div class="home">
  </div>
</template>

<script>
import G6 from '@antv/g6';

export default {
  methods: {
    getData() {
      return fetch('/data/rel.json').then(res => res.json());
    }
  },
  async mounted() {
    const data = await this.getData();

    const minimap = new G6.Minimap({
      size: [100, 100],
      type: 'delegate'
    });
    
    const graph = new G6.Graph({
      container: this.$el,
      width: 500,
      height: 500,
      animate: true,
      linkCenter: true,
      modes: {
        default: ['drag-canvas', 'drag-node', 'zoom-canvas']
      },
      defaultNode: {
        size: 10,
        style: {
          fill: 'cyan'
        }
      },
      defaultEdge: {
        style: {
          stroke: 'purple',
          endArrow: true
        },
        labelCfg: {
          autoRotate: true
        }
      },
      layout: {
        type: 'force',
        preventOverlap: true,
        linkDistance: 100
      },
      plugins: [minimap]
    });

    graph.data(data);
    graph.render();
  }
};
</script>

<style lang="scss">
.home > canvas {
  border: solid 1px purple;
}
</style>
