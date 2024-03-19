<template>
  <div class="vh-100">
    <div>
      <h1>Contact us</h1>
    </div>
    <div
      class="formation container rounded shadow align-content-sm-center justify-content-center text-dark"
    >
      <form action="https://formspree.io/f/xqkrlond" method="post">
        <div class="forming row col-12 m-0">
          <label for="firstname">First name:</label>
          <input
            type="text"
            id="firstname"
            placeholder="enter your name"
            required
          />
        </div>
        <div class="forming row col-12 m-0">
          <label for="surname">Surname:</label>
          <input
            type="text"
            id="lastname"
            placeholder="enter your surname"
            required
          />
        </div>
        <div class="forming row col-12 m-0">
          <label for="emailAdd">Email:</label>
          <input
            type="email"
            placeholder="enter your Email Address"
            required
            id="emailAdd"
            name="emailAdd"
          />
        </div>
        <div class="forming row col-12 m-0">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Please enter your message"
            rows="7"
            required
          ></textarea>
        </div>
        <div class="forming col-12">
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>
      </form>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="red"
      class="bi bi-telephone-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="currentColor"
      class="bi bi-geo-alt-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped></style>
