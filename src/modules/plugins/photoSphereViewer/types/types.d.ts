export declare class Viewer extends TypedEventTarget<ViewerEvents> {
  readonly state: ViewerState;
  readonly config: ParsedViewerConfig;
  readonly parent: HTMLElement;
  readonly container: HTMLElement;
  readonly renderer: Renderer;
  readonly textureLoader: TextureLoader;
  readonly dataHelper: DataHelper;
  readonly loader: Loader;
  readonly navbar: Navbar;
  readonly notification: Notification;
  readonly overlay: Overlay;
  readonly panel: Panel;
  private readonly onResize;
  constructor(config: ViewerConfig);
  /**
   * Destroys the viewer
   */
  destroy(): void;
  private init;
  /**
   * Returns the instance of a plugin if it exists
   * @example By plugin identifier
   * ```js
   * viewer.getPlugin('markers')
   * ```
   * @example By plugin class with TypeScript support
   * ```ts
   * viewer.getPlugin<MarkersPlugin>(MarkersPlugin)
   * ```
   */
  getPlugin<T extends AbstractPlugin<any>>(
    pluginId: string | PluginConstructor
  ): T;
  /**
   * Returns the current position of the camera
   */
  getPosition(): Position;
  /**
   * Returns the current zoom level
   */
  getZoomLevel(): number;
  /**
   * Returns the current viewer size
   */
  getSize(): Size;
  /**
   * Checks if the viewer is in fullscreen
   */
  isFullscreenEnabled(): boolean;
  /**
   * Request a new render of the scene
   */
  needsUpdate(): void;
  /**
   * Request the scene to be continuously renderer (when using videos)
   */
  needsContinuousUpdate(enabled: boolean): void;
  /**
   * Resizes the scene if the viewer is resized
   */
  autoSize(): void;
  /**
   * Loads a new panorama file
   * @description Loads a new panorama file, optionally changing the camera position/zoom and activating the transition animation.<br>
   * If the "options" parameter is not defined, the camera will not move and the ongoing animation will continue.<br>
   * If another loading is already in progress it will be aborted.
   * @returns promise resolved with false if the loading was aborted by another call
   */
  setPanorama(path: any, options?: PanoramaOptions): Promise<boolean>;
  /**
   * @deprecated Use the `overlay` plugin instead
   */
  setOverlay(path: any, opacity?: number): Promise<void>;
  /**
   * Update options
   * @throws {@link PSVError} if the configuration is invalid
   */
  setOptions(options: Partial<UpdatableViewerConfig>): void;
  /**
   * Update options
   * @throws {@link PSVError} if the configuration is invalid
   */
  setOption<T extends keyof UpdatableViewerConfig>(
    option: T,
    value: UpdatableViewerConfig[T]
  ): void;
  /**
   * Displays an error message over the viewer
   */
  showError(message: string): void;
  /**
   *  Hides the error message
   */
  hideError(): void;
  /**
   * Rotates the view to specific position
   */
  rotate(position: ExtendedPosition): void;
  /**
   * Zooms to a specific level between `maxFov` and `minFov`
   */
  zoom(level: number): void;
  /**
   * Increases the zoom level
   */
  zoomIn(step?: number): void;
  /**
   * Decreases the zoom level
   */
  zoomOut(step?: number): void;
  /**
   * Rotates and zooms the view with a smooth animation
   */
  animate(options: AnimateOptions): Animation;
  /**
   * Stops the ongoing animation
   * @description The return value is a Promise because the is no guaranty the animation can be stopped synchronously.
   */
  stopAnimation(): PromiseLike<any>;
  /**
   * Resizes the viewer
   */
  resize(size: CssSize): void;
  /**
   * Enters the fullscreen mode
   */
  enterFullscreen(): void;
  /**
   * Exits the fullscreen mode
   */
  exitFullscreen(): void;
  /**
   * Enters or exits the fullscreen mode
   */
  toggleFullscreen(): void;
  /**
   * Enables the keyboard controls
   */
  startKeyboardControl(): void;
  /**
   * Disables the keyboard controls
   */
  stopKeyboardControl(): void;
  /**
   * Creates a new tooltip
   * @description Use {@link Tooltip.move} to update the tooltip without re-create
   * @throws {@link PSVError} if the configuration is invalid
   */
  createTooltip(config: TooltipConfig): Tooltip;
  /**
   * Changes the global mouse cursor
   */
  setCursor(cursor: string): void;
  /**
   * Subscribes to events on objects in the three.js scene
   * @param userDataKey - only objects with the following `userData` will be observed
   */
  observeObjects(userDataKey: string): void;
  /**
   * Unsubscribes to events on objects
   */
  unobserveObjects(userDataKey: string): void;
}
