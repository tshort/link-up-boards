// MountingHole_2.2mm_M2_Pad_Via
// TODO add more sizes as param?
const dx = 0.5
const dy = 0.866
module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
        length: 1
    },
    body: p => `
    (footprint "MountingHole:MountingHole_3.2mm_M3" (layer "F.Cu")
      ${p.at /* parametric position */} 
      (pad "" np_thru_hole circle (at ${p.param.length} 0) (size 3.0 3.0) (drill 3.0) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at ${-p.param.length*dx} ${p.param.length*dy}) (size 3.0 3.0) (drill 3.0) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at ${-p.param.length*dx} ${-p.param.length*dy}) (size 3.0 3.0) (drill 3.0) (layers *.Cu *.Mask))
    )`
}
