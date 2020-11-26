
const Footer = (props)=>{
    return(
        <footer>
        <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
                <li className="list-inline-item">
                <a href="#">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-linkedin-square fa-fw fa-2x"></i>
                    </span>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="#">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-envelope-open fa-fw fa-2x"></i>
                    </span>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="#">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-github-square fa-fw fa-2x"></i>
                    </span>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="#">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-facebook-square fa-fw fa-2x"></i>
                    </span>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="#">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-google-plus-square fa-fw fa-2x"></i>
                    </span>
                </a>
                </li>
            </ul>
            <p className="copyright">Copyright &copy; Your Website 2020</p>
            </div>
        </div>
        </div>
    </footer>

    );
}


export default Footer;
