<template>
	<div class="m-5">
		<div class="about-me-block container">

			<div>
				<h2 class="title-font default-title-style">About Me</h2>
				<div class="row mb-2 mt-4">
					<div class="col-lg-6 col-md-12 col-sm-12">
						<p>Motivated web developer looking for a role as full-stack web developer. Passionate about building first-class web applications. Developing an HR software for enterprise at <a href="https://better.hr/" target="_blank" class="company-link">BetterHR</a>. Relevant skills include AWS, Database, Debugging, and more.</p>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12">
						<ul class="about-list pl-0">
							<li class="list-item">
								<span>Age</span>23
							</li>
							<li class="list-item">
								<span>Residence</span>Yangon
							</li>
							<li class="list-item">
								<span>Address</span>No-534 Kan Taw Street
							</li>
							<li class="list-item">
								<span>E-mail</span>yeyintaung9998@gmail.com
							</li>
							<li class="list-item">
								<span>Phone</span>+95 9254129300
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- What I do block -->
			<div class="my-2 container">
				<h3 class="subtitle-font default-title-style">What <span class="primary-color">I do</span></h3>
				<div class="row">
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="about-card">
							<img src="@/assets/tablet-and-laptop.svg" class="my-2">
							<h4 class="subtitle-inner-font mt-1">Web <span class="subtitle-style">Frontend</span></h4>
							<p>Frontend developer with 2+ years experiences of industry building websites. I take the designs created by web designers and use a mix of HTML, CSS, and JavaScript to code those website designs. I specialize in Html, Css/Scss/Sass, Vuejs(Nuxtjs) and React.</p>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="about-card">
							<img src="@/assets/backend.svg" class="my-2">
							<h4 class="subtitle-inner-font mt-1">Web <span class="subtitle-style">Backend</span></h4>
							<p>Backend developer with 2+ years experiences of industry web applications. Developing HR web-based software at BetterHR that was using 5000+ employees. I have also experience with working with Php(Laravel), MySQL, AWS, debugging and more.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Testimonials block -->
			<div class="my-4 container">
				<h3 class="subtitle-font default-title-style">Testimonials</h3>
				<div class="row testimonial-card-group">
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="testimonial-card">
							<div class="avatar">
								<img src="https://semantic-ui-vue.github.io/static/images/avatar/large/elliot.jpg">
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
							<div class="avatar-name-card d-flex">
								<div style="width: 85%">
									<h5>Person 1</h5>
									<a href="#">Company One</a>
								</div>
								<div class="quote-icon">
									<i class="fa fa-quote-right" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="testimonial-card">
							<div class="avatar">
								<img src="https://semantic-ui-vue.github.io/static/images/avatar/large/steve.jpg">
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
							<div class="avatar-name-card d-flex">
								<div style="width: 85%">
									<h5>Person 2</h5>
									<a href="#">Company Two</a>
								</div>
								<div class="quote-icon">
									<i class="fa fa-quote-right" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
					<!-- <carousel :items="2" :nav="false" :dots="false" :mouseDrag="false" :touchDrag="false" :pullDrag="false" :freeDrag="false">
						<template slot="prev">
							<span class="prev carousel-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
						</template>
						<template slot="next">
							<span class="next carousel-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
						</template>
						<div>
							<div class="testimonial-card">
								<div class="avatar">
									<img src="https://semantic-ui-vue.github.io/static/images/avatar/large/elliot.jpg">
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.</p>
								<div class="avatar-name-card d-flex">
									<div style="width: 85%">
										<h5>Person 1</h5>
										<a href="#">Company One</a>
									</div>
									<div class="quote-icon">
										<i class="fa fa-quote-right" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="testimonial-card">
								<div class="avatar">
									<img src="https://semantic-ui-vue.github.io/static/images/avatar/large/elliot.jpg">
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.</p>
								<div class="avatar-name-card d-flex">
									<div style="width: 85%">
										<h5>Person 1</h5>
										<a href="#">Company One</a>
									</div>
									<div class="quote-icon">
										<i class="fa fa-quote-right" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="testimonial-card">
								<div class="avatar">
									<img src="https://semantic-ui-vue.github.io/static/images/avatar/large/elliot.jpg">
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.</p>
								<div class="avatar-name-card d-flex">
									<div style="width: 85%">
										<h5>Person 1</h5>
										<a href="#">Company One</a>
									</div>
									<div class="quote-icon">
										<i class="fa fa-quote-right" aria-hidden="true"></i>
									</div>
								</div>
							</div>
						</div>
					</carousel> -->
				</div>
			</div>

			<div class="blog-end">
				<span></span>
			</div>

		</div>
	</div>
</template>

<script>
	// import Carousel from 'vue-owl-carousel'
	export default {
		// components: { Carousel }
	}
</script>

<style lang="sass">
.page-content-item
	background-color: #222
	border-radius: 30px
	display: inline-block
	width: 100%
	height: 100%
	float: right
	position: relative
.about-me-block
	color: #f1f1f1
	p
		font-size: 15px
	.about-list
		list-style: none
		padding-left: 0
		.list-item
			padding: 5px 10px 5px 0
			span
				width: 80px
				color: #fca072
				display: inline-block
				font-size: 15px
	.about-card
		margin: 1em 2em 1em 0
		img
			width: 50px
			height: auto
			opacity: .7
	.testimonial-card-group
		overflow-x: auto
		position: relative
		& > div
			margin-top: 2em
		.carousel-nav
			position: absolute
			top: 0
			right: 0
			text-align: center
			background-color: #444
			border: 1px solid #444
			color: #d5d5d5
			border-radius: 5px
			cursor: pointer
			z-index: 99
			&:hover
				background-color: #fca072
				border-color: #fca072
				i
					color: #fff
			i
				font-size: 32px
				padding: 0px 13px
		.testimonial-card
			width: 90%
			margin-top: 3em
			border: 1px solid #f1f1f1
			border-radius: 32px
			padding: 0 1.5em
			.avatar
				text-align: center
				img
					// position: absolute
					width: 100px
					border-radius: 50%
					height: auto
					margin: -50px auto 0 auto
			p
				margin: 1em 0
				text-align: left
				line-height: 1.75em
			.avatar-name-card
				margin: 1em 0
				.quote-icon
					i
						font-size: 40px
						color: #fca072
				h5
					font-size: 1.4rem
					font-weight: bold
					margin-bottom: 0
					line-height: 0.9
				a
					text-decoration: none
					color: #0099cc
					&:hover
						color: #006699
</style>