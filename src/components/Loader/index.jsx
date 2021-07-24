import React from "react"
import "./style.scss"

export default function Loader({ borderColor = '#7a5bff'}) {
  let styles = { 
    border: '6px solid ' + borderColor,
    borderTopColor: 'transparent',
    borderTopWidth: '6px'
  }

  return <div className="loader" style={styles}></div>
}
