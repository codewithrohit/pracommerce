import React from 'react'
import NavLinkItem from './NavLinkItem'

function Navbar() {

    const navigation = [
        {
            name: 'Home',
            location: '/',
            active: true
        },
        {
            name: 'About',
            location: '/about',
            active: false
        },
        {
            name: 'Products',
            location: '/products',
            active: false
        },
        {
            name: 'Fashion',
            location: '/fashion',
            active: false
        },
        {
            name: 'News',
            location: '/news',
            active: false
        },
        {
            name: 'Contact',
            location: '/contact',
            active: false
        }
    ]
    
    return (
            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">

                        {navigation.map(function(item) {
                            return (
                                <NavLinkItem
                                    key={item.name}
                                    name={item.name}
                                    location={item.location}
                                    active={item.active}
                                />
                            )
                        })}
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar