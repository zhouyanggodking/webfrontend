const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
];

const chart = new G2.Chart({
  container: 'chart',
  // width: 600,
  // height: 300
  forceFit: true,
  // background: {
  //   fill: '276b1a',
  //   fillOpacity: 0.8,
  //   stroke: 'red',
  //   strokeOpacity: 1,
  //   opacity: 1,
  //   lineWidth: 3,
  //   radius: 7
  // },
  // plotBackground: {
  //   fill: '276b1a',
  //   fillOpacity: 0.8,
  //   stroke: 'red',
  //   strokeOpacity: 1,
  //   opacity: 1,
  //   lineWidth: 3,
  //   radius: 7
  // }
});

chart.source(data);
chart.coord().transpose();
chart.axis('genre', {
  line: {
    stroke: '#00ff00',
    lineWidth: 4
  }  
});
chart.axis('sold', {
  line: {
    stroke: '#00ffff',
    lineWidth: 4
  },
  // title: {
  //   position: 'center'
  // },
  grid: {
    align: 'end', //start, center, end
    type: 'polygon',
    lineStyle: {
      stroke: 'red',
      lineWidth: 2
    }
  }
});
chart.interval().position('genre*sold').color('genre');
chart.render();