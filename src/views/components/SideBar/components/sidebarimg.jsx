import React from 'react';
function SideBarImg(props){
	const {bgStyle,userInfo,level} = props;
	return(
			<div className = 'sidebar-img-wrapper' style = {bgStyle}>
					<div className = 'sidebar-img-box'>
						{
							userInfo.avatarUrl?
							<img className = 'sidebar-img' src = {userInfo.avatarUrl}></img>
							:''
						}
					</div>
					<div className = 'sidebar-img-user'>
						{
							level !=''?
							<div>
								<span className = 'user-name'>{userInfo.nickname}</span>
								<span className = 'user-level'>Lv.{level}</span>
							</div>
							:''
						}
					</div>
			</div>
	)
}

export default SideBarImg