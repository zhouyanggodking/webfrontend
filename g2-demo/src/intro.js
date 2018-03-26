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
  plotBackground: {
    fill: '276b1a',
    fillOpacity: 0.8,
    stroke: 'red',
    strokeOpacity: 1,
    opacity: 1,
    lineWidth: 3,
    radius: 7
  }
});

chart.source(data);
chart.coord().transpose();
chart.interval().position('genre*sold').color('genre');
chart.render();