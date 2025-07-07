# Shift+Scroll Video Seeker
Chrome extension that allows seeking forward and backward on a video element by scrolling while holding shift!

Scrolling down seeks forward, scrolling up seeks backward, both by 5 seconds.

## Installation
This extension should work on any chromium-based browser; the following instructions are written for Chrome.

1. Download this repo and unzip
2. Enable Developer Mode in `chrome://extensions`
3. In the same menu, click **Load Unpacked** and select the unzipped folder 

## Notes
This extension currently only querys for the first video element it can find. If there are multiple videos on one page this extension cannot switch between them.

I only tested this with my tactile scroll wheel and it only ever output values of 120 and -120 for deltaY. This might not be the case for every mouse.

It is not a .crx file because it seems like google for some reason started blocking their installation from untrusted sources, seems like loading unpacked is equivalent. 
