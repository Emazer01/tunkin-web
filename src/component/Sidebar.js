import logo from '../images/menulogo.png';

export const Sidebar = () => {

    return (
        <div class="d-flex flex-column flex-shrink-0 p-2 p-md-3 text-white bg-dark sidebar sticky-top col-3 col-md-3" height="100vh">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={logo} className='col-12 col-md-3 p-md-1' />
                <span class="fs-4 ps-2 font-poppins d-none d-md-block"><span>Pusinfolahta TNI</span><br />
                    <span>Tunjangan Kinerja</span></span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto p-2">
                <li className='my-1'>
                    <a href="/" id='btn-beranda' class="sidebar-link p-2 rounded-2 text-decoration-none font-poppins sidebar-active text-white row">
                        <i class="bi bi-house-door-fill col-12 col-md-2 p-0 text-center fs-4" />
                        <span className='px-1 col-md-10 d-none d-md-block p-2'>Beranda</span>
                    </a>
                </li>
                <li className='my-1'>
                    <a href="/perubahan" id='btn-perubahan' class="sidebar-link p-2 rounded-2 text-decoration-none font-poppins  text-white row">
                        <i class="bi bi-pencil-fill col-12 col-md-2 p-0 text-center fs-4" />
                        <span className='px-1 col-md-10 d-none d-md-block p-2'>Perubahan</span>
                    </a>
                </li>
                <li className='my-1'>
                    <a href="/tambah" id='btn-tambah' class="sidebar-link p-2 rounded-2 text-decoration-none font-poppins text-white row">
                        <i class="bi bi-file-earmark-plus-fill col-12 col-md-2 p-0 text-center fs-4" />
                        <span className='px-1 col-md-10 d-none d-md-block p-2'>Tambah</span>
                    </a>
                </li>
            </ul>
            <hr />
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}