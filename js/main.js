$(document).ready(function(){
	$('#pagepiling').pagepiling({
		scrollingSpeed: 200,
		loopBottom: true,
		css3: true,
		navigation:{
			'position': 'right',
			'tooltips':['首页','项目','专业技能','教育背景']
		}
	});
});