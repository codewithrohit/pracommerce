import React from 'react'

function Search() {
  return (
    <div className="search">
        <form action="">
            <input className="form_sea" type="text" placeholder="Search" name="search" />
            <button type="submit" className="seach_icon">
                <i className="fa fa-search"></i>
            </button>
        </form>
    </div>
  )
}

export default Search