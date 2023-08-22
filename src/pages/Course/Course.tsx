import React, { useEffect, useState } from "react";
import "../../style/style.scss";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import {
    KhoaHoc,
    MyObject,
    User,
    getDetailCourseApi,
    getUserListApi,
    registerCourseApi,
    themKhoaHocApi,
} from "../../redux/reducers/adminReducer";
import { Button, Pagination } from "antd";
import {
    getCategoryApi,
    getCoursesApi,
} from "../../redux/reducers/courseReducer";
import { USER_LOGIN, getStoreJson } from "../../utility/config";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import WOW from 'wowjs'
import './Course.css'


type Props = {};

const Course = (props: Props) => {

    const { arrCourse } = useSelector((state: RootState) => state.courseReducer);


    console.log(arrCourse)


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

    const {
        courseDetail,
    } = useSelector((state: RootState) => state.adminReducer);

    const getArrCourses = async () => {
        const action = getCoursesApi();
        dispatch(action);
    };

    useEffect(() => {
        getArrCourses();
    }, []);
    console.log(arrCourse);

    console.log(courseDetail);
    const dispatch: DispatchType = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getCategory = () => {
        const action = getCategoryApi();
        dispatch(action);
    };

    useEffect(() => {
        getCategory();
    }, []);


    const renderCoursePag = () => {
        return (

            <div className="row g-4 justify-content-center">
                {arrCourse
                    ?.slice((currentPage - 1) * 6, currentPage * 6)
                    .map((item, index) => {
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

        )
    }

    return (
        <>
            <section>
                <div className='titleCourse'>
                    <h3>Khóa học</h3>
                    <p>Bắt đầu hành trình nào!!!</p>
                </div>
                <div className='coursesContainer'>
                    <div className='row'>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle1'>
                                <h6>Chương trình học</h6>
                                <i className="fas fa-laptop"></i>
                                <p>300</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle2'>
                                <h6>Nhà sáng tạo</h6>
                                <i className="fas fa-camera"></i>
                                <p>10000</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle3'>
                                <h6>Nhà thiết kế</h6>
                                <i className="fas fa-briefcase"></i>
                                <p>400</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle4'>
                                <h6>Bài giảng</h6>
                                <i className="fas fa-book"></i>
                                <p>3000</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle5'>
                                <h6>Video</h6>
                                <i className="fas fa-play-circle"></i>
                                <p>40000</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 coursesBoxItem">
                            <div className='coursesBox bgStyle6'>
                                <h6>Lĩnh vực</h6>
                                <i className="fas fa-dice-d20"></i>
                                <p>200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='courseListPage'>
                    <h6><i className="fas fa-bookmark"></i>Danh sách khóa học</h6>
                    <div className='row'>
                        {renderCoursePag()};
                    </div>
                </div>
                {/* Pagination */}
                <div className="courseListPage">
                    <ul className="pagination">
                        <Pagination
                            defaultCurrent={1}
                            total={arrCourse.length}
                            pageSize={6}
                            onChange={handlePageChange}
                        />
                    </ul>
                </div>
            </section>
        </>
    )
};
export default Course;
