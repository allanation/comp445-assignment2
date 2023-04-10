# COMP 445 - Lab Assignment 2

### Application/Transport Layers (A Video Streaming Application)

### Allan Paul Lopez - 40000954

### Josh Leopardi - 40121787

#### Host Server Credentials

#### username: team22

#### password: password22

#### SSH: team22@labs445-2.encs.concordia.ca

#### index.html: This is the code for recording a video and then converting it to a downloadable MP4 file using the FFmpeg.js library. The code includes buttons to request camera access, start recording, stop recording, and download the video. When the recording is stopped, the video is split into small streamlet files and converted to MP4 files using FFmpeg.js. The MP4 files are then added to a zip archive and can be downloaded by the user. The code also includes the necessary HTML elements, such as video and button tags, to allow users to interact with the application.

#### script.js: This code sets up a basic video recorder that allows a user to request access to their camera and microphone, start and stop recording, and then displays the recorded video as a downloadable link. The code uses the getUserMedia() function to obtain access to the camera and microphone, and the MediaRecorder() object to record the video. Once recording is complete, the video is displayed as a downloadable link using a list item and anchor tag.

#### jszip.js & jszip.min.js: These are JavaScript libraries that provide a way to create, read and edit ZIP files directly from the browser. They allow you to easily compress or extract files and folders, and also support encryption, compression level and other features. These libraries are often used in web applications that deal with file compression and decompression, such as file upload and download systems and backup and restore systems.
