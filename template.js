module.exports = {
  HTML: function () {
    return `
   <!DOCTYPE html>
<html>
  <title>W3.CSS Template</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>

  <style>
    html,
    body,
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: "Raleway", sans-serif;
    }
  </style>
  <body class="w3-light-grey">
    <!-- Top container -->
    <div class="w3-bar w3-top w3-black w3-large" style="z-index: 4">
      <button
        class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
        onclick="w3_open();"
      >
        <i class="fa fa-bars"></i>  Menu
      </button>
      <span class="w3-bar-item w3-right">Logo</span>
    </div>

    <!-- Sidebar/menu -->
    <nav
      class="w3-sidebar w3-collapse w3-white w3-animate-left"
      style="z-index: 3; width: 300px"
      id="mySidebar"
    >
      <br />
      <div class="w3-container w3-row">
        <div class="w3-col s4">
          <img
            src="/w3images/avatar2.png"
            class="w3-circle w3-margin-right"
            style="width: 46px"
          />
        </div>
        <div class="w3-col s8 w3-bar">
          <span>Welcome, <strong>Mike</strong></span
          ><br />
          <a href="#" class="w3-bar-item w3-button"
            ><i class="fa fa-envelope"></i
          ></a>
          <a href="#" class="w3-bar-item w3-button"
            ><i class="fa fa-user"></i
          ></a>
          <a href="#" class="w3-bar-item w3-button"
            ><i class="fa fa-cog"></i
          ></a>
        </div>
      </div>
      <hr />
      <div class="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div class="w3-bar-block">
        <a
          href="#"
          class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
          onclick="w3_close()"
          title="close menu"
          ><i class="fa fa-remove fa-fw"></i>  Close Menu</a
        >
        <a href="#" class="w3-bar-item w3-button w3-padding w3-blue"
          ><i class="fa fa-users fa-fw"></i> Your Group</a
        >
        <a href="#" class="w3-bar-item w3-button w3-padding"
          ><i class="fa fa-cog fa-fw"></i>  Settings</a
        ><br /><br />
      </div>
    </nav>

    <!-- Overlay effect when opening sidebar on small screens -->
    <div
      class="w3-overlay w3-hide-large w3-animate-opacity"
      onclick="w3_close()"
      style="cursor: pointer"
      title="close side menu"
      id="myOverlay"
    ></div>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left: 300px; margin-top: 43px">
      <!-- Header -->
      <header class="w3-container" style="padding-top: 22px">
        <h5>
          <b><i class="fa fa-dashboard"></i> Rate Your Team</b>
        </h5>
      </header>

      <div class="w3-row-padding w3-margin-bottom">
        <div class="w3-quarter">
          <div class="w3-container w3-red w3-padding-16">
            <div class="w3-left">
              <i class="fas fa-user-circle w3-xxxlarge"></i>
            </div>
            <div class="w3-clear"></div>
            <h4>John</h4>
            <button
              onclick="myFunction('rate')"
              class="w3-button w3-block w3-theme-l1"
            >
              <i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Rate
            </button>
          </div>
        </div>
        <div class="w3-quarter">
          <div class="w3-container w3-blue w3-padding-16">
            <div class="w3-left">
              <i class="fas fa-user-circle w3-xxxlarge"></i>
            </div>
            <div class="w3-clear"></div>
            <h4>Jane</h4>
            <button
              onclick="myFunction('rate')"
              class="w3-button w3-block w3-theme-l1"
            >
              <i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Rate
            </button>
          </div>
        </div>
        <div class="w3-quarter">
          <div class="w3-container w3-teal w3-padding-16">
            <div class="w3-left">
              <i class="fas fa-user-circle w3-xxxlarge"></i>
            </div>
            <div class="w3-clear"></div>
            <h4>Jack</h4>
            <button
              onclick="myFunction('rate')"
              class="w3-button w3-block w3-theme-l1"
            >
              <i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Rate
            </button>
          </div>
        </div>
        <div class="w3-quarter">
          <div class="w3-container w3-orange w3-text-white w3-padding-16">
            <div class="w3-left">
              <i class="fas fa-user-circle w3-xxxlarge"></i>
            </div>
            <div class="w3-clear"></div>
            <h4>Juliet</h4>
            <button
              onclick="myFunction('rate')"
              class="w3-button w3-block w3-theme-l1"
            >
              <i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Rate
            </button>
          </div>
        </div>
      </div>

      <div class="w3-hide w3-panel" id="rate">
        <div class="w3-row-padding" style="margin: 0 -16px">
          <h5>Feeds</h5>
          <form
            class="w3-container"
            method="post"
            action="http://localhost:3000/rate"
            id="myForm"
          >
            <table class="w3-table w3-striped w3-white">
              <tr>
                <td>
                  <i class="fas fa-user-tie w3-text-blue w3-large"></i>
                </td>
                <td>Leadership</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label
                  ><input class="w3-input" type="text" name="leadership" />
                </td>
              </tr>
              <tr>
                <td><i class="fas fa-user-circle w3-text-red w3-large"></i></td>
                <td>Assertiveness</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label
                  ><input class="w3-input" type="text" name="assertiveness" />
                </td>
              </tr>
              <tr>
                <td>
                  <i class="far fa-handshake w3-text-yellow w3-large"></i>
                </td>
                <td>Team Player</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label
                  ><input class="w3-input" type="text" name="teamPlayer" />
                </td>
              </tr>
              <tr>
                <td><i class="far fa-lightbulb w3-text-red w3-large"></i></td>
                <td>Creativeness</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label
                  ><input class="w3-input" type="text" name="creativeness" />
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-user-circle w3-text-blue w3-large"></i>
                </td>
                <td>Orator</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label
                  ><input class="w3-input" type="text" name="orator" />
                </td>
              </tr>
              <tr>
                <td><i class="fas fa-user-circle w3-text-red w3-large"></i></td>
                <td>etc</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label><input class="w3-input" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fas fa-user-circle w3-text-green w3-large"></i>
                </td>
                <td>etc</td>
                <td><i>0~10</i></td>
                <td>
                  <label>Score</label><input class="w3-input" type="text" />
                </td>
              </tr>
            </table>
            <input class="w3-right" type="submit" />
          </form>
        </div>
      </div>
      <hr />
      <div class="w3-container">
        <h5>General Stats</h5>
        <p>New Visitors</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-center w3-padding w3-green"
            style="width: 25%"
          >
            +25%
          </div>
        </div>

        <p>New Users</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-center w3-padding w3-orange"
            style="width: 50%"
          >
            50%
          </div>
        </div>

        <p>Bounce Rate</p>
        <div class="w3-grey">
          <div
            class="w3-container w3-center w3-padding w3-red"
            style="width: 75%"
          >
            75%
          </div>
        </div>
      </div>
      <hr />

      <div class="w3-container">
        <h5>Countries</h5>
        <table
          class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white"
        >
          <tr>
            <td>United States</td>
            <td>65%</td>
          </tr>
          <tr>
            <td>UK</td>
            <td>15.7%</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>5.6%</td>
          </tr>
          <tr>
            <td>Spain</td>
            <td>2.1%</td>
          </tr>
          <tr>
            <td>India</td>
            <td>1.9%</td>
          </tr>
          <tr>
            <td>France</td>
            <td>1.5%</td>
          </tr>
        </table>
        <br />
        <button class="w3-button w3-dark-grey">
          More Countries  <i class="fa fa-arrow-right"></i>
        </button>
      </div>
      <hr />

      <br />
      <!-- End page content -->
    </div>

    <script>
      // Get the Sidebar
      var mySidebar = document.getElementById("mySidebar");

      // Get the DIV with overlay effect
      var overlayBg = document.getElementById("myOverlay");

      function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
          x.previousElementSibling.className += " w3-theme-d1";
        } else {
          x.className = x.className.replace("w3-show", "");
          x.previousElementSibling.className = x.previousElementSibling.className.replace(
            " w3-theme-d1",
            ""
          );
        }
      }
      // Toggle between showing and hiding the sidebar, and add overlay effect
      function w3_open() {
        if (mySidebar.style.display === "block") {
          mySidebar.style.display = "none";
          overlayBg.style.display = "none";
        } else {
          mySidebar.style.display = "block";
          overlayBg.style.display = "block";
        }
      }

      // Close the sidebar with the close button
      function w3_close() {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
      }
    </script>
  </body>
</html>
`;
  },
};
