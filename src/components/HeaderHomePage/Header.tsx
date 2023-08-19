import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import { DispatchType, RootState } from '../../redux/store'
import { getCategoryApi } from '../../redux/reducers/courseReducer'
import '../../components/HeaderHomePage/Header.css'
import { USER_LOGIN } from '../../utility/config'
import { loginAction, loginActionApi } from '../../redux/reducers/userReducder'
import { history } from '../..'


type Props = {}

const Header = (props: Props) => {
  const keyInput: any = useRef(null)
  const keyInputMobile: any = useRef(null)
  const { arrcategory } = useSelector((state: RootState) => state.courseReducer)
  const { userLogin } = useSelector((state: RootState) => state.userReducer)
  const dispatch: DispatchType = useDispatch();

  const handleSubmitSearch = async (e: any) => {
    e.preventDefault()
    // console.log(keyInput.current.value);    
    if (keyInput.current.value !== '') {
      await history.push(`/timkiem/${keyInput.current.value}`)
      keyInput.current.value = ''
    }
  }
  

  const handleSubmitSearchMobile = async (e: any) => {
    e.preventDefault()
    // console.log(keyInputMobile.current.value);
    if (keyInputMobile.current.value !== '') {
      await history.push(`/timkiem/${keyInputMobile.current.value}`)
      keyInputMobile.current.value = ''
    }
  }

  const renderShowMobie = () => {
    const menuMobie = document.querySelector('.menuHeaderMobie')
    if (menuMobie) {
      menuMobie.classList.toggle('active')
    } else {
      return ''
    }
  }

  const renderCourseCate = () => {
    return arrcategory.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={`/courses/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink>
        </li>
      )
    })
  }

  useEffect(() => {
    if (userLogin?.accessToken) {
      const hideHelloInterval = setInterval(() => {
        clearInterval(hideHelloInterval);
      }, 5000);

      return () => {
        clearInterval(hideHelloInterval);
      };
    }
  }, [userLogin?.accessToken]);

  const getCategory = () => {
    const action = getCategoryApi();
    dispatch(action)
  }
  useEffect(() => {
    getCategory()
  }, []);

  console.log(arrcategory)

  const logOut = () => {
    localStorage.removeItem(USER_LOGIN);
    const action = loginAction({});
    dispatch(action);
    history.push('/');
  }

  const renderLogin = () => {
    if (userLogin?.accessToken) {
      return (
        <div className="headerAvatar"
        >
          {userLogin.maLoaiNguoiDung === 'GV' ? (
            <span className='headerSet'>
              <NavLink to="/admin">
                <i className="fas fa-cog"></i>
              </NavLink>
            </span>
          ) : (
            <></>
          )}
          <NavLink className='infoHeader' to={'/userProfile'}>
            <img className='avatar'
              src='https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600'
              alt="..."
            />

            <span className="logout" onClick={logOut}>
              <NavLink to="/trangchu">
                <i className="fas fa-power-off"></i>
              </NavLink>
            </span>
          </NavLink>
        </div>
      );
    } else {
      return <button className='btnGlobal'><NavLink to='/register'>Đăng nhập</NavLink></button>
    }
  };

  const setHeaderFixed = () => {
    const headerFixed = document.querySelector('.header')
    if (headerFixed) {
      if (window.scrollY >= 200) {
        headerFixed.classList.add('headerFixed')
      } else {
        headerFixed.classList.remove('headerFixed')
      }

    } else {
      return null
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setHeaderFixed)
    return () => {
      window.addEventListener('scroll', setHeaderFixed)
    }
  }, [])

  return (
    <>
      <section className='header'>
        <div className='headerLeft'>
          <NavLink to='/' className='textLogo'>
            {/* <span className='textE'>V</span>learning <i className="far fa-keyboard iconLogo"></i> */}
            <img src="./logo.png" alt="..." width={250} />
          </NavLink>
          <form action="#" onSubmit={handleSubmitSearch} ><input ref={keyInput} className='searchForm' type="text" placeholder="Tìm kiếm" /></form>
        </div>

        <div className='headerRight'>
          <ul className='menuHeader'>
            <li className='courseCate'><i className="fas fa-bars mr-1"></i><NavLink to="/">Danh mục</NavLink>
              <ul className='courseCateList'>
                {renderCourseCate()}
              </ul>
            </li>
            <li><NavLink to="/khoahoc">Khóa học</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li className='eventHeader courseCate'><NavLink to="/sukien">Sự kiện</NavLink>
            </li>
            <li><NavLink to="/thongtin">Thông tin</NavLink></li>
          </ul>
        </div>

        <div className='showIconHeader'>
          {renderLogin()}
          <div className='menuMobie'>
            <i onClick={renderShowMobie} className="fas fa-sort-down iconMenuMobie"></i>
            <ul className='menuHeaderMobie'>
              <li><form onSubmit={handleSubmitSearchMobile} action=""  ><input ref={keyInputMobile} className='searchFormMobile' type="text" placeholder="Tìm kiếm" /></form></li>
              <li className='courseCateMobie'><NavLink to="/">Danh mục</NavLink>
                <ul className='courseCateListMobie'>
                  {arrcategory.map((item, index) => {
                    return <NavLink key={index} className="dropdown-item" to={`/courses/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink>
                  })}
                </ul>
              </li>
              <li><NavLink to="/khoahoc">Khóa học</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li className='eventHeaderMobie courseCateMobie'><NavLink to="/sukien">Sự kiện</NavLink>
                <ul className='courseCateListMobie'>
                  <li><NavLink to="/sukien/newYear">Sự kiện Sale Đầu Năm</NavLink></li>
                  <li><NavLink to="/sukien/Noel">Sự kiện Giáng sinh</NavLink></li>
                  <li><NavLink to="/sukien/endYear">Sự kiện Cuối Năm</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/thongtin">Thông tin</NavLink></li>
              <li onClick={logOut}><NavLink to="/">Đăng xuất</NavLink></li>
            </ul>
          </div>
        </div>

      </section >
    </>
  )
}

export default Header