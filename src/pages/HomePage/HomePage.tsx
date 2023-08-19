import React, { useEffect, useState } from 'react'
import { DispatchType, RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { getCoursesApi } from '../../redux/reducers/courseReducer'
import { NavLink } from 'react-router-dom'
import '../HomePage/Home.css'
import WOW from 'wowjs'
import 'wowjs/css/libs/animate.css'
import Swal from 'sweetalert2'
import { Button } from 'antd'
import { USER_LOGIN, getStoreJson } from '../../utility/config'
import { registerCourseApi } from '../../redux/reducers/adminReducer'
import CountupNumber from '../../components/CountUp/CountupNumber'

type Props = {}

const HomePage = (props: Props) => {
  const { arrCourse } = useSelector((state: RootState) => state.courseReducer)
  console.log(arrCourse)
  const dispatch: DispatchType = useDispatch()

  const getCourses = async () => {
    const action = getCoursesApi();
    dispatch(action)
  }

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  useEffect(() => {
    getCourses()
  }, [])

  return (
    <>
      <div className='homePage'>
        {/* Slider */}
        <div className='row sliderHome'>
          <div className="col-lg-6 sloganBox">
            {/* Small box slder */}
            <div className='triangleTopRight'></div>
            <div className='smallBox smallboxLeftTop'></div>
            <div className='smallBox smallboxRightTop'></div>
            <div className='smallBox smallboxRightBottom'></div>
            <div className='smallBox smallboxRightBottom doubleBox'></div>
            {/* Slogan */}
            <div className='sloganContainer'>
              <div><img className='sliderPlaneImg' src={require('../../Assets/Img/imgSlider/paper_plane.png').default} alt="" /></div>
              <h1>Chào mừng</h1>
              <h1>đến với môi trường </h1>
              <h1>V<span>learning</span></h1>
              <button className='btnGlobal btnSlider mt-4'>Bắt đâu nào</button>
            </div>
          </div>
          {/* Slider Right */}
          <div className="col-lg-6">
            <div className='sliderRight'>
              <div className=''></div>
              <div>
                <img className='sliderMainImg' src={require('../../Assets/Img/imgSlider/slider2.png').default} alt="" />
                <img className='sliderSubImg sliderCodeImg' src={require('../../Assets/Img/imgSlider/code_slider.png').default} alt="" />
                <img className='sliderSubImg sliderMesImg ' src={require('../../Assets/Img/imgSlider/message_slider.png').default} alt="" />
                <img className='sliderSubImg sliderCloudImg' src={require('../../Assets/Img/imgSlider/clouds.png').default} alt="" />
                <img className='sliderSubImg sliderCloud2Img' src={require('../../Assets/Img/imgSlider/clouds.png').default} alt="" />
                <img className='sliderSubImg sliderCloud3Img' src={require('../../Assets/Img/imgSlider/clouds.png').default} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='infoCoureBox'>
          <div className='infoCourseHome'>
            <div className='infoItemHome infoLargeItem'>
              <div className='infoItemContent'>
                <h3>Khóa học</h3>
                <p><span>Học qua dự án thực tế</span>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Hơn 1000 bài tập và dự án thực tế</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Công nghệ cập nhật mới nhất</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='infoItemHome infoSmallItemA'>
              <div className='infoItemContent'>
                <h3>Lộ trình phù hợp</h3>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='infoItemHome infoSmallItemB'>
              <div className='infoItemContent'>
                <h3>Hệ thống học tập</h3>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='infoItemHome infoSmallItemA'>
              <div className='infoItemContent'>
                <h3>Giảng viên</h3>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Tương tác cùng mentor và giảng viên qua phần thảo luận</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Review code và đưa ra các nhận xét góp ý</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='infoItemHome infoSmallItemC'>
              <div className='infoItemContent'>
                <h3>Chứng nhận</h3>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>Kết nối CV của bạn đến với các đối tác của V learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Start */}
        <div className="container-xxl py-5 category">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
              <h1 className="mb-5">Courses</h1>
            </div>
            <div className="row g-3">
              <div className="col-lg-3 col-sm-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <NavLink to={`/courses/BackEnd`} className="position-relative d-block h-100 overflow-hidden" >
                  <img className="img-fluid position-absolute w-100 h-100" src="./images/backend.jpg" alt='...' style={{ objectFit: 'cover' }} />
                  <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                    <h5 className="m-0">Backend</h5>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-3 col-sm-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <NavLink to={`/courses/Design`} className="position-relative d-block h-100 overflow-hidden" >
                  <img className="img-fluid position-absolute w-100 h-100" src="./images/design3.jpg" alt='...' style={{ objectFit: 'cover' }} />
                  <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                    <h5 className="m-0">Web Design</h5>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-3 col-sm-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <NavLink to={`/courses/DiDong`} className="position-relative d-block h-100 overflow-hidden" >
                  <img className="img-fluid position-absolute w-100 h-100" src="./images/Mobile.png" alt='...' style={{ objectFit: 'cover' }} />
                  <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                    <h5 className="m-0">Mobile Development</h5>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-3 col-sm-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                <NavLink to={`/courses/FullStack`} className="position-relative d-block h-100 overflow-hidden" >
                  <img className="img-fluid position-absolute w-100 h-100" src="./images/cat-4.jpg" alt='...' style={{ objectFit: 'cover' }} />
                  <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                    <h5 className="m-0">FullStack Development</h5>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Start */}
        <div className="container-xxl py-5">
          <div className="container-md">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-5">Popular Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
              {arrCourse?.slice(0, 9).map((item, index) => {
                return <div className="col-lg-4 col-md-6 wow fadeInUp card-group" data-wow-delay="0.1s" key={index}>
                  <div className="course-item bg-light card">
                    <div className="position-relative overflow-hidden">
                      <img style={{ width: '100%', height: '250px', objectFit: 'cover' }} className="img-fluid " src={item.hinhAnh} alt='...' />
                      <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <NavLink to={`/detail/${item.maKhoaHoc}`} className="flex-shrink-0 btn btn-sm  px-3 border-end text-light" style={{ borderRadius: '30px 0 0 30px', backgroundColor: '#06BBCC' }}>Read More</NavLink>
                        <Button onClick={() => {
                          if (getStoreJson(USER_LOGIN)) {
                            const course = {
                              maKhoaHoc: item.maKhoaHoc,
                              taiKhoan: getStoreJson(USER_LOGIN)?.taiKhoan
                            }
                            const action = registerCourseApi(course);
                            dispatch(action);
                          } else {
                            Swal.fire({
                              icon: 'error',
                              title: 'Please login to register this course.',
                            })
                          }
                        }} className="flex-shrink-0 btn btn-sm  px-3 text-light" style={{ borderRadius: '0 30px 30px 0', backgroundColor: '#06BBCC' }}>Register</Button>
                      </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                      <h3 className="mb-0">$149.00</h3>
                      <div className="mb-3">
                        <small className="fa fa-star text-info" />
                        <small className="fa fa-star text-info" />
                        <small className="fa fa-star text-info" />
                        <small className="fa fa-star text-info" />
                        <small className="fa fa-star text-info" />
                        <small>(123)</small>
                      </div>
                      <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        {/* Courses End */}

        {/* Box Number */}
        <div className='boxNumberContainer mt-5'>
          <div className='row'>
            <div className='col-lg-3 p-4 col-md-6'>
              <div className='boxNumber' >
                <div><img src="./images/imgIcon/003-students.png" className='imgIcon' alt="" /></div>
                <div className='textNumber'>
                  <CountupNumber end='9000' />
                </div>
                <p className='textNumberTitle'>Học viên</p>
              </div>
            </div>
            <div className="col-lg-3 p-4 col-md-6">
              <div className='boxNumber'>
                <div><img src="./images/imgIcon/001-timetable.png" className='imgIcon' alt="" /></div>
                <div className='textNumber'>
                  <CountupNumber end='1000' />
                </div>
                <p className='textNumberTitle'>Khóa học</p>
              </div>
            </div>
            <div className="col-lg-3 p-4 col-md-6">
              <div className='boxNumber'>
                <div><img src="./images/imgIcon/002-hourglass.png" className='imgIcon' alt="" /></div>
                <div className='textNumber'>
                  <CountupNumber end='33200' />
                </div>
                <p className='textNumberTitle'>Giờ học</p>
              </div>
            </div>
            <div className="col-lg-3 p-4 col-md-6">
              <div className='boxNumber'>
                <div><img src="./images/imgIcon/004-teacher.png" className='imgIcon' alt="" /></div>
                <div className='textNumber'>
                  <CountupNumber end='400' />
                </div>
                <p className='textNumberTitle'>Giảng viên</p>
              </div>
            </div>
          </div>

        </div>

        {/* Top Rate Instructor */}
        <div className='mt-5 instrutorContainer'>
          <h6><a href="">Giảng viên hàng đầu</a></h6>
          <input type="checkbox" id='sliderInstrutors' hidden />
          <div className='instrutorItem'>
            <div className='row mt-4'>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor5.jpg" alt="" />
                  <h6>Big DadMoon</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia lĩnh vực</p>
                    <p>lập trình</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor6.jpg" alt="" />
                  <h6>IcarDi MenBor</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia ngôn ngữ</p>
                    <p>Vue Js</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor7.jpg" alt="" />
                  <h6>Bladin Slaham</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia hệ thống</p>
                    <p>máy tính</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor8.jpg" alt="" />
                  <h6>Chris Andersan</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia lĩnh vực</p>
                    <p>Full Skill</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor9.jpg" alt="" />
                  <h6>VueLo Gadi</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia lĩnh vực</p>
                    <p>Phân tích</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor10.jpg" alt="" />
                  <h6>Hoàng Nam</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia lĩnh vực</p>
                    <p>PHP</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                <div className='instrutorContent'>
                  <img src="./images/imgInstrutors/instrutor11.jpg" alt="" />
                  <h6>David Ngô Savani</h6>
                  <div className='textReviewRole'>
                    <p>Chuyên gia lĩnh vực</p>
                    <p>Front End</p>
                  </div>
                  <p className='reviewMentor'>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className='textStar'>  4.9</span>
                  </p>
                  <span className='textReviewBot'>100 Đánh giá</span>
                </div>
              </div>
            </div>
          </div>
          <div className='sliderDot'>
            <div className='dotLeft'>
              <label htmlFor="sliderInstrutors" className='labelDotLeft'></label>
              <div className='layDotLeft'></div>
            </div>
            <div className='dotRight'>
              <label htmlFor="sliderInstrutors" className='labelDotRight'></label>
              <div className='layDotRight'></div>
            </div>
          </div>
        </div>

        {/* Course Online */}
        <div className='review mt-5'>
          <div className='reviewStudent'>
            {/* <h6>Cảm nhận học viên</h6> */}
            <div className='triangleTopRight'></div>
            <div className='smallBox smallboxLeftTop'></div>
            <div className='smallBox smallboxRightBottom'></div>
            <div className='smallBox smallboxRightTop'></div>
            <div className='smallBox smallboxLeftBottom'></div>
            <div className='row'>
              <div className="col-md-6">
                <div className='reviewImg'>
                  <div className='bgStudentReview'></div>
                  <img src="./images/ImgAvatar/avatarReview.png" alt="" />
                </div>
              </div>
              <div className="col-md-6 quoteRight">
                <blockquote className='textQoute'>
                  <q>
                    Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                  </q>
                </blockquote>
                <p>Nhi Dev</p>
                <span className=''>Học viên xuất sắc</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage