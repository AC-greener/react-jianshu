import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store/index';
import { actionCreators as loginActionCreators } from '../../pages/login/store/index';
// 改变login组件对应的数据，所以要引入loginActionCreators
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component{
    getListArea() {
        // console.log(1);
        const {focused, list, page, totalPage, mouseIn} = this.props;
        const newList = list.toJS(); //页面在初始化的时候list为空  所以key值为undefined
        const pageList = [];
        if(newList.length) {
            for(let i = (page-1)*10; i < page*10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        
        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                            onMouseLeave={this.props.handleMouseLeave}
                >       <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => this.props.handlePageChange(page, totalPage, this.spinIcon) }
                        >
                                <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                      {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    };
    render() {
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        this.props.login ? 
                        <NavItem className='right' onClick={this.props.logout}>退出</NavItem> : 
                        <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused ': ''}
                                onFocus={() => this.props.handleInputFocus(this.props.list)}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>

                        <i className={this.props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}



const mapStateProps = (state) => {
    return {
        focused: state.get("header").get("focused"),
        list: state.get("header").get("list"),
        page: state.get("header").get("page"),
        totalPage: state.get("header").get("totalPage"),
        mouseIn: state.get("header").get("mouseIn"),
        login: state.getIn(['login', 'login'])
    }
}


// 分发事件
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.size <= 0) {    // 减少不必要的ajax请求
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.mouseEnter());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handlePageChange(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.tansform = 'rotate(' + (originAngle + 360)+ 'deg)'
            // console.log(spin.style.tansform);
            if(page < totalPage) {
                dispatch(actionCreators.pageChange(page + 1));
            } else {
                dispatch(actionCreators.pageChange(1));            
            }
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Header) ;