import React from 'react'

function SectionTitle(props) {
  return (
    <div className="row">
        <div className="col-md-12">
            <div className="titlepage">
                <h2>{props.title}</h2>
            </div>
        </div>
    </div>
  )
}

export default SectionTitle