<template>
  <div class="graph-chart-container">
    <div class="graph-chart"></div>
    <div class="row legends">
      <div class="row type" v-for="(type, index) in nodeTypes" :key="index">
        <img :src="`/image/${type.name}-legend.svg`" alt="" width="18" height="18">
        <!-- used for cache images -->
        <img :src="`/image/${type.name}.svg`" alt="" width="0" height="0">
        <img :src="`/image/${type.name}-selected.svg`" alt="" width="0" height="0">
        <div class="label">{{type.label}}</div>
      </div>
    </div>
    <div class="info" v-if="info.show">
      <div class="name">{{info.name}}</div>
      <div class="intro">{{info.intro}}</div>
    </div>
  </div>  
</template>

<script>
import cytoscape from 'cytoscape';
// import popper from 'cytoscape-popper';
// import tippy from 'tippy.js';

// // import 'tippy.js/dist/tippy.css';
// import 'tippy.js/index.css';

// cytoscape.use(popper);

let chart = null;

// const makePersonTippy = (node, text) => {
//   return tippy(node.popperRef(), {
//     content: 
//       `<div style="padding: 16px;border-top: solid 4px #ffc13e;">
//         <div style="font-size: 24px; color: white; text-align: left;">${node.data('name')}</div>
//         <div style="margin-top: 14px;font-size: 14px;color: color: rgba(255, 255, 255, 0.7);text-align: left;">${text}</div>
//       </div>`,
//     trigger: 'manual',
//     arrow: false, 
//     placement: 'right',
//     hideOnClick: false,
//     multiple: false,
//     sticky: true
//   });
// };

// const showTippy = (node) => {
//   const tpy = node.data('tippy');
//   if (tpy) {
//     tpy.show();
//   }
// };

// const hideTippy = (node) => {
//   const tpy = node.data('tippy');
//   if (tpy) {
//     tpy.hide();
//   }
// };

const getStyles = (nodesTypes) => {
  const styles = [
    {
      selector: 'node',
      style: {
        label: 'data(id)',
        color: 'white',
        'font-size': 4,
        width: 5,
        height: 5,
        'background-color': 'transparent',
        'background-width': 20, 
        'background-height': 20,
        'background-clip': 'none',
        'bounds-expansion': 5,
        'text-valign': 'bottom',
        'text-margin-y': 3
      }
    },
    {
      selector: 'node:active, node.hover, node.click',
      style: {
        'overlay-opacity': 0
      }
    },    
    {
      selector: 'edge',
      style: {
        width: 0.2,
        'font-size': 2,
        'curve-style': 'bezier',
        'line-color': '#29377A',
        label: 'data(type)',
        color: 'white',
        'text-opacity': 0.8,
        'edge-text-rotation': 'autorotate',
        // 'text-background-color': 'none',
        // 'text-background-padding': 0.5,
        // 'text-background-shape': 'round-rectangle',
        // 'text-background-opacity': 1,
        // 'text-border-color': '#18204a',
        // 'text-border-width': 0.2,
        // 'text-border-opacity': 1,
        'target-arrow-color': '#29377A',
        'target-arrow-shape': 'triangle-backcurve',
        'arrow-scale': 0.2
      }
    },
    {
      selector: '.hover-darken, .click-darken',
      style: {
        opacity: 0.2
      }
    },
    {
      selector: '.hover-highlight, .click-highlight, .click-highlight.hover-darken, .click-highlight.click-darken, .hover-highlight.click-darken',
      style: {
        opacity: 1,
        'line-color': '#214CAA',
        'target-arrow-color': '#214CAA'
      }
    }
  ];
  nodesTypes.forEach(type => {
    styles.push({
      selector: `node[type="${type.label}"]`,
      style: {
        'background-image': `/image/${type.name}.svg`
      }
    });
    styles.push({
      selector: `node[type="${type.label}"].hover, node[type="${type.label}"].click`,
      style: {
        'background-image': `/image/${type.name}-selected.svg`
      }
    });
  });
  return styles;
};

export default {
  props: {
    nodes: {
      type: Array,
      default: () => []
    },
    edges: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chart: null,
      info: {
        show: false,
        name: '',
        intro: ''
      },
      nodeTypes: [{
        name: 'person',
        label: '人物'
      }, {
        name: 'orgnization',
        label: '组织'
      }, {
        name: 'address',
        label: '地点'
      }, {
        name: 'event',
        label: '事件'
      }, {
        name: 'religion',
        label: '宗教'
      }, {
        name: 'nationality',
        label: '国籍'
      }, {
        name: 'party',
        label: '党派'
      }]
    };
  },
  methods: {
    focus(id, duration = 1000) {
      const node = chart.nodes(`[id = "${id}"]`);
      this.clickNodeOperations(node, () => {
        chart.animate({
          fit: {
            eles: node.neighborhood()
          },
          complete: () => {
            chart.animate({
              center: {
                eles: node
              }
            }, {
              duration
            });
          }        
        }, {
          duration
        });
      });              
    },
    clickNodeOperations(node, callback) {
      chart.nodes().data('locked', false);
      chart.nodes().difference(node.neighborhood()).data('locked', true);
      this.removeHighlight('click');
      this.removeHighlight('hover');
      this.highlightAdjacent(node, 'click'); 
      if (callback) {
        callback();
      }
    },
    // type could be hover, click
    highlightAdjacent(node, type) {
      node.addClass(type);
      chart.elements()
        .difference(node.neighborhood())
        .not(node)
        .addClass(`${type}-darken`);
      node.neighborhood().addClass(`${type}-highlight`);
    },
    removeHighlight(type) {
      chart.elements().removeClass(type);
      chart.elements().removeClass(`${type}-highlight`);
      chart.elements().removeClass(`${type}-darken`);
    }, 
    showInfo(node) {      
      const intro = node.data('data').introduction;
      if (intro) {
        this.info.name = node.data('id');
        this.info.intro = intro;
        this.info.show = true;
      } else {
        this.info.show = false;
      }     
    },
    hideInfo() {
      this.info.show = false;
    } 
  },
  mounted() {
    const nodes = this.nodes.map(node => {
      return {
        group: 'nodes',
        data: {
          id: node.name,
          name: node.name,
          type: node.type,
          data: node.attribute
        }
      };
    });
    const edges = this.edges.map(edge => {
      return {
        group: 'edges',
        data: {
          id: `${edge.source}-${edge.target}`,
          source: edge.source,
          target: edge.target,
          type: edge.type
        }
      };
    });
    chart = cytoscape({
      container: this.$el.querySelector('.graph-chart'), // container to render in
      elements: [...nodes, ...edges],

      style: getStyles(this.nodeTypes),
      layout: {
        name: 'cose',
        nodeOverlap: 10,
        nodeRepulsion: 10000
      },
      wheelSensitivity: 0.4
    });


    chart.nodes().on('click', evt => {
      const node = evt.target;
      if (!node.data('locked')) {
        this.clickNodeOperations(node, () => {
          chart.animate({
            center: { // animate to center
              eles: node
            }
          }, {
            duration: 400
          });
        });        
      }      
    });

    // chart.elements('node[type="人物"]').forEach(node => {
    //   const data = node.data('data');
    //   // for now, only process introduction
    //   if (data.introduction) {
    //     const tpy = makePersonTippy(node, node.data('data').introduction);
    //     node.data('tippy', tpy);
    //   }      
    // });

    chart.nodes().on('mouseover', evt => {
      const node = evt.target;
      
      if (!node.data('locked')) {
        this.highlightAdjacent(node, 'hover');
        // showTippy(node);
        this.showInfo(node);
      }      
    });

    chart.nodes().on('mouseout', evt => {
      const node = evt.target;
      // hideTippy(node);
      // this.hideInfo();
      if (!node.data('locked')) {
        this.removeHighlight('hover');
      }      
    });

    chart.on('click', (evt) => {
      if (evt.target === chart) {
        this.removeHighlight('click');
        this.removeHighlight('hover');
        chart.elements().data('locked', false);
        this.hideInfo();
      }
    });

    chart.on('layoutstop', () => {      
      const centerNode = chart.nodes('[id = "黎智英"]'); 
      this.clickNodeOperations(centerNode);
      this.showInfo(centerNode);
      chart.animate({
        fit: {
          eles: centerNode.neighborhood()
        },
        center: { // animate to center
          eles: centerNode
        }
      }, {
        duration: 500
      });  
    });    
  }
};
</script>

<style lang="scss" scoped>
.graph-chart-container {
  position: relative;
  width: 100%;
  height: 100%;
  .graph-chart {
    width: 100%;
    height: calc(100% - 40px);
  }
  .legends {
    height: 40px;
    padding: 0 32px;
    background-color: rgba(26, 26, 26, 0.8);
    .type {
      align-items: center;
      margin-right: 48px;
      .label {
        margin-left: 8px;
        color: rgba(255, 255, 255, 0.64);
      }
    }
  }
  .info {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 16px;
    background-image: linear-gradient(180deg, rgba(19, 28, 43, 0.85) 0%, rgba(12, 15, 23, 0.85) 100%);
    border: solid 1px #11193f;
    border-top: solid 4px #ffc13e;
    max-width: 200px;
    z-index: 1000;
    .name {
      font-size: 24px; 
      color: white; 
    }
    .intro {
      margin-top: 14px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
