import React from 'react'

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop'
  },
  {
    id: 3,
    name: 'About',
    link: '/#about'
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blog'
  }
]
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z40'>
      <div className='py-4'>
        <div className='container'>
            {/* Logo and Links section */}
                <div>
                    <a 
                      href="#" className='text-primary font-semibold 
                      tracking-widest text-2xl uppercase 
                      sm:text-3xl'
                    >
                        ESHOP
                    </a>
                    {/* Menu Items */}
                    <div>
                      <ul> 
                        {
                          MenuLinks.map((data, index) => (
                            <li>
                              <a href='#'>{data.name}</a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                </div>
            {/* Navbar Right section */}
                <div>
                  <div>
                    <div>

                    </div>
                  </div>
                </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
