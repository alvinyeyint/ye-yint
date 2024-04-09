<template>
  <div class="content-card">
    <div class="container">
      <div>
        <h2 class="title-font default-title-style">Resume</h2>

        <div class="row mt-5">
          <div class="col-lg-8 col-md-12 education-timeline">
            <h3 class="subtitle-font default-title-style mb-4">Educations</h3>
            <!-- Latest update -->
            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'2015-01 - 2019-01'"
              title="Beachelor of Computer Science"
              description="Dagon University"
              icon="school"
              color="turquoise"
            />

            <!-- Yet another update -->
            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'2019-01 - Current'"
              title="Diploma in English"
              description="Seameo Chat - Seameo Regional Centre For History"
              icon="school"
              color="blue"
              is-last
            />

            <br /><br />

            <h3 class="subtitle-font default-title-style mb-4">Experience</h3>
            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'Nov 2023 - Present'"
              title="Senior Software Engineer"
              description="K-Link Myanmar · Full-time"
              icon="code"
              color="orange"
            />

            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'Aug 2022 - Oct 2023'"
              title="Frontend Software Engineer"
              description="KBZ Bank · Full-time"
              icon="code"
              color="orange"
            />

            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'Jan 2022 - Aug 2022'"
              title="Senior Fullstack Web Developer"
              description="BetterHR, San Chaung, Yangon"
              icon="code"
              color="orange"
            />

            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'Nov 2019 - Dec 2021'"
              title="Senior Web Developer"
              description="BetterHR, San Chaung, Yangon"
              icon="code"
              color="orange"
            />

            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'Jan 2019 - Oct 2019'"
              title="Web Developer"
              description="BetterHR, San Chaung, Yangon"
              icon="code"
              color="black"
              is-last
            />
            <vue-timeline-update
              :date="new Date('2020-01')"
              :dateString="'Jan 2018 - Dev 2018'"
              title="Junior Web Developer"
              description="Nexlabs · Full-time"
              icon="code"
              color="turquoise"
              is-last
            />
          </div>
          <div class="col-lg-4 col-md-12">
            <h3 class="subtitle-font default-title-style mb-4">
              Frontend Skills
            </h3>
            <ul class="skills-progress">
              <li v-for="(skill, index) in frontendSkills" :key="index">
                <div>
                  {{ skill.name
                  }}<span class="percent__span">{{ skill.percent }}%</span>
                </div>
                <k-progress
                  :percent="skill.percent"
                  status="success"
                  :show-text="false"
                  :color="'#fca072'"
                ></k-progress>
              </li>
            </ul>
            <br /><br />
            <h3 class="subtitle-font default-title-style mb-4">
              Backend Skills
            </h3>
            <ul class="skills-progress">
              <li v-for="(skill, index) in backendSkills" :key="index">
                <div>
                  {{ skill.name
                  }}<span class="percent__span">{{ skill.percent }}%</span>
                </div>
                <k-progress
                  :percent="skill.percent"
                  status="success"
                  :show-text="false"
                  :color="'#fca072'"
                ></k-progress>
              </li>
            </ul>
            <br /><br />
            <h3 class="subtitle-font default-title-style mb-4">Languages</h3>
            <ul class="skills-progress">
              <li>
                <div>English<span class="percent__span">60%</span></div>
                <k-progress
                  :percent="60"
                  status="success"
                  :show-text="false"
                  :color="'#fca072'"
                ></k-progress>
              </li>
            </ul>
            <br />
            <br />
            <h3 class="subtitle-font default-title-style mb-4">Knowledges</h3>
            <ul class="knowledge-lists">
              <li v-for="(item, index) in knowledges" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="row"></div>
      </div>
      <div class="blog-end">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontendSkills: [
        { name: "HTML", percent: 90 },
        { name: "CSS/SCSS/SASS", percent: 90 },
        { name: "JavaScript", percent: 80 },
        { name: "Vue", percent: 90 },
        { name: "React", percent: 70 },
      ],
      backendSkills: [
        { name: "Nodejs", percent: 60 },
        { name: "PHP", percent: 75 },
        { name: "Laravel", percent: 85 },
        { name: "MySQL", percent: 90 },
      ],
      knowledges: ["Problem Solving", "Communication", "Flexibility", "AWS"],
    };
  },
};
</script>

<style lang="sass">
.k-progress-outer
	padding-right: 0!important
.education-timeline
	.gb-vue-timeline-update__ago
		line-height: 20px!important
	.gb-vue-timeline-update__center
		margin-left: 35px!important
	.gb-vue-timeline-update__left
		// width: 70px!important
	.gb-vue-timeline-update__title
		font-size: 16px!important
		text-transform: capitalize!important
		margin-bottom: 0!important
		line-height: 25px!important
	.gb-vue-timeline-update__description
		font-size: 14px!important
</style>
