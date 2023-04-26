d3.csv('arboleda2.csv', d3.autoType).then(data => {
    console.log(data)
    
    dataplant = data.filter(d => {
        return (
          d.subcategoria == 'PLANTACIÓN DE ÁRBOL'
        )
    })
    
      let chart = Plot.plot({
        marks: [
            Plot.barX(dataplant,
              { 
                y: 'estado_del_contacto', 
                x: () => 100/4753,
                sort: 'estado_del_contacto', 
                fill: '#5FD068',
                stroke: '#5FD068',
                strokeWidth: 2,
              }),
            Plot.text([`89%`], {
                frameAnchor: "right",
                fontSize: 20,
                dy: -25,
                dx: -17,
                fill: '#5FD068',
                fontWeight: 800,
              }),
            Plot.text([`11%`], {
                frameAnchor: "right",
                fontSize: 20,
                dy: 28,
                dx: -560,
                fill: '#5FD068',
                fontWeight: 800,
              }),
            Plot.axisX(
                {
                  tickSize: 0,
                  fontSize: 0,
              }),
        ],
        x: {
          domain: [0, 100],
          label: "Porcentaje",
        }, 
        y: {
          label: "",
        },
        height: 130,
        width: 780,
        insetLeft: 9,
        marginLeft: 66,
        marginBottom: 0,
        line: true,
        nice: true,
        zero: true,
      style: {
        background: '#ffffff',
        color: '#1d1f1d',
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: 400,
      }
    })
    d3.select('#chart').append(() => chart)
  })