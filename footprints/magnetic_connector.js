module.exports = {
  nets: {
    A: "GND_P",
    B: "VCC",
    C: "XTRA",
  },
  params: {
      side: 'F'
  },
  body: p => {
      var def_neg = p.param.side == 'F' ? "-" : "";
      var def_pos = p.param.side == 'F' ? "" : "-";
       return `
        (module magnetic_connector (layer ${ p.param.side }.Cu) (tedit 5DD4F656)
          ${ p.at /* parametric position */ }
          (pad "1" thru_hole rect (at 0 ${ def_pos }2.54 ${p.rot}) (size 1.8 1.8) (drill 0.8) (layers *.Cu *.Mask) ${p.net.A.str})
          (pad "2" thru_hole oval (at 0 0 ${p.rot})                (size 1.8 1.8) (drill 0.8) (layers *.Cu *.Mask) ${p.net.B.str})
          (pad "3" thru_hole oval (at 0 ${ def_neg }2.54 ${p.rot}) (size 1.8 1.8) (drill 0.8) (layers *.Cu *.Mask) ${p.net.C.str})
          (model ${p.param.model}
            (at (xyz 0 0 0))
            (scale (xyz 1 1 1))
            (rotate (xyz -90 0 0))
          )
        )
        `
  }
}

