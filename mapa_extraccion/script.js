const mapaFetch = d3.json('barrios-caba.geojson')
const dataFetch = d3.csv('arboleda.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {

  datapoda = data.filter(d => {
    return (
      d.subcategoria == 'PODA DE ÁRBOL Y DESPEJE DE LUMINARIA' ||
      d.subcategoria == 'EXTRACCIÓN DE ÁRBOL'
    )
  })
  
  /* Agrupamos reclamos x barrio */
  const extraccionesPorBarrio = d3.group(datapoda, d => d.domicilio_barrio) // crea un Map
  console.log('extraccionesPorBarrio', extraccionesPorBarrio)
  
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      // Quantize continuo (cant. denuncias) -> discreto (cant. colores)
      type: 'quantize', 
      n: 20,
      scheme: 'reds',
      label: 'Cantidad de extracciones',
    },
    marks: [
      Plot.density(datapoda, { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 40}),
      Plot.geo(barrios, {
        stroke: '#8a8f96',
        title: d => `${d.properties.BARRIO}\n${d.properties.SOLICITUD} solicitudes`, // mostrar solicitudes
      }),
    ],
    height: 470,
    width: 470,
    style: {
      background: '#ffffff',
      color: '#1d1f1d',
      fontFamily: 'Schibsted Grotesk',
    }
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart').append(() => chartMap)
})
