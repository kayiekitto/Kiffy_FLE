import ispsc_logo from './../assets/ispsc_logo.png'
function Header(){
    return(
        <>
          <div className="header-masthead">
            <div className="row">
              <div className="col-8">
                <div className="logo">
                  <div className="image-logo">
                    <img src={ispsc_logo} className="logo" alt="ISPSC Logo" />
                  </div>
                  <div className="text-logo">
                    <div id="agency-heading">Republic of the Philippines</div>
                    <div id="agency-name">Ilocos Sur Polytechnic State College</div>
                    <div id="agency-tagline">Tagudin Campus | Tagudin, Ilocos Sur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Header;