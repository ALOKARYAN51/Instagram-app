import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@material-ui/core';
import statusimg from "../../images/pp1.png";

class StatusBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (
      <div>
        <div className='statusbar_container'>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
          <div className='status'>
            <Avatar className="statusbar_status" src={statusimg} />
            <div className='statusbar_text'>alok_aryan51</div>
          </div>
        </div>
      </div>
    );

  }
}

export default StatusBar;