<template>
    <div>
         <div class="container">
  <form action="action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">Naam</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="email">E-mail adres</label>
      </div>
      <div class="col-75">
        <input type="email" id="email" name="email" placeholder="E-mail adres">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="phone">Telefoon nummer <br> (optioneel)</label>
      </div>
      <div class="col-75">
        <input type="tel" id="phone" name="phone" placeholder="Telefoon nummer">
      </div>
    </div>
   
       <div class="row">
      <div class="col-25">
        <label for="subject">Uw project of vraag</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Beschrijf uw vraag hier" style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input class="header-button2" type="submit" value="VERZEND">
    </div>
  </form>
</div> 
    </div>
</template>

<style lang="scss" scoped>

$color-main-yellow: #fff82b;
$color-black: #242323;

input[type=text], input[type=email], input[type=tel], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
input[type=submit] {
  background-color: $color-main-yellow;
  color: $color-black;
  margin-top: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 20%;
    margin-left: 40%;
    margin-right: 40%
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.row {
    margin-top: 12px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
    
</style>