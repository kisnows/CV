$(document).ready(function(){
	$('#pagepiling').pagepiling({
		scrollingSpeed: 100,
		loopBottom: true,
		css3: true,
		anchors: ['首页','项目经历','个人技能','教育背景','心仪职位','联系方式'],
		navigation:{
			'position': 'right',
			'tooltips':['首页','项目经历','个人技能','教育背景','心仪职位','联系方式']
		}
	});
});