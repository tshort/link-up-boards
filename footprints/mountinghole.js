// MountingHole_2.2mm_M2_Pad_Via
// TODO add more sizes as param?
module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
    },
    body: p => `
    (footprint "MountingHole:MountingHole_2.2mm_M2" (layer "F.Cu")
      (tedit 56D1B4CB)
      ${p.at /* parametric position */} 
      (solder_mask_margin 1)
      (clearance 1.5)
      (fp_circle (center 0 0) (end 2.2 0) (layer "Cmts.User") (width 0.15) (fill none))
      (fp_circle (center 0 0) (end 2.45 0) (layer "F.CrtYd") (width 0.05) (fill none))
      (pad "" np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers *.Cu *.Mask))
    )`
}