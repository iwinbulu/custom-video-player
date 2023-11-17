// Get our Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Play/Pause Toggle:
// The provided function togglePlay effectively toggles the playback state of the video element video. It checks whether the video is currently paused or playing and then calls the corresponding method, either play() or pause(), on the video element to switch the playback state.
// -------------------------
// function togglePlay() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// Determine Playback State:
// ------------------------
function togglePlay() {
  // The ternary operator video.paused ? "play" : "pause" determines the appropriate method to call based on the current playback state.
  const methode = video.paused ? "play" : "pause";
  // If video.paused is true, the method "play" is assigned to the variable methode. This indicates that the video is currently paused, and the play() method should be called to start playback.
  // If video.paused is false, the method "pause" is assigned to methode. This indicates that the video is currently playing, and the pause() method should be called to pause playback.
  video[methode]();
  // The statement video[methode](); calls the appropriate method, either play() or pause(), on the video element video. This effectively toggles the playback state of the video.
}
// In summary, the togglePlay function seamlessly switches the playback state of the video element between playing and paused, providing a simple and effective way to control video playback.

// This function is designed to update the text content of a button element (toggle) to reflect the current playback state of the video element (this). It determines the appropriate icon to display based on whether the video is paused or playing.
function updateButton() {
  // Detailed Explanation:
  // --------------------
  // Determine Icon:
  const icon = this.paused ? "PLAY" : "PAUSE";
  // This line uses a ternary operator to determine the appropriate icon to display based on the playback state.
  // If this.paused is true, indicating that the video is paused, the icon variable is assigned the value "PLAY". This signifies that the play icon should be displayed to indicate that playback can be resumed.
  // If this.paused is false, indicating that the video is playing, the icon variable is assigned the value "PAUSE". This signifies that the pause icon should be displayed to indicate that playback can be paused.
  // Update Button Text:
  console.log(icon);
  toggle.textContent = icon;
  // This line updates the text content of the button element (toggle) to the determined icon (icon). This effectively changes the text displayed on the button to reflect the current playback state.
}
// In summary, this function dynamically updates the button's text content to display the appropriate playback icon ("PLAY" or "PAUSE") based on the current state of the video, providing a clear visual indication of whether the video is playing or paused.

// SKIP VIDEO BUTTON
// function skip() {
//   video.currentTime += parseFloat(this.dataset.skip);
// }
// skipButtons.forEach((button) => button.addEventListener("click", skip));
// Clicking on the skip buttons will skip the video forward or backward, depending on the button's action.

// The code snippet involves adding event listeners to each button element within the skipButtons collection. When a skip button is clicked, it should adjust the video's playback position by the specified amount.
skipButtons.forEach((button) => {
  // This line iterates over each button element within the skipButtons collection, represented by the button parameter, and executes the provided callback function.
  button.addEventListener("click", function (e) {
    // This line attaches an event listener to the current button element, specifically for the "click" event. The function(event) {...} part defines the event handler function to be executed when the button is clicked.
    video.currentTime += parseFloat(e.target.dataset.skip); // Inside the event handler function, the video.currentTime property is modified to adjust the video's playback position. parseFloat(event.target.dataset.skip) extracts the skip value associated with the clicked button (stored in the data-skip attribute) and converts it to a number. The skip value is then added to the current playback position, effectively skipping the video forward or backward.
  });
});
// This code ensures that clicking a skip button triggers an event handler function that updates the video's playback position based on the specified skip value associated with the button.

// ---------------
// The code snippet sets up event listeners for all slider elements with the class ".player__slider" to trigger the handleRangeUpdate() function on both "change" and "mousemove" events.
function handleRangeUpdate() {
  // This defines the handleRangeUpdate() function, which will be executed when a slider element triggers an event.
  video[this.name] = this.value; // Inside the function, the this keyword refers to the slider element that triggered the event. The *video[this.name] = this.value; statement updates the corresponding video property based on the slider's name and its current value:
  // *video.name[volume, playbackRate]
}

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate)); // This line attaches an event listener to each slider element in the ranges array for the "change" event. When the slider's value is changed, the handleRangeUpdate() function will be called.

ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
); // Dragging the slider handles will adjust the corresponding settings, such as volume or playback speed, in real time. These changes will take effect immediately.

// This code ensures that changes to the slider elements are reflected in the corresponding video properties, both on value changes (triggered by "change") and continuous mouse movements (triggered by "mousemove"). This allows for dynamic and responsive control over video volume or playback speed using the slider controls.
// ===========

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Hook up the event listeners
video.addEventListener("click", togglePlay); //  When you click on the video, it will toggle the playback between playing and paused.
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// // When the video starts playing or pauses, it will update the playback toggle button's appearance accordingly.

video.addEventListener("timeupdate", handleProgress); // As the video progresses, the progress bar will be updated to reflect the current playback position.

toggle.addEventListener("click", togglePlay); // Clicking the playback toggle button will also toggle the playback between playing and paused.

// In summary, this code ensures that various interactions with the video player, such as clicking buttons, skipping, or adjusting sliders, trigger appropriate actions to control playback and provide visual feedback.
