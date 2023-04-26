d3.csv('arboleda2.csv', d3.autoType).then(data => {
    console.log(data)
    
    datapoda = data.filter(d => {
        return (
          d.subcategoria == 'PODA DE ÁRBOL Y DESPEJE DE LUMINARIA' ||
          d.subcategoria == 'EXTRACCIÓN DE ÁRBOL'
        )
    })
    
    let chart = Plot.plot({
      marks: [
          Plot.barX(datapoda,
            { 
              y: 'estado_del_contacto', 
              x: () => 100/26740,
              sort: 'estado_del_contacto', 
              fill: '#E74646',
              stroke: '#E74646',
              strokeWidth: 2,
            }),
          Plot.text([`56%`], {
              frameAnchor: "right",
              fontSize: 20,
              dy: -23,
              dx: -245,
              fill: '#E74646',
              fontWeight: 800,
            }),
          Plot.text([`44%`], {
              frameAnchor: "right",
              fontSize: 20,
              dy: 28,
              dx: -322,
              fill: '#E74646',
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
      fontWeight: 500,
    }
    })
    d3.select('#chart').append(() => chart)
  })