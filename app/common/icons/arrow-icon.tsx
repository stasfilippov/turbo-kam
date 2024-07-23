import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path d={'M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z'} />
  </svg>
)

export default SvgComponent
