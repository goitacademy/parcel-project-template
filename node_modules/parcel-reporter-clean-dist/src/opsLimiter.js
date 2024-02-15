module.exports = () => ({
  queue: [],
  async exec(limit = 5) {
    const currentOps = this.queue.splice(0, limit);

    await Promise.all(currentOps.map(op => op()));

    if (this.queue.length <= 0) return;

    await this.exec(limit);
  },
});
