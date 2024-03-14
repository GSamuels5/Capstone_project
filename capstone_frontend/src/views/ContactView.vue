<template>
    <div>
        <div>

<h1>Contact us</h1>
        </div>
        <div class="formation align-content-sm-center justify-content-center bg-danger text-white">
  <form action="https://formspree.io/f/xbjnljop" method="post">
                <div class="forming row col-12 m-0">
                    <label for="firstname">First name:</label>
                    <input type="text" id="firstname" placeholder="enter your name" required >
                </div>
                <div class="forming row col-12 m-0" >
                    <label  for="surname">Surname:</label>
                    <input type="text" id="lastname" placeholder="enter your surname" required  >
                </div>
                <div class="forming row col-12 m-0">
                    <label for="emailAdd">Email:</label>
                    <input type="email" placeholder="enter your Email Address" required id="emailAdd" name="emailAdd">
                </div>
                <div class="forming row col-12 m-0">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" placeholder="Please enter your message"  rows="7" required ></textarea>
                  </div>
                <div class="forming col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
</div>
    </div>

</template>

<script>


export default {
 
}
</script>
<style lang="scss" scoped>

</style>