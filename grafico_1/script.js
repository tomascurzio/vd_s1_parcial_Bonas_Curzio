d3.csv('arboleda2.csv', d3.autoType).then(data => {
    console.log(data)
    
    let chart = Plot.plot({
      marks: [
          Plot.barX(data,
            { 
              x: ()=>1, 
              fill: "Estado",
              sort: "Estado",
              stroke: "Estado",
              strokeWidth: 1,
            }),
          Plot.axisX(
              {
                tickSize: 0,
                fontSize: 0,
            }),
            Plot.text([`4.753`], {
              frameAnchor: "right",
              fontSize: 44,
              dx: -1476,
              dy: -90,
              fill: "#5FD068"
            }),
            Plot.text([`26.740`], {
              frameAnchor: "right",
              fontSize: 44,
              dx: -169,
              dy: -90,
              fill: "#E74646"
            }),
      ],
      color:{
        range: ["#5FD068", "#E74646"],
      },
      height: 190,
      nice: true,
      width: 1700,
      marginRight: 0,
      insetRight: 0,
      marginLeft: 0,
      marginTop: 60,
      insetLeft: 0,
      style: {
        background: '#ffffff',
        color: '#1d1f1d',
        fontFamily: 'Inter', 
      }
    })
    d3.select('#chart').append(() => chart)
  })