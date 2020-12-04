import { fabric } from 'fabric';

export default class RegionEditor {
  // #region Setup & Configuration

  constructor() {
    this.canvas = null;
    this.state = {};
    this.state.backgroundScrolls = false;
    this.state.regions = [];
  }

  bindToCanvas(canvasId, containerId) {
    this.canvas = new fabric.Canvas(canvasId);
    this.container = document.getElementById(containerId);

    this.setupMouseInteraction();
    this.listenForWindowOrContainerResizes();

    const that = this;
    window.setTimeout(() => that.resizeCanvas(), 2000);
  }

  setupMouseInteraction() {
    const that = this;

    let corner1 = null;
    let corner2 = null;

    this.canvas.on('mouse:down', (opts) => {
      const { e } = opts;
      if (e.shiftKey === true) {
        corner1 = { ...that.canvas.getPointer(e, true) };
      }
    });

    this.canvas.on('mouse:up', (opts) => {
      if (!corner1 || !opts.e.shiftKey) return;

      corner2 = { ...that.canvas.getPointer(opts.e, true) };
      that.canvas.setViewportTransform(that.canvas.viewportTransform);

      const position = {
        x: Math.min(corner1.x, corner2.x),
        y: Math.min(corner1.y, corner2.y),
      };

      const width = Math.abs(corner2.x - corner1.x);
      const height = Math.abs(corner2.y - corner1.y);

      const newRegion = {
        position, width, height, tag: '',
      };

      that.addRegion(newRegion);

      corner1 = null;
      corner2 = null;
    });
  }

  setTicketUrl(url) {
    this.state.ticketUrl = url;
    this.update();
  }

  addRegion(region) {
    this.state.regions.push(region);
    this.update();
  }

  // #endregion

  // #region Resizing the canvas

  listenForWindowOrContainerResizes() {
    const that = this;

    this.container.onresize = () => {
      that.resizeCanvas();
    };

    window.onresize = () => {
      that.resizeCanvas();
    };
  }

  resizeCanvas() {
    const width = this.container.clientWidth;
    this.canvas.setWidth(width);
    this.canvas.setHeight(width);
    this.canvas.renderAll();
  }

  // #endregion

  // #region Painting the canvas

  update() {
    this.canvas.clear();
    this.canvas.backgroundColor = 'rgb(230,230,230,1.0)';
    this.drawTicketImage();
    this.drawRegions();
  }

  drawTicketImage() {
    const { ticketUrl } = this.state;
    this.canvas.setBackgroundImage(ticketUrl, this.canvas.renderAll.bind(this.canvas), {
      originX: 'left',
      originY: 'top',
    });
  }

  drawRegions() {
    const that = this;
    this.state.regions.forEach((region) => {
      const rect = new fabric.Rect({
        rx: 10,
        ry: 10,
        stroke: 'red',
        strokeWidth: 2,
        fill: 'transparent',
        left: region.position.x,
        top: region.position.y,
        width: region.width,
        height: region.height,
        selectable: true,
        evented: true,
      });

      that.canvas.add(rect);
    });

    this.canvas.renderAll();
  }

  // #endregion
}
