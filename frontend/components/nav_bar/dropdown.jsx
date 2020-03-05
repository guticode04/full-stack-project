import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showDropdown = this.showDropdown.bind(this);
    this.ref = React.createRef();
  }

  showDropdown(e){
    if (this.state.show === false){

      e.preventDefault();
      this.setState({ show: true })
      const closeDropdown = (e) => {
        if ( !this.ref.current.contains(e.target)){
          this.setState( { show: false })
          document.removeEventListener('click', closeDropdown)
        }
      }
      document.addEventListener('click', closeDropdown)
    }
  }

  render(){
    return(
      <div className="dropdown" onClick={this.showDropdown} >
        <div className="dropdown-btn">
          <i className="fas fa-user"></i>
        </div>
        { this.state.show ? (

            <div ref={this.ref} className="dropdown-content">
              <div className="dropdown-list">
                <li onClick={this.props.logout}>
                  Sign out
                </li>
              </div>
            </div>
          ) : null 
        }
    </div >
    )
  }
}

export default Dropdown;