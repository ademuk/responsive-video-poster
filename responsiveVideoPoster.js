function ResponsiveVideoPoster(el) {
    this.el = el;
    this._init();
}

ResponsiveVideoPoster.prototype._init = function () {
    this._originalSrc = this.el.poster;
    this._responsiveSrcs = this._parseSrcs(this.el.dataset.poster);
    this._setPoster();
};

ResponsiveVideoPoster.prototype._parseSrcs = function (poster) {
    var parts = poster.split(" "), srcs = [];
    if (parts.length >= 2) {
        srcs = [{
            "width": parseInt(parts[1].slice(0, - 1), 10),
            "src": parts[0]
        }];
    }
    return srcs;
};

ResponsiveVideoPoster.prototype._setPoster = function () {
    var docWidth = document.body.clientWidth, i, src, poster;
    for (i = 0; i < this._responsiveSrcs.length; i++) {
        src = this._responsiveSrcs[i];
        if (src.width > docWidth) {
            poster = src.src;
            break;
        }
    }
    if (!poster && this._originalSrc) {
        poster = this._originalSrc;
    }

    if (poster) {
        this.el.poster = poster;
    }
};

ResponsiveVideoPoster.init = function (videos) {
    var i;
    videos = videos || document.getElementsByTagName("video");

    for (i = 0; i < videos.length; i++) {
        new ResponsiveVideoPoster(videos[i]);
    }
};
