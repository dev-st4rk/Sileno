import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg  width={props.width} height={props.height} fill={props.color} viewBox="0 0 294.539 291.637">
      <Path d="M 102 2.288803100585938 L 1.597427368164063 209 L 202.4025726318359 209 L 102 2.288803100585938 M 102 0 L 204 210 L 0 210 L 102 0 Z" stroke="none" fill="#f8295f"/>
    </Svg>
  )
}

export default SvgComponent
