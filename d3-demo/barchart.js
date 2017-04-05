var width = 900;
var height = 500;
var svg = d3.select('div')
    .append('svg').attr('width', width).attr('height', height);
var g = svg.append('g');


var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);

var x1 = d3.scaleBand().padding(0.05);
var y = d3.scaleLinear().rangeRound([height, 0]);

var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var data = [
    {
        name: 'IBM',
        currentPrice: 50,
        marketValue: 20
    },
    {
        name: 'GOOG',
        currentPrice: 10,
        marketValue: 40
    },
    {
        name: 'MSFT',
        currentPrice: 70,
        marketValue: 35
    },
    {
        name: 'ALI',
        currentPrice: 47,
        marketValue: 18
    }
];

var keys = ['currentPrice', 'marketValue'];

x0.domain(data.map(function (d) { return d.name }));
x1.domain(keys).rangeRound([0, x0.bandwidth()]);
y.domain([0, d3.max(data, function (d) {
    return d3.max(keys, function (key) {
        return d[key];
    });
})]);

var map = d3.map(data);

g.append('g')
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
        .attr('transform', function (d) { return 'translate(' + x0(d.name) + ', 0)'; })
    .selectAll('rect')
    .data(function (d) {
        var obj = keys.map(function (key) {
            return { key: key, value: d[key] }
        });
        return obj;
    })
    .enter()
    .append('rect')
    .attr('x', function (d) {
        return x1(d.key)
    })
    .attr('y', function (d) {
        return y(d.value);
    })
    .attr('width', x1.bandwidth())
    .attr('height', function (d) { return height - y(d.value);});
