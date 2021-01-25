// Use shaka.ui.Element as a base class
shaka.SkipButton = class extends shaka.ui.Element {
  constructor(parent, controls) {
    super(parent, controls);

    // The actual button that will be displayed
    this.button_ = document.createElement('button');
    this.button_.textContent = 'Skip current video';
    this.parent.appendChild(this.button_);

    // Listen for clicks on the button to start the next playback
    this.eventManager.listen(this.button_, 'click', () => {
      const nextManifest = /* Your logic to pick the next video to be played */
        shaka.getNextManifest();

      // shaka.ui.Element gives us access to the player object as member of the class
      this.player.load(nextManifest);
    });
  }
};


// Factory that will create a button at run time.
shaka.SkipButton.Factory = class {
  create(rootElement, controls) {
    return new shaka.SkipButton(rootElement, controls);
  }
};

// Register our factory with the controls, so controls can create button instances.
shaka.ui.Controls.registerElement(
  /* This name will serve as a reference to the button in the UI configuration object */ 'skip',
  new shaka.SkipButton.Factory());