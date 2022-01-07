import { info, warn } from "./utils/log";
import Collector from "./collector";
import { ANALYZER_STATE, createProbeId } from "./utils/helper";

export default class Probe {
  constructor(cfg) {
    this._id = (cfg.pname && cfg.pname.substr(0, 12).padEnd(12, " ")) || createProbeId();
    this._moduleName = this._id;
    info(this._moduleName, "probe created");
    this._config = cfg;
    this._collector = new Collector(this._config, this._id);
  }

  /**
   * Register a callback to 'onreport'
   * Unregister when callback is null
   * Fired when a report is received
   */
  set onreport(callback) {
    if (callback) {
      this._collector.registerCallback("onreport", callback);
    } else {
      this._collector.unregisterCallback("onreport");
    }
  }

  /**
   * Register a callback to 'onticket'
   * Unregister when callback is null
   * Fired when a ticket is received
   */
  set onticket(callback) {
    if (callback) {
      this._collector.registerCallback("onticket", callback);
    } else {
      this._collector.unregisterCallback("onticket");
    }
  }

  /**
   * Get the id of the Probe
   */
   get id() {
    return this._id;
  }

  /**
   * Get the name of the PeerConnection
   */
  get pname() {
    return this._config.pname;
  }

  /**
   * Get the call identifier
   */
  get cid() {
    return this._config.cid;
  }

  /**
   * Get the user identifier
   */
   get uid() {
    return this._config.uid;
  }

  /**
   * Get the state of the analyzer
   * Value can be 'running' or 'idle'
   */
  get state() {
    return this._collector.state;
  }

  /**
   * Return true if the probe is running
   */
  get isRunning() {
    return this.state === ANALYZER_STATE.RUNNING;
  }

  /**
   * Return true if the probe is idle
   */
  get isIdle() {
    return this.state === ANALYZER_STATE.IDLE;
  }

  /**
   * Set the user identifier
   */
  updateUserId(value) {
    this._config.uid = value;
    this._collector.updateConfig(this._config);
  }

  /**
   * Update the call identifier
   */
   updateCallId(value) {
    this._config.cid = value;
    this._collector.updateConfig(this._config);
  }

  /**
   * Start the probe
   */
  start() {
    if (!this.isIdle) {
      warn(this._moduleName, "probe is already running");
      return;
    }

    info(this._moduleName, "start probe");
    this._collector.start();
  }

  /**
   * Stop the probe
   */
  stop() {
    if (!this.isRunning) {
      warn(this._moduleName, "probe is not running");
      return;
    }

    info(this._moduleName, "stop probe");
    this._collector.stop();
  }
}