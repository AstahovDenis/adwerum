function Nav(){
    return(
        <>
            <div className='nav'>
                <ul>
                    <li className='nav-item'><a href='#' className='nav-link'>About Us</a></li>
                    <li className='nav-item'><a href='#' className='nav-link'>Create Post</a></li>
                    <li className='nav-item'><a href='/login' className='nav-link'>LogIn</a></li>
                    <li className='nav-item'><a href='/register' className='nav-link'>SignUp</a></li>
                </ul>
            </div>
        </>
    )
}
export default Nav