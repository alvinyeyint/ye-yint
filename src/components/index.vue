<template>
	<div class="main-bg" ref="mainBg">
		<div class="page-wrapper">
			<div class="page-content-card">

				<!-- left side header content -->
				<div class="header-content">
					<div class="avatar">
						<img src="//lmpixels.com/wp/breezycv-wp-lin/demo4-dark/wp-content/uploads/sites/10/2020/06/main_photo.jpg">
					</div>
					<div class="header-title">
						<h3 class="mt-0">Ye Yint Aung</h3>
						<p>Web Developer</p>
					</div>
					<div class="social-link">
						<a href="https://www.linkedin.com/in/yeyintaung999" target="_blank">
							<i class="fa fa-linkedin" aria-hidden="true"></i>
						</a>
						<a href="https://www.facebook.com/ye.yint.99" target="_blank">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</a>
						<a href="https://www.instagram.com/yeyint_99/" target="_blank">
							<i class="fa fa-instagram" aria-hidden="true"></i>
						</a>
					</div>
					<div class="text-center">
						<span class="text-white">© 2021 All rights reserved.</span>
					</div>
				</div>


				<div class="dynamic-component">
					<!-- right side page content -->
					<!-- Cached component -->
					<keep-alive>
						<!-- Dynamic Component -->
						<component v-bind:is="currentTabComponent"></component>
					</keep-alive>
				</div>
			</div>
			<quick-menu 
				class="nav-menu"
				:menu-count=menuCount 
				:icon-class=icons 
				:menu-url-list=menuLists
				:position=menuPosition
				:backgroundColor="'#444444'"
				:color="'#fca072'"
				@process='menuClick'
				>		
			</quick-menu>
		</div>
	</div>
</template>

<script>
	import Profile from './profile'
	import AboutMe from './aboutMe'
	import Resume from './resume'
	import quickMenu from 'vue-quick-menu'

	export default {
		components: { Profile, AboutMe, Resume, quickMenu },
		data () {
			return {
				currentTabComponent: 'Profile',
				windowHeight: window.innerHeight,
				windowWidth: window.innerWidth,
				menuPosition: 'top-right',
				icons: ['fa fa-home', 'fa fa-user-o', 'fa fa-graduation-cap', 'fa fa-briefcase'],
				menuLists: ['Home', 'About', 'Resume', 'Job'],
				menuCount: 4,
				components: ['Profile', 'AboutMe', 'Resume', 'Job']
			}
		},
		methods: {
			onResize() {
				this.windowHeight = window.innerHeight
				this.windowWidth = window.innerWidth
			},
			menuClick (key) {
				this.currentTabComponent = this.components[key]
			}
		},
		beforeDestroy() { 
			window.removeEventListener('resize', this.onResize);
		},
		mounted () {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize)
			})
			const el = this.$refs.mainBg
			var movementStrength = 25
			var height = movementStrength / window.innerHeight
			var width = movementStrength / window.innerWidth
			el.addEventListener("mousemove", (e) => {
				var pageX = e.pageX - (this.windowWidth / 2)
				var pageY = e.pageY - (this.windowHeight / 2)
				el.style.setProperty('--x', width * pageX * -1 - 25 + 'px')
				el.style.setProperty('--y', height * pageY * -1 - 25 + 'px')
			})
		}
	}
</script>

<style lang="css">
.flip-scale-up-enter-active {
  animation: flip-scale-up 0.9s both;
}
.flip-scale-up-leave-active {
  /*animation: flip-scale-up 0.5s linear;*/
}
@keyframes flip-scale-up {
	0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  /*0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
    transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(2.5) rotate3d(1, 1, 0, 90deg);
    transform: scale(2.5) rotate3d(1, 1, 0, 90deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 180deg);
    transform: scale(1) rotate3d(1, 1, 0, 180deg);
  }*/
}
</style>

<style lang="sass">
.main-bg
	height: 100vh
	display: flex
	background: url('../assets/main_bg.png')
	background-color: #fca072
	background-size: cover
	background-repeat: repeat
	background-position: var(--x) var(--y)
	.page-wrapper
		height: 85vh
		width: calc(100% - 300px)
		background: linear-gradient(#444444, #444444)
		border-radius: 32px
		margin: auto
		.nav-menu.quick-menu
			cursor: pointer
			&:hover
				.menu .core-menu 
					.bar
						background: #fca072
						&:before
							background: #fca072
						&:after
							background: #fca072
		.page-content-card
			height: 100%
			display: flex
			.header-content
				display: inline-block
				float: left
				width: 40%
				height: 100%
				text-align: center
				overflow: auto
				.social-link
					text-align: center
					margin: 3em 0
					a
						text-decoration: none
						display: inline-block
						width: 15%
						color: #f1f1f1
						&:hover
							color: #fca072
						i
							font-size: 20px
				.header-title
					color: #f1f1f1
				.avatar
					padding: 65px 30px 10px
					img
						height: auto
						max-height: 150px
						width: auto
						max-width: 150px
						border-radius: 50%
			.dynamic-component
				background-color: #222
				border-radius: 30px
				display: inline-block
				width: 100%
				height: 100%
				float: right
				position: relative
				overflow-y: auto
			
</style>