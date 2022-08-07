// SI2302 surface-mount FET

module.exports = {
    nets: {
        GND: 'GND',
        GND_P: 'GND_P',
        VCC: 'VCC',
    },
    params: {
        side: 'F'
    },
    body: p => 
    {
      var def_neg = p.param.side == 'F' ? "-" : "";
      var def_pos = p.param.side == 'F' ? "" : "-";
      var flip = p.param.side == 'F' ? -1 : 1;
      return `
        (module SOT23 (layer ${ p.param.side }.Cu) (tedit 62952B87)
                ${ p.at /* parametric position */ }
          (fp_text value SOT23 (at 0.12719 2.77275 0) (layer ${ p.param.side }.Fab)
            (effects (font (size 0.640960629921 0.640960629921) (thickness 0.15)))
          )
          (pad 3 smd rect (at 0.0   ${ def_neg }1.1 ${ p.rot }) (size 1.0 1.4) (layers ${ p.param.side }.Cu ${ p.param.side }.Mask ${ p.param.side }.Paste)  ${ p.net.GND_P.str })
          (pad 2 smd rect (at 0.95  ${ def_pos }1.1 ${ p.rot }) (size 1.0 1.4) (layers ${ p.param.side }.Cu ${ p.param.side }.Mask ${ p.param.side }.Paste)  ${ p.net.GND.str })
          (pad 1 smd rect (at -0.95 ${ def_pos }1.1 ${ p.rot }) (size 1.0 1.4) (layers ${ p.param.side }.Cu ${ p.param.side }.Mask ${ p.param.side }.Paste)  ${ p.net.VCC.str })
          (fp_line (start 1.4224 -0.6604) (end 1.4224 0.6604) (layer ${ p.param.side }.Fab) (width 0.2032))
          (fp_line (start 1.4224 0.6604) (end -1.4224 0.6604) (layer ${ p.param.side }.Fab) (width 0.2032))
          (fp_line (start -1.4224 0.6604) (end -1.4224 -0.6604) (layer ${ p.param.side }.Fab) (width 0.2032))
          (fp_line (start -1.4224 -0.6604) (end 1.4224 -0.6604) (layer ${ p.param.side }.Fab) (width 0.2032))
          (fp_line (start -1.4224 0.1524) (end -1.4224 -0.6604) (layer ${ p.param.side }.SilkS) (width 0.2032))
          (fp_line (start -1.4224 -0.6604) (end -0.7636 -0.6604) (layer ${ p.param.side }.SilkS) (width 0.2032))
          (fp_line (start 1.4224 -0.6604) (end 1.4224 0.1524) (layer ${ p.param.side }.SilkS) (width 0.2032))
          (fp_line (start 0.7636 -0.6604) (end 1.4224 -0.6604) (layer ${ p.param.side }.SilkS) (width 0.2032))
        )       
    `
    }
}