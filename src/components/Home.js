import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'
import {  Link } from 'react-router-dom'
import logo  from '../img/logo.svg'
import 'font-awesome/css/font-awesome.min.css';

function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}
export default class Home extends Component {
    state = { loginMessage: null }

    handleSubmit = (e) => {
        e.preventDefault()
        login(this.email.value, this.pw.value)
            .catch((error) => {
                this.setState(setErrorMsg('Invalid username/password.'))
            })
    }
    resetPassword = () => {
        resetPassword(this.email.value)
            .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
            .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }


        render () {
    return (
      <div className="row">
          <div className="col-md-8 login-left">
              <div className="text-center">
                  <img src={logo} alt={"logo"} className="logo"/>
                  <h3>เว็บแอปพลิเคชันสำหรับเซอร์ไพรส์คนพิเศษ</h3>
                  
              </div>
              <div className="row">
                  <div className="col-md-12">
                     <div className="content_set">
                         <i className="fa fa-venus-mars"></i>
                         <h5 className="">มอบกุหลาบให้กับคนรัก</h5>
                     </div>
                  </div>
                  <div className="col-md-12">
                      <div className="content_set">
                          <i className="fa fa-venus-mars"></i>
                          <h5 className="">เซอร์ไพรส์วันเกิดเพื่อนรัก</h5>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="content_set">
                          <i className="fa fa-heart"></i>
                          <h5 className="">บอกความในใจให้คนที่แอบชอบ</h5>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="row">
                  <div className="col-xs-1"></div>
                  <div className="col-md-10">
                      <h1 className="text-center myh">เข้าสู่ระบบ</h1>
                      <br/>
                      <form onSubmit={this.handleSubmit}>
                          <label>อีเมล</label>
                          <input ref={(email) => this.email = email} placeholder="example@email.com" className="lb-button"/>
                          <br/>
                          <label>รหัสผ่าน</label>

                          <input type="password" placeholder="* * * * * * * *" ref={(pw) => this.pw = pw} className="lb-button"/>
                          {
                              this.state.loginMessage &&
                              <div className="alert alert-danger" role="alert">
                                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                  <span className="sr-only">ผิดพลาด:</span>
                                  &nbsp;ชื่อผู้ใช้งานหรือรหัสผ่านอาจไม่ถูกต้อง <a href="#" onClick={this.resetPassword} className="alert-link">ลืมรหัสผ่าน?</a>
                              </div>
                          }
                          <br/>
                          <button type="submit" className="lb-submit pull-right">เข้าสู่ระบบ</button>


                          <hr/>
                          <br/>
                          <br/>
                          <h5 className="text-center">
                              <Link to="/register" className="navbar-brand">ยังไม่มีบัญชีผู้ใช้ใช่หรือไม่? สมัครสมาชิก</Link>
                          </h5>



                      </form>
                  </div>
                  <div className="col-xs-1"></div>

              </div>




              <div className="credit">
                  <h6 className="text-center">
                      copyright (c) 13580183 Krittanai Moungnoi <br/><br/>
                      ICT::Silpakorn University
                  </h6>
              </div>
          </div>
      </div>
    )
  }
}