// SI2302 surface-mount FET

module.exports = {
    nets: {
        SWDIO: 'SWDIO',
        SWCLK: 'SWDCLK',
        GND_P: 'GND_P',
        VCC: 'VCC'
    },
    body: p => 
    {
      return `
        (module four_pin_header (layer F.Cu) (tedit 62952B89)
          ${ p.at /* parametric position */ }
          (attr smd)
          (pad "1" thru_hole rect   locked (at 0 -3.81 ${ 90 + p.rot }) (size 1.5 1.5) (drill 0.9) (layers *.Cu *.Paste *.Mask) ${ p.net.VCC.str })
          (pad "2" thru_hole circle locked (at 0 -1.27 ${ 90 + p.rot }) (size 1.5 1.5) (drill 0.9) (layers *.Cu *.Paste *.Mask) ${ p.net.GND_P.str })
          (pad "3" thru_hole circle locked (at 0  1.27 ${ 90 + p.rot }) (size 1.5 1.5) (drill 0.9) (layers *.Cu *.Paste *.Mask) ${ p.net.SWDIO.str })
          (pad "4" thru_hole circle locked (at 0  3.81 ${ 90 + p.rot }) (size 1.5 1.5) (drill 0.9) (layers *.Cu *.Paste *.Mask) ${ p.net.SWCLK.str })
        )       
        `
    }
}

