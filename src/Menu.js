import React from 'react'

const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((menuItems) => {
                const { id, title, img, desc } = menuItems;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} alt={title} className='photo' />
                    </article>
                );
            })}
        </div>
    );
}

export default Menu;