import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { courseSearchList } from '../../redux/reducers/courseReducer';
import './SearchPage.css';
import { Props } from 'react-select';
import { DispatchType, RootState } from '../../redux/store';
import { http } from '../../utility/config';

export default function SearchPage(props: Props) {
    const dispatch = useDispatch();

    const { coursesSearchList } = useSelector((state: RootState) => state.courseReducer);

    useEffect(() => {
        courseSearchList;
    }, []);

    const courseSearchList = (tuKhoa: string) => {
        return async (dispatch: DispatchType) => {
            try {
                const searchResults = await http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}&MaNhom=GP01`);
                // Replace with actual search logic
                dispatch({
                    type: 'SEARCH_RESULTS_SUCCESS',
                    payload: searchResults,
                });
            } catch (error: any) {
                dispatch({
                    type: 'SEARCH_RESULTS_FAILURE',
                    payload: error.message,
                });
            }
        };
    };

    const rederSearchPage = () => {
        return coursesSearchList.map((course, index) => (
            <div key={index} className='myCourseItem'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4'>
                        <img
                            className='imgNet'
                            src={course.hinhAnh}
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "https://elearning0706.cybersoft.edu.vn/hinhanh/javascript-nang-cao_gp01.png";
                            }}
                            alt=""
                        />
                    </div>
                    <div className='col-xl-7 col-lg-6 cardNetContent'>
                        <h6>{course.tenKhoaHoc}</h6>
                        <p className='colorCardTitle'>
                            {course.moTa.length > 50 ? course.moTa.substr(0, 50) + '...' : 'ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều quy tắc và cách sử dụng khác nhau...'}
                        </p>
                        <div className="iconNetCard">
                            <span className="textCardTitle"><i className="far fa-clock iconOclock"></i> 8 giờ</span>
                            <span className="textCardTitle"><i className="far fa-calendar iconCalendar"></i> 23 giờ</span>
                            <span className="textCardTitle"><i className="fas fa-signal iconLevel "></i> All level</span>
                        </div>
                        <p className='iconStarNet'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </p>
                        <div className=''>
                            <img className='imgNetFooter' src={require('../../Assets/Img/imgInstrutors/instrutor10.jpg').default} alt="" />
                            <span className='ml-2'>Nguyễn Nam</span>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 cancelNet'>
                        <button className='btnGlobal'><NavLink to={`/chitiet/${course.maKhoaHoc}`}>Xem chi tiết</NavLink></button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
            <section className='searchPageContainer'>
                <div className='titleCourse'>
                    <h3>Tìm kiếm</h3>
                    <p>Kết quả tìm kiếm khóa học!!!</p>
                </div>
                <div className='searchPage'>
                    <div className='row'>
                        <div className='col-xl-2 col-lg-3 col-md-4 '>
                            {/* filter PC */}
                            <div className='navFilter'>
                                <h6><i className='fas fa-book-open'></i>Lọc</h6>
                                <div className='filterContainer'>
                                    <div className='filterItem'>
                                        <h6>Khóa học</h6>
                                        <ul>
                                            <li>
                                                <label className="BoxSearch">
                                                    Tất cả
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Front End
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Back End
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    HTML / CSS
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className='filterItem'>
                                        <h6>Cấp độ</h6>
                                        <ul>
                                            <li>
                                                <label className="BoxSearch">
                                                    Tất cả
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Mới bắt đầu
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Trung cấp
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Cao cấp
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className='filterItem'>
                                        <h6>Đánh giá</h6>
                                        <ul>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>

                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>

                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            {/*filter Mobile-tablet */}
                            <div className='navFilterRes'>
                                <input className='filterCheckInput' id='filterCheck' type="checkbox" />

                                <div className='overlayFilter'></div>
                                <label htmlFor="filterCheck">
                                    <h6 className='textFilter'><i className='fas fa-book-open'></i>Lọc</h6>
                                </label>
                                {/* <label htmlFor="filterCheck"></label> */}
                                <div className='filterContainer'>
                                    <div className='filterItem'>
                                        <h6>Khóa học</h6>
                                        <ul>
                                            <li>
                                                <label className="BoxSearch">
                                                    Tất cả
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Front End
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Back End
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    HTML / CSS
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className='filterItem'>
                                        <h6>Cấp độ</h6>
                                        <ul>
                                            <li>
                                                <label className="BoxSearch">
                                                    Tất cả
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Mới bắt đầu
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Trung cấp
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    Cao cấp
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className='filterItem'>
                                        <h6>Đánh giá</h6>
                                        <ul>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>

                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="BoxSearch">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>

                                                    <input type="checkbox" />
                                                    <span className='checkMark'><i className="fas fa-check"></i></span>
                                                </label>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-10 col-lg-9 col-md-8'>
                            <h6 className=''>Hiển thị {coursesSearchList.length} kết quả</h6>
                            <div className='mt-3 courseSearchResult'>
                                {rederSearchPage()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
