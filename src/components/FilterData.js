import React from 'react'

const FilterData = ({fdata}) => {
    const {launch_year}= fdata
    return (
        <div className="col-md-6 col-6">
            <p className="btn btn-sm btn-success">{launch_year}</p>
        </div>
    )
}

export default FilterData
