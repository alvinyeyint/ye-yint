<template>
  <div class="content-card">
    <div class="alert alert-success py-2" role="alert" v-if="isSent">
      Thank you for getting in touch and get back touch with you soon!
    </div>
    <div class="container">
      <div class="row">
        <div class="col mb-5">
          <h2 class="title-font default-title-style text-white">
            Contact <span class="primary-color">Me</span>
          </h2>
        </div>

        <div class="row justify-content-end">
          <div class="col-md-10">
            <form @submit.prevent="submitForm">
              <div class="mb-4 row">
                <label
                  for="name"
                  class="col-sm-2 col-form-label primary-color d-flex"
                  >Name: <span class="text-danger">*</span></label
                >
                <div class="col-sm-8">
                  <input
                    required
                    type="text"
                    class="form-control rounded-pill shadow"
                    id="name"
                    v-model="formData.from_name"
                  />
                  <!-- <p v-if="isError">Please fill name.</p> -->
                </div>
              </div>
              <div class="mb-4 row">
                <label
                  for="email"
                  class="col-sm-2 col-form-label primary-color d-flex"
                  >Email: <span class="text-danger">*</span></label
                >
                <div class="col-sm-8">
                  <input
                    required
                    type="email"
                    class="form-control rounded-pill shadow"
                    id="email"
                    v-model="formData.from_email"
                  />
                </div>
              </div>

              <div class="mb-4 row">
                <label
                  for="subject"
                  class="col-sm-2 col-form-label primary-color d-flex"
                  >Subject: <span class="text-danger">*</span></label
                >
                <div class="col-sm-8">
                  <input
                    required
                    type="text"
                    class="form-control rounded-pill shadow"
                    id="subject"
                    v-model="formData.subject"
                  />
                </div>
              </div>

              <div class="mb-4 row">
                <label
                  for="message"
                  class="col-sm-2 col-form-label primary-color d-flex"
                  >Message: <span class="text-danger">*</span>
                </label>
                <div class="col-sm-8">
                  <textarea
                    required
                    class="form-control rounded-5"
                    id="message"
                    rows="5"
                    v-model="formData.message"
                  ></textarea>
                </div>
              </div>

              <div class="mb-4 row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                  <button
                    type="submit"
                    class="submit-btn float-end"
                    :disabled="isLoading"
                  >
                    <div
                      class="spinner-border spinner-border-sm text-light"
                      role="status"
                      v-if="isLoading"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                    <span
                      class="d-flex gap-2 align-items-center justify-content-end"
                      v-else
                      ><span>Submit</span
                      ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
                    ></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      isLoading: false,
      isSent: false,
      emailjsPubKey: "-dv4P8h8uFqkNkUwc",
      serviceId: "service_4k5ul07",
      templateId: "template_owudc89",
      formData: {
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // You may want to reset the form data after submission
      this.isLoading = true;
      emailjs
        .send("service_4k5ul07", "template_owudc89", {
          subject: this.formData.subject,
          from_email: this.formData.from_email,
          message: this.formData.message,
          from_name: this.formData.from_name,
        })
        .then(() => {
          this.formData.from_name = "";
          this.formData.from_email = "";
          this.formData.subject = "";
          this.formData.message = "";
          this.isLoading = false;
          this.isSent = true;
          setTimeout(() => {
            this.isSent = false;
          }, 5000);
        })
        .catch((err) => {
          console.error(err);
          this.isLoading = false;
        });
      console.log("Form submitted!", this.formData);
    },
  },
  mounted() {
    emailjs.init(this.emailjsPubKey);
  },
};
</script>

<style lang="css" scoped>
.submit-btn {
  box-shadow: 0px 10px 10px -8px rgb(0 0 0 / 78%);
  padding: 10px 25px;
  background-color: #fca072;
  border-radius: 30px;
  border: none;
  color: #f2f2f2;
}

.submit-btn:hover {
  background-color: #ff8e56;
}

.submit-btn:focus {
  outline: none;
}

.loading-spinner {
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; /* Apply rotation animation */
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
