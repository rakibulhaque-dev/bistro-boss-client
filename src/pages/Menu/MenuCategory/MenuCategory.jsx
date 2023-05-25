import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid gap-10 my-16 md:grid-cols-2">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="mt-4 border-0 border-b-4 btn btn-outline">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;