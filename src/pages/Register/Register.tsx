import React, { useRef, useEffect, useState } from 'react';
import '../../style/style.scss';
import { useFormik } from 'formik';
import { UserLogin, UserRegister, loginActionApi, registerActionApi } from '../../redux/reducers/userReducder';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/store';
import { history } from '../..';
import * as Yup from 'yup'
import '../Register/Register.css'


type Props = {};

const Register = (props: Props) => {
  const { userLogin } = useSelector((state: RootState) => state.userReducer)
  const dispatch: DispatchType = useDispatch()
  const [isRegistered, setIsRegistered] = useState(false);
  const register = useFormik({
    initialValues: {
      hoTen: '',
      matKhau: '',
      soDT: '',
      maNhom: 'GP01',
      taiKhoan: '',
      email: ''
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string()
        .min(2, 'Tài khoản quá ít kí tự')
        .max(16, 'Tài khoản quá 16 kí tự')
        .required('Tài khoản không được để trống'),

      matKhau: Yup.string()
        .required('Mật khẩu không được để trống')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

      hoTen: Yup.string()
        .required('Tên không được để trống')
        .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

      email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

      soDT: Yup.string()
        .required('Số điện thoại không được để trống')
        .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
    }),
    onSubmit: (values: UserRegister) => {
      console.log(values)
      const action = registerActionApi(values);
      dispatch(action)
      setIsRegistered(true);
    }
  })

  const [classContainer, setClassContainer] = useState('container')

  const delID = () => {
    setClassContainer('container')
}

  const login = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: ''
    },
    onSubmit: (values: UserLogin) => {
      const action = loginActionApi(values);
      dispatch(action)

    }

  })
  useEffect(() => {
    if (isRegistered) {

      document.querySelectorAll<HTMLInputElement>('.form-container input').forEach((input) => {
        input.value = '';
      });
    }
  }, [isRegistered, register]);

  useEffect(() => {
    if (userLogin?.maLoaiNguoiDung === 'GV') {
      history.push('/admin');
    } else if (userLogin?.maLoaiNguoiDung === 'HV') {
      history.push('/');
    }
  }, [userLogin?.maLoaiNguoiDung]);

  console.log(userLogin)
  const containerRef = useRef<HTMLDivElement>(null);
  const signInEmailRef = useRef<HTMLInputElement>(null);
  const signUpEmailRef = useRef<HTMLInputElement>(null);

  const openSignIn = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove('right-panel-active');
      if (signUpEmailRef.current && signInEmailRef.current) {
        signInEmailRef.current.value = signUpEmailRef.current.value;
      }
    }
  };

  const openSignUp = () => {
    if (containerRef.current) {
      containerRef.current.classList.add('right-panel-active');
      if (signInEmailRef.current && signUpEmailRef.current) {
        signUpEmailRef.current.value = signInEmailRef.current.value;
      }
    }
  };

  return (
    
    <div className='register-page'>
      <div style={{ marginTop: '120px' }} className='container ' id='container' ref={containerRef}>
        <div className='form-container sign-up-container '>
          <form onSubmit={register.handleSubmit}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type='text' placeholder='username' id='taiKhoan' name='taiKhoan' onChange={register.handleChange} /> {register.errors.taiKhoan && register.touched.taiKhoan ? <div className='errorMessage'>{register.errors.taiKhoan}</div> : <div className='message'></div>}
            <input type='text' placeholder='Name' id='hoTen' name='hoTen' onChange={register.handleChange} />
            {register.errors.hoTen && register.touched.hoTen ? <div className='errorMessage'>{register.errors.hoTen}</div> : <div className='message'></div>}
            <input type='text' placeholder='Phone' id='soDT' name='soDT' onChange={register.handleChange} />
            {register.errors.soDT && register.touched.soDT ? <div className='errorMessage'>{register.errors.soDT}</div> : <div className='message'></div>}
            <select id="" className=''
              onChange={register.handleChange}
              name='maNhom'
              value={register.values.maNhom}>
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
              <option value="GP05">GP05</option>
              <option value="GP06">GP06</option>
              <option value="GP07">GP07</option>
              <option value="GP08">GP08</option>
              <option value="GP09">GP09</option>
              <option value="GP010">GP010</option>
            </select>
            <input type='email' id='emmail' name='email' placeholder='Email' ref={signUpEmailRef} onChange={register.handleChange} />
            {register.errors.email && register.touched.email ? <div className='errorMessage'>{register.errors.email}</div> : <div className='message'></div>}
            <input type='password' placeholder='Password' id='matKhau' name='matKhau' onChange={register.handleChange} />
            {register.errors.matKhau && register.touched.matKhau ? <div className='errorMessage'>{register.errors.matKhau}</div> : <div className='message'></div>}
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form onSubmit={login.handleSubmit}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              onChange={login.handleChange}
              type="text" placeholder="Tài khoản"
              name='taiKhoan'
              value={login.values.taiKhoan} />

            <input
              onChange={login.handleChange}
              type="password" placeholder="Mật khẩu"
              name='matKhau'
              value={login.values.matKhau} />
            <button type='submit'>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className='ghost' id='signIn' onClick={openSignIn}>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className='ghost' id='signUp' onClick={openSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Register;
