import React from 'react';

function Footer() {
    return (
        <footer className="py-3 border-top border-secondary">
            <ul className="nav justify-content-center align-items-center">
                <li className="nav-item">
                    <a className="nav-link text-muted d-flex align-items-center"
                        href="#fb">
                        {/* target="_blank" rel="noopener noreferrer" */}
                        <i className="bi bi-facebook fs-2"></i>
                        <span className='ms-2'>DeniseMarie</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted d-flex align-items-center"
                        href="#email">
                        {/* target="_blank" rel="noopener noreferrer" */}
                        <i className="bi bi-envelope fs-2"></i>
                        <span className='ms-2'>DeniseMarie@gmail.com</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;